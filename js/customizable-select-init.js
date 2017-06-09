// re-enable this line when used as import
// import CustomizableSelect from '../Vendor/_customizable-select';

;(function() {
	/**
	* initialize all customizable selects
	* @param {string} varname Description
	* @returns {undefined}
	*/
	var init = function() {
		let customizableSelects = Array.from(document.querySelectorAll('[data-customizable-select'));

		customizableSelects.forEach((select) => {
			new CustomizableSelect(select);
		});

		// if you want to change any the defaults, you can pass them in as options, like this:
		// const options = {
		// 	replacedClass: 'my-own-class',
		// 	wrapperElement: 'article'
		// }
		// customizableSelects.forEach((select) => {
		// 	new CustomizableSelect(select, options);
		// });
	};


	document.addEventListener('DOMContentLoaded', init);

})();
