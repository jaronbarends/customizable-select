/*
* Customizable select
* https://github.com/jaronbarends/customizable-select
*
* Accessible vanilla javascript enhancement for select elements
* This allows you to style the select element only, not the options
*
* Based on http://www.456bereastreet.com/archive/201111/an_accessible_keyboard_friendly_custom_select_menu/
*/
class CustomizableSelect {

	/**
	* Create an instance of custom select
	* @returns {undefined}
	*/
	constructor(select, options) {
		const defaults = {
			replacedClass: 'customizable-select--is-replaced', // Class name added to replaced selects
			customSelectClass: 'custom-select', // Class name of the inserted span element that acts as fake-select
			wrapperElement: 'div', // Element that wraps the select to enable positioning
			wrapperElementClass: 'customizable-select-container'
		}

		const settings = Object.assign({}, defaults, options),
			wrapperElm = document.createElement(settings.wrapperElement),
			customSelect = document.createElement('span');

		// add wrapper element for absolute positioning of fake select
		wrapperElm.classList.add(settings.wrapperElementClass);
		this._wrap(select, wrapperElm);

		// add hiding class to normal select
		select.classList.add(settings.replacedClass);
		// add eventlistener so we can update fake select when select's value changes
		select.addEventListener('change', () => {this._updateCustomSelectText();})

		// add custom select element
		customSelect.classList.add(settings.customSelectClass);
		customSelect.setAttribute('aria-hidden', 'true');
		wrapperElm.appendChild(customSelect)

		this.select = select;
		this.customSelect = customSelect;

		// populate custom select for first time
		this._updateCustomSelectText();
	};

	_updateCustomSelectText() {
		let selectedText = this.select.querySelector('option:checked').textContent;
		this.customSelect.textContent = selectedText;
	}

	// wrap element in wrapper
	_wrap(elm, wrapperElm) {
	    elm.parentNode.insertBefore(wrapperElm, elm);
	    wrapperElm.appendChild(elm);
	}
	
}
// re-enable this line when used as import
// export default CustomizableSelect;
