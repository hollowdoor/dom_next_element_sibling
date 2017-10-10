dom-next-element-sibling
===========

Install
-----

`npm install --save dom-next-element-sibling`

Usage
---

```javascript
import nextElementSibling from 'dom-next-element-sibling';

let element = document.querySelector('ol').children[0];
console.log(element.innerHTML);//First
let second = nextElementSibling(element);
console.log(second.innerHTML);//Second
```

About
----

IE before IE9 doesn't support `element.nextElementSibling`. This module is a ponyfill for that.
