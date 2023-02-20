const componentGenerator = require('./generators/view.js')

module.exports = (plop) => {
    plop.setGenerator('Component', componentGenerator)
}