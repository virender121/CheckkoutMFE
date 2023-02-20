import React from 'react'
import Header from './Header';



export default {
    title: 'Component/Header',
    parameters: {
        component: Header,
        componentSubtitle:'creating the header ..........................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Header {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Header'
}