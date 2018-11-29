import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

import './App.css';

class App extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            reverseValue: 8
        }
    }
    render() {
        const { reverseValue } = this.state
        const categories = [
            {
                name: 'Room',
                content: [
                    {
                        subName: 'Bed',
                        content: ['Beds', 'Cabinets & Shelving', 'Chests', 'Desks', 'Lighting', 'Upholtery']
                    },
                    {
                        subName: 'Decor',
                        content: ['Accents', 'Accessories']
                    }
                ],
                type: 'tree'
            },
            {
                name: 'Lifestyle',
                content: [
                    {
                        subName: 'Classic',
                        content: ['Casual', 'Formal', 'Rustic']
                    },
                    {
                        subName: 'Modern',
                        content: ['Casual', 'Formal']
                    },
                ],
                type: 'tree'
            },
            {
                name: 'Size',
                content: ['Width', 'Depth', 'Height'],
                unit: ['INCHES', 'CM'],
                type: 'slider'
            },
            {
                name: 'Color',
                content: ['Black', 'Blue'],
                type: 'checkbox'
            }
        ];
        const treeCategories = categories.filter(item => item.type === 'tree');
        const checkCategories = categories.filter(item => item.type === 'checkbox');
        return (
            <div>
                <div className='col-md-3'>
                    {treeCategories.map(item =>
                        <div className='list-filter-links'>
                            <h4 className='type-head'>
                                <span className='head' data-toggle="collapse" data-target={"#" + item.name}>{item.name}</span>
                                <span className='collapse-icon'>
                                    <a href='#' data-toggle="collapse" data-target={"#" + item.name}>
                                        <span class="sr-only">Collapse</span>
                                        <span class="btn-collapse"></span>
                                    </a>
                                </span>
                            </h4>
                            <div className='list-filter collapse' id={item.name}>
                                {item.content.map(i =>
                                    <div className='form-group'>
                                        <div className='checkbox no-icon'>
                                            <a href="#">{i.subName}</a>
                                            {i.content.map(el =>
                                                <ul className='list-unstyled sub-filter-links'>
                                                    <li>
                                                        <a href="#">{el}</a>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {checkCategories.map(item =>
                        <div className='list-filter-links'>
                            <h4 className='type-head'>
                                <span className='head' data-toggle="collapse" data-target={"#" + item.name} aria-expanded="true">{item.name}</span>
                                <span className='collapse-icon'>
                                    <a href='#' data-toggle="collapse" data-target={"#" + item.name} aria-expanded="true">
                                        <span class="sr-only">Collapse</span>
                                        <span class="btn-collapse"></span>
                                    </a>
                                </span>
                            </h4>
                            <div className='list-filter collapse' id={item.name} aria-expanded="true">
                                {item.content.map(i =>
                                    <div className='form-group'>
                                        <div className='checkbox'>
                                            <input type='checkbox' name='Colour' />
                                            <label>{i}</label>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {/* <div className='slider orientation-reversed'>
            <div className='slider-horizontal'>
              <Slider
                min={0}
                max={10}
                value={reverseValue}
                orientation='horizontal'
                onChange={this.handleChangeReverse}
              />
              <div className='value'>{reverseValue}</div>
            </div>
          </div> */}
                </div>
                <div className='col-md-9'></div>
            </div>
        );
    }
    handleChangeReverse = (value) => {
        this.setState({
            reverseValue: value
        })
    }
}

export default App;
