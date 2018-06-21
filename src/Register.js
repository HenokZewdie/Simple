import React from 'react'

//This component shows how to set the State and act upon Events
class Register extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            product: '',
            brand: '',
            newItem: ''
        };

        this.updateState = this.updateState.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateState(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleClick(){
        var items = this.state.product + ' ' + this.state.brand;
        this.setState({newItem:items});
    }
    render(){
        return(

            <div>
                <form>
                    <hr />

                    <label>Product Name: </label>
                    <input type="text" name='product' value = {this.state.product} onChange={this.updateState}  />
                    <br /><br />

                    <label>Brand Name: </label>
                    <input type="text" name='brand' value = {this.state.brand} onChange={this.updateState}  />
                    <br /><br />

                    <input type="button" onClick={this.handleClick} value="Submit" />
 
                    <hr />

                    <h3>{this.state.newItem} </h3>
                </form>
            </div>
        );
    }

};

export default Register
