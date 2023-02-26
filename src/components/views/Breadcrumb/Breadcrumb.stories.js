import React from 'react'
import Breadcrumb from './Breadcrumb';



export default {
    title: 'Component/Breadcrumb',
    parameters: {
        component: Breadcrumb,
        componentSubtitle:'it is the component which we are using to use in diffrent components',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Breadcrumb {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Breadcrumb'
}