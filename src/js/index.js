import $ from 'jquery';

import eventHide from './modules/hide.js';

$(function () {

	//init hideBlock
	let $element = $('.js-hide');
	if ($element.length) {
		eventHide($element);
	}
});
