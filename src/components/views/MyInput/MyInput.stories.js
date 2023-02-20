import React from 'react'
import MyInput from './MyInput';



export default {
    title: 'Component/MyInput',
    parameters: {
        component: MyInput,
        componentSubtitle:'just for input ......................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <MyInput {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'MyInput'
}