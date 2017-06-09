# customizable select

A fully accessible, unobtrusive, lightweight vanilla javascript (es2015) enhancement for select-elements

(Based on the plugin described at http://www.456bereastreet.com/archive/201111/an_accessible_keyboard_friendly_custom_select_menu/)

## How it works
The plugin gives the `select` an opacity of 0, wraps it in a container element. It then puts a `span` element behind it, and fills that with the `select`'s current value. You can style the `span`, while the select keeps all of its default functionality. When the `select`'s value changes, the text in the `span` will be updated.

Some very basic styling has already been applied for you.

## How to implement

1. add the following files to your html:
*_css/customizable-select.css_
*_css/customizable-select-theme.css_
*_js/customizable-select.js_
*_js/customizable-select-init_
2. give the select-elements you want to apply styling to a data-attribute `data-customizable-select`
3. when used in an environment that supports _imports_ and _exports_, re-enable the import-line in _customizable-select-init.js_ and the export-line in _customizable-select.js_.

## Customizing for your situation

The files _js/customizable-select.js_ and _css/customizable-select.css_ contain all the code needed for the plugin's proper working. You should not need to touch those.

### _js/customizable-select-init.js_

This file handles the initialization of the plugin. In here, you can change which elements to target, and you can pass an options-object to overrule some default settings upon initialization:
* `replacedClass`: The class name that will be added to the replaced `select`-element (default: `customizable-select--is-replaced`)
* `customSelectClass`: The class name of the fake select element (default: `custom-select`)
* `wrapperElement`: The type of html element to use as a wrapper around the `select` and the fake element (default: `div`)
* `wrapperElementClass`: The class given to the wrapper element (default: `customizable-select-container`)
* 
### _css/customizable-select-theme-css_

This file contains the cosmetic styling for the plugin. Change as you wish.

