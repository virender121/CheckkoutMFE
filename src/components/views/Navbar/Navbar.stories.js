import React from 'react'
import Navbar from './Navbar';



export default {
    title: 'Component/Navbar',
    parameters: {
        component: Navbar,
        componentSubtitle:'just created Navbar ..............................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Navbar {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Navbar'
}