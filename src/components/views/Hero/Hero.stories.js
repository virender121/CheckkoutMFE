import React from 'react'
import Hero from './Hero';



export default {
    title: 'Component/Hero',
    parameters: {
        component: Hero,
        componentSubtitle:'for hero section ......................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Hero {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Hero'
}