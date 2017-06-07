;(function() {
	'use strict';

	/**
	* initialize all
	* @param {string} varname Description
	* @returns {undefined}
	*/
	var init = function() {
		let customizableSelects = Array.from(document.querySelectorAll('[data-customizable-select'));
		customizableSelects.forEach((select) => {
			new CustomizableSelect(select);
		});
	};


	document.addEventListener('DOMContentLoaded', init);

})();
