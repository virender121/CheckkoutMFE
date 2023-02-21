import React from 'react'
import RegisterPage from './RegisterPage';



export default {
    title: 'Component/RegisterPage',
    parameters: {
        component: RegisterPage,
        componentSubtitle:'for new user registeration ................................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <RegisterPage {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'RegisterPage'
}