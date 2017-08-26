// ==UserScript==
// @name        Reddit layout
// @namespace   http://github.com/olmokramer
// @description Nicer reddit layout
// @include     https://*.reddit.com/*
// @version     1
// @author      Olmo Kramer
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = 'body { max-width: 1200px; margin-left: auto; margin-right: auto; }';
    document.head.append(style);
})();

