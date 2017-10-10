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
		mergeable:  'mergeerbaar',
		mergable:   'mergeerbaar',
		merge:      'mergeer',
		merging:    'mergeren',
		push:       'druk',
		pull:       'trek',
		PR:         'TR',
		commit:     'pleging',
		committing: 'plegen',
		rebase:     'herbaas',
		rebasing:   'herbazen',
	};

	Object.keys(replacements).forEach(function(key) {
		replacements[capitalise(key)] = capitalise(replacements[key]);
	});

	const regex = /merge?able|merg(e|ing)|push|pull|commit(ting)?|rebas(e|ing)|\bpr\b/gi

	function merge2mergeer() {
		const texts = [];
		const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
		let node;
		while ((node = walker.nextNode())) {
			if (!node.mergeer) {
				texts.push(node);
			}
		}

		texts.forEach(function(text) {
			text.textContent = text.textContent.replace(regex, function(match, idx) {
				return replacements[match] || match;
			});
			text.mergeer = true;
		});
	}

	merge2mergeer();
	setInterval(merge2mergeer, 2000);

	function capitalise(str) {
		let i = 0;
		while (str[i] == '\\') {
			i += 2;
		}
		return str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
	}
})();
