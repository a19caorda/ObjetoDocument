//Para comprobar el funcionamiento de Implementation y DOMImplementation
console.log(document.implementation);
let modHTML = "HTML";
let version = "2.0";
let DOMIm = document.implementation.hasFeature(modHTML, version);
console.log(modHTML + "" + version + " Es soportado?" + DOMIm);