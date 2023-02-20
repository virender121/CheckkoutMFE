const validations = require('../utils/validations.js')

module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'Name of your component (e.g. My Component)?',
      validate: (value) => {
        let validation = validations.minimumCharacters(3, value)
        return validation
      }
    },
    {
      type: 'input',
      name: 'componentDescription',
      message: 'Please add a description for this component',
      validate: (value) => {
        let validation = validations.minimumCharacters(40, value)
        return validation
      }
    },
    {
      type: 'confim',
      name: 'isCSSNeeded',
      message: 'Does this component require CSS?',
      default: true
    }
  ],
  actions: (data) => {
    const actionsArray = []
    data.viewType = 'Component'
    actionsArray.push({
      type: 'add',
      path: '../src/components/views/{{ properCase componentName }}/{{ properCase componentName }}.jsx',
      templateFile: 'templates/view/view.jsx'
    })
    actionsArray.push({
      type: 'add',
      path: '../src/components/views/{{ properCase componentName }}/{{ properCase componentName }}.stories.js',
      templateFile: 'templates/view/view.stories.js'
    })
    actionsArray.push({
      type: 'add',
      path: '../src/components/views/{{ properCase componentName }}/{{ properCase componentName }}.test.js',
      templateFile: 'templates/view/view.test.js'
    })
    if (data.isCSSNeeded) {
      actionsArray.push({
        type: 'add',
        path: '../src/components/views/{{ properCase componentName }}/{{ properCase componentName }}.module.css',
        templateFile: 'templates/view/view.css'
      })
    }
    return actionsArray
  }
}
