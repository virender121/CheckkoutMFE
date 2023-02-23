import React from 'react'
import Footer from './Footer';



export default {
    title: 'Component/Footer',
    parameters: {
        component: Footer,
        componentSubtitle:'this is footer component which i am using in every component',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Footer {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Footer'
}