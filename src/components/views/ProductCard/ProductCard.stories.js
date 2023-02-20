import React from 'react'
import ProductCard from './ProductCard';



export default {
    title: 'Component/ProductCard',
    parameters: {
        component: ProductCard,
        componentSubtitle:'this will display the product card in a row of columns',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <ProductCard {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'ProductCard'
}