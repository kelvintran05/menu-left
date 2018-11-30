import React, { Component } from 'react';
// import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import Slider from './Slider';

import './App.scss';

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
                        content: [
                            {
                                supSubName: 'Beds',
                                subcontent: ['Beds']
                            },
                            {
                                supSubName: 'Cabinets & Shelving',
                                subcontent: ['TV Cabinets']
                            },
                            {
                                supSubName: 'Chests',
                                subcontent: ['Chests of Drawers', 'Dressers', 'Nightstands', 'Trunks & End of Bed Chests']
                            },
                        ]
                    },
                    {
                        subName: 'Decor',
                        content: [
                            {
                                supSubName: 'Accents',
                                subcontent: ['Canterburies', 'Sculptures']
                            },
                        ]
                    }
                ],
                type: 'tree'
            },
            {
                name: 'Lifestyle',
                content: [
                    {
                        subName: 'Classic',
                        content: [
                            {
                                supSubName: 'Casual',
                                subcontent: [
                                    {
                                        SupName: 'Accessories',
                                        subcontent: ['Trays']
                                    },
                                ]
                            },
                        ]
                    }
                ],
                type: 'supTree'
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
        const supTreeCategories = categories.filter(item => item.type === 'supTree');
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
                                        <span className="sr-only">Collapse</span>
                                        <span className="btn-collapse"></span>
                                    </a>
                                </span>
                            </h4>
                            <div className='list-filter collapse' id={item.name}>
                                {item.content.map((i, key) =>
                                    <div className='form-group'>
                                        <div className='checkbox no-icon'>
                                            <a className='a' href="#" onClick={ this.onCategorySelection }>{i.subName}</a>
                                            {i.content.map(el =>
                                                <ul className='list-unstyled sub-filter-links'>
                                                    <li>
                                                        <a href="#">{el.supSubName}</a>
                                                        {el.subcontent.map(x =>
                                                            <ul className='list-unstyled sub-filter-links'>
                                                                <li>
                                                                    <a href="#">{x}</a>
                                                                </li>
                                                            </ul>
                                                        )}
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    {supTreeCategories.map(item =>
                        <div className='list-filter-links'>
                            <h4 className='type-head'>
                                <span className='head' data-toggle="collapse" data-target={"#" + item.name}>{item.name}</span>
                                <span className='collapse-icon'>
                                    <a href='#' data-toggle="collapse" data-target={"#" + item.name}>
                                        <span className="sr-only">Collapse</span>
                                        <span className="btn-collapse"></span>
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
                                                        <a href="#">{el.supSubName}</a>
                                                        {el.subcontent.map(x =>
                                                            <ul className='list-unstyled sub-filter-links'>
                                                                <li>
                                                                    <a href="#">{x.SupName}</a>
                                                                    {x.subcontent.map(y =>
                                                                        <ul className='list-unstyled sub-filter-links'>
                                                                            <li>
                                                                                <a href="#">{y}</a>
                                                                            </li>
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                            </ul>
                                                        )}
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
                                        <span className="sr-only">Collapse</span>
                                        <span className="btn-collapse"></span>
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
                    <div className='slider orientation-reversed'>
                        <div className='slider-horizontal'>
                                <Slider/>
                            {/* <div className='value'>{reverseValue}</div> */}
                        </div>
                    </div>
                </div>
                <div className='col-md-9'></div>
            </div>
        );
    }
    onCategorySelection = (e) => {
        console.log('<<<<', e.target.className);
    }
    handleChangeReverse = (value) => {
        this.setState({
            reverseValue: value
        })
    }
}

export default App;
