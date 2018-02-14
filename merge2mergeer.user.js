// ==UserScript==
// @name        merge2mergeer
// @namespace   http://github.com/olmokramer
// @description Change instances of 'merge' to 'mergeer'
// @include     https://github.com/*
// @include     https://*.github.com/*
// @version     6
// @grant       none
// ==/UserScript==

(function() {
	const replacements = {
		mergeable: 'mergeerbaar',
		mergable:  'mergeerbaar',
		merge:     'mergeer',
		merging:   'mergeren',
		push:      'druk',
		pull:      'trek',
		PR:        'TR',
	};

	function capitalise(str) {
		return str[0].toUpperCase() + str.slice(1);
	}

	Object.keys(replacements).forEach(function(key) {
		replacements[capitalise(key)] = capitalise(replacements[key]);
	});

	const regex = new RegExp(Object.keys(replacements).join('|'), 'g');

	function merge2mergeer() {
		const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
			acceptNode: function(node) {
				if (!node.mergeer && !node.parentNode.closest('.blob-code')) {
					return NodeFilter.FILTER_ACCEPT;
				}
			},
		});

		let node;
		while ((node = walker.nextNode())) {
			node.mergeer = true;
			node.textContent = node.textContent.replace(regex, function(match, idx) {
				return replacements[match] || match;
			});
		}
	}

	merge2mergeer();
	setInterval(merge2mergeer, 2000);
})();
