import React from 'react'
import OrderCard from './OrderCard';



export default {
    title: 'Component/OrderCard',
    parameters: {
        component: OrderCard,
        componentSubtitle:'this components i made to use in person detail section',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <OrderCard {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'OrderCard'
}