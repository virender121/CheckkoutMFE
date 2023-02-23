import React from 'react'
import CheckoutPage from './CheckoutPage';



export default {
    title: 'Component/CheckoutPage',
    parameters: {
        component: CheckoutPage,
        componentSubtitle:'this is my checkout page which i an making for billing details',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <CheckoutPage {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'CheckoutPage'
}