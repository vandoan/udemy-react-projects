import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.checkoutSummary}>
            <h1 style={{textAlign: 'center'}}>Yum time.</h1>
            <div style={{textAlign: 'center'}}>
                <div style={{width: '100%', margin: 'auto'}} >
                    <Burger ingredients={props.ingredients} />
                </div>
                <Button clicked={props.checkoutCancelled} btnType="Danger">Cancel</Button>
                <Button clicked={props.checkoutContinued} btnType="Success">Continue</Button>
            </div>
        </div>
    )
}

export default checkoutSummary;