// ==UserScript==
// @name        GitHub sticky repoheader
// @namespace   http://github.com/olmokramer
// @description Make the repo header `position: sticky;`
// @include     https://github.com/*
// @include     https://*.github.com/*
// @version     3
// @author      Olmo Kramer
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        .repohead { position: sticky; top: 0; z-index: 10; }
        .discussion-sidebar { position: sticky; top: 120px; z-index: 5; }
    `;
    document.head.append(style);
})();
