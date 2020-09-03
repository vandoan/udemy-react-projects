import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Mindy Meow',
                address: {
                    street: '11 Meow Lane',
                    state: 'CA',
                    city: 'Goleta',
                    zip: '911111'
                },
                email: 'meow@time.com',
                deliveryMethod: 'fastest'
            }
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
                <input className={classes.Input} type='text' name='name' placeholder='Your name' />
                <input className={classes.Input} type='email' name='emai' placeholder='your@email.com' />
                <input className={classes.Input} type='text' name='street' placeholder='Street' />
                <input className={classes.Input} type='email' name='postal' placeholder='Postal code' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter our Contact Data</h4>l
                {form}
            </div>
        )
    }
}

export default ContactData;
