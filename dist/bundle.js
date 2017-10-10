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

module.exports = nextElementSibling;
//# sourceMappingURL=bundle.js.map
