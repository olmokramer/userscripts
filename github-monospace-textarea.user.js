// ==UserScript==
// @name        GitHub monospace textarea
// @namespace   http://github.com/olmokramer
// @description Make fonts in <textarea> elements monospace
// @include     https://github.com/*
// @include     https://*.github.com/*
// @version     3
// @author      Olmo Kramer
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = 'textarea { font-family: monospace !important; }';
    document.head.append(style);
})();
