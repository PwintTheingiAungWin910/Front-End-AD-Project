import React, { Component } from 'react';
import './InventoryPopup.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Axios from 'axios';

class InventoryPopup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: props.data,
            categoryData: props.categoryData,
            openCat: false,
            cat: ""
        }
    }

    //handle changing field value in fields
    handleUpdatedData = (event) => {
        let update = event.target.value;
        if (event.target.id === "itemName") {
            this.setState(prevState => {
                const data = prevState.data;
                return {
                    data: {
                        ...data,
                        desc: update,
                    }
                }
            })
        }
        if (event.target.id === "itemCode") {
            this.setState(prevState => {
                const data = prevState.data;
                return {
                    data: {
                        ...data,
                        Id: update,
                    }
                }
            })
        }
        if (event.target.id === "qty") {
            this.setState(prevState => {
                const data = prevState.data;
                return {
                    data: {
                        ...data,
                        inventoryQty: Number(update),
                    }
                }
            })
        }
    }
    //event handling for dropdown
    showCat = (event) => {
        const selected = event.target.value
        this.setState(prevState => {
            const data = prevState.data
            return {
                data: {
                    ...data,
                    category: selected
                }
            }
        });
    }
    closeCat = () => {
        this.setState({
            openCat: !this.state.openCat
        })
    }

    catOpen = () => {
        this.setState({
            openCat: !this.state.openCat
        })
    }

    //Event Handling for submitting form
    submitForm = () => {
        Axios.post('https://localhost:5001/api/store/stationery/post/', this.state.data)
        //Axios.post()
    }

    render() {
        return (
            <div className="popup">
                <div className="popupInner">
                    <div className="form" onChange={this.handleUpdatedData}>
                        <h1>Inventory Record</h1>
                        <HighlightOffIcon onClick={this.props.closePopup} />
                        <div className="formSection">
                            <fieldset>
                                Item Code:
                                <input type="text" id="itemCode" value={this.state.data.Id} />
                            </fieldset>
                            <fieldset>
                                Item Category:
                                {/*<input type="text" id="itemName" value={this.state.data.category} />*/}
                                <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    value={this.state.data.category}
                                    open={this.state.openCat}
                                    onClose={this.closeCat}
                                    onOpen={this.catOpen}
                                    onChange={this.showCat}>
                                    {this.props.categoryData.map(item => <MenuItem value={item}>{item}</MenuItem>)}
                                </Select>
                            </fieldset>
                        </div>
                        <fieldset>
                            Item Name:
                            <input type="text" id="itemName" value={this.state.data.desc} />
                        </fieldset>
                        <fieldset>
                            Quantity:
                            <input type="number" min="1" max="9999" id="qty" value={this.state.data.inventoryQty} />
                        </fieldset>
                        <div className="formButtons">
                            <button>Delete</button>
                            <button onClick={this.submitForm}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InventoryPopup;