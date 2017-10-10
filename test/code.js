(function () {
'use strict';

//See https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling
var nextElementSibling = (function (){
    if(!("nextElementSibling" in document.documentElement)){
        return function (element){
            var e = element.nextSibling;
            while(e && 1 !== e.nodeType)
                { e = e.nextSibling; }
            return e;
        };
    }

    return function (element){
        return element.nextElementSibling;
    };
})();

var element = document.querySelector('ol').children[0];
console.log(element.innerHTML);//First
var second = nextElementSibling(element);
console.log(second.innerHTML);//Second

}());
//# sourceMappingURL=code.js.map
