// ==UserScript==
// @name        GitHub code-viewer font
// @namespace   http://github.com/olmokramer
// @description Change the font of the GitHub code-viewer
// @include     https://github.com/*
// @version     1
// @author      Olmo Kramer
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = '.blob-num, .blob-code { font-family: monospace !important; }';
    document.head.append(style);
})();
