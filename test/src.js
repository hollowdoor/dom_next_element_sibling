import nextElementSibling from '../';

let element = document.querySelector('ol').children[0];
console.log(element.innerHTML);//First
let second = nextElementSibling(element);
console.log(second.innerHTML);//Second
