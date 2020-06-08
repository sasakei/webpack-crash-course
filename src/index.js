import _ from 'lodash'
import lion from './utilities'

console.log(lion.say());

function component() {
    const element =document.createElement('div');
    const array = ['Hello', 'Webpack', '!!'];
    element.innerHTML = _.join(array, ' ');
    return element;
}

document.body.appendChild(component());