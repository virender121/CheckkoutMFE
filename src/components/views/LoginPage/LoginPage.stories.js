import React from 'react'
import LoginPage from './LoginPage';



export default {
    title: 'Component/LoginPage',
    parameters: {
        component: LoginPage,
        componentSubtitle:'for custumer registration ......................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <LoginPage {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'LoginPage'
}