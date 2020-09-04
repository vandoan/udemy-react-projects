import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },,
            zip: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: ''
            },,
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},
                        
                    ]
                    placeholder: 'Your Name'
                },
                value: ''
            },
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
            });
    }

    render () {
        let form = (
            <form>
                <Input inputtype='input' type='text' name='name' placeholder='Your name' />
                <Input inputtype='input' type='email' name='emai' placeholder='your@email.com' />
                <Input inputtype='input' type='text' name='street' placeholder='Street' />
                <Input inputtype='input' type='email' name='postal' placeholder='Postal code' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
