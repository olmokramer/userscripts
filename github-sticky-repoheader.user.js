// ==UserScript==
// @name        GitHub sticky repoheader
// @namespace   http://github.com/olmokramer
// @description Make the repo header `position: sticky;`
// @include     https://github.com/*
// @include     https://*.github.com/*
// @version     4
// @author      Olmo Kramer
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `

.repohead {
	position: sticky;
	top: -63px;
	z-index: 10;
}

.discussion-sidebar {
	position: sticky;
	top: 50px;
	z-index: 5;
}

.pr-toolbar {
	position: sticky;
	top: 40px;
	z-index: 5;
	box-shadow: 0 3px 3px rgba(0, 0, 0, .2);
	margin-bottom: 1rem;
}

    `;
    document.head.append(style);
})();
