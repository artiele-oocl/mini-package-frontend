import React, { Component } from 'react';

export default class BookItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputPackageNumber: '',
            inputPickupTime: ''
        }
        this.baseState = this.state;
    }
    dispatch = () => {
        console.log(this.state)
        this.props.createNewBooking(this.state);
        this.setState(this.baseState);
    }
    cancelBook = (e) => {
        e.preventDefault();
        this.setState(this.baseState);
    }
    handleInputPackageNumber = (event) => {
        this.setState({ inputPackageNumber: event.target.value});
    };
    handleInputPickupTime = (event) => {
        this.setState({ inputPickupTime: event.target.value});
    };
    render() {
        return(
            <div>
                <label>
                    Package number:
                    <input onChange={this.handleInputPackageNumber}
                    value={this.state.inputPackageNumber}
                    type="text" placeholder="Enter package number..." name="package_number" />
                </label>
                <label>
                    Pickup Time:
                    <input onChange={this.handleInputPickupTime}
                    value={this.state.inputPickupTime}
                    type="text" placeholder="Enter package number..." name="pickup_time" />
                </label>
                <button type="submit" onClick={this.dispatch}>Book</button>
                <button type="button" onClick={this.cancelBook}>Cancel</button>
            </div>
        )
    }
}