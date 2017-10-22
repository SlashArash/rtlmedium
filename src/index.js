// ==UserScript==
// @name        RTLMedium
// @namespace   slasharash.rtlmedium
// @include     https://medium.com/*
// @version     1.0.0
// @author      slasharash
// @license MIT
// @homepageURL    https://github.com/SlashArash/rtlmedium
// @supportURL     https://github.com/SlashArash/rtlmedium
// @updateURL      https://raw.githubusercontent.com/SlashArash/rtlmedium/master/dist/bundle.js
// @downloadURL    https://raw.githubusercontent.com/SlashArash/rtlmedium/master/dist/bundle.js
// @run-at document-end
// @grant       none
// ==/UserScript==

import franc from 'franc';
import WebFont from 'webfontloader';


var ptags = document.getElementsByClassName('graf--p');

// detect language of first P tag
var text = ptags[0].innerHTML;
var lang = franc(text);

if (lang == 'fas' || lang == 'arb' || lang == 'urd' || lang == 'heb') {
    // change direction of content 
    var elems = document.getElementsByClassName('section-content');
    elems[0].setAttribute("style", "direction:rtl;");

    // load Lalezar font form google fond directory
    WebFont.load({
        google: {
            families: ['Roboto']
        },
    });
    
    // change font family of P tags
    var size = ptags.length;
    for (var i = 0; i < size; i++) {
        ptags[i].setAttribute("style", "font-family:Roboto;");
    }
} 
