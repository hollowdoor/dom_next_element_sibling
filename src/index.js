//See https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling
const nextElementSibling = (()=>{
    if(!("nextElementSibling" in document.documentElement)){
        return element=>{
            let e = element.nextSibling;
            while(e && 1 !== e.nodeType)
                e = e.nextSibling;
            return e;
        };
    }

    return element=>{
        return element.nextElementSibling;
    };
})();

export default nextElementSibling;
