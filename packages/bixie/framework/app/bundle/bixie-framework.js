/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	if (window.Vue) {
	    //components
	    Vue.component('input-category', __webpack_require__(1));
	    Vue.component('input-tags', __webpack_require__(4));
	    //directives
	    Vue.directive('spinner', __webpack_require__(7));
	    //partials
	    Vue.partial('fieldtype-basic', __webpack_require__(8));
	    Vue.partial('fieldtype-settings', __webpack_require__(9));
	    Vue.partial('fieldtype-appearance', __webpack_require__(10));
	    //fields
	    __webpack_require__(11)(Vue);

	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(2)
	__vue_template__ = __webpack_require__(3)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\app\\components\\input-category.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	// <template>
	//
	//     <ul class="uk-list">
	//         <li v-for="value in values">
	//             <div class="uk-nestable-panel uk-visible-hover uk-flex uk-flex-middle">
	//                 <div class="uk-flex-item-1">
	//                     {{ getText(value) }}
	//                 </div>
	//                 <div class="">
	//                     <ul class="uk-subnav pk-subnav-icon">
	//                         <li><a class="pk-icon-star"
	//                                data-uk-tooltip="{delay: 300}" title="{{ 'Make primary category' | trans }}"
	//                                :class="{'uk-invisible': primary !== value}"
	//                                @click.prevent="primary = value"></a></li>
	//                         <li><a class="pk-icon-delete pk-icon-hover uk-invisible" @click.prevent="removeCategory(value)"></a></li>
	//                     </ul>
	//                 </div>
	//             </div>
	//         </li>
	//     </ul>
	//
	//     <div id="select-category" class="uk-flex uk-flex-middle uk-margin">
	//         <div>
	//             <div class="uk-position-relative" data-uk-dropdown="{justify:'#select-category'}">
	//                 <button type="button" class="uk-button uk-button-small">{{ 'Please select' | trans }}</button>
	//
	//                 <div class="uk-dropdown uk-dropdown-small">
	//                     <ul class="uk-nav uk-nav-dropdown">
	//                         <category-item v-for="category in tree[0]" :category="category" :tree="tree"></category-item>
	//                     </ul>
	//                 </div>
	//             </div>
	//
	//         </div>
	//     </div>
	//
	// </template>
	//
	// <script>

	module.exports = {

	    props: {
	        'values': { default: [] },
	        'primary': { default: 0 },
	        'categories': { default: [] }
	    },

	    data: function data() {
	        return {
	            'tree': {}
	        };
	    },

	    created: function created() {
	        this.tree = _(this.categories).sortBy('priority').groupBy('parent_id').value();
	    },

	    methods: {

	        addCategory: function addCategory(value) {
	            if (!this.isSelected(value)) {
	                this.values.push(value);
	                this.checkPrimary();
	            }
	        },

	        removeCategory: function removeCategory(value) {
	            this.values.$remove(value);
	            this.checkPrimary();
	        },

	        isSelected: function isSelected(value) {
	            return this.values.indexOf(value) > -1;
	        },

	        getText: function getText(value) {
	            return _.find(this.categories, 'id', value).title;
	        },

	        checkPrimary: function checkPrimary() {
	            if (this.values.length && this.values.indexOf(this.primary) == -1) {
	                this.primary = this.values[0];
	            }
	        }

	    },

	    components: {

	        categoryItem: {

	            name: 'categoryItem',

	            props: ['category', 'tree'],

	            template: '<li :class="{\'uk-parent\': tree[category.id]}">\n    <a @click.prevent="addCategory()" :class="{\'uk-text-primary\': isSelected()}">{{ category.title }}</a>\n    <ul class="uk-nav-sub" v-if="tree[category.id]">\n        <category-item v-for="category in tree[category.id]" :category="category" :tree="tree"></category-item>\n    </ul>\n</li>',

	            methods: {
	                isSelected: function isSelected() {
	                    this.getBase().isSelected(this.category.id);
	                },
	                addCategory: function addCategory() {
	                    this.getBase().addCategory(this.category.id);
	                },
	                getBase: function getBase() {
	                    var base = this.$parent;
	                    do {

	                        if (base.$options.name == 'input-category') {
	                            return base;
	                        }

	                        base = base.$parent;
	                    } while (base);
	                }
	            }
	        }

	    }

	};

	// </script>
	//

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n    <ul class=\"uk-list\">\r\n        <li v-for=\"value in values\">\r\n            <div class=\"uk-nestable-panel uk-visible-hover uk-flex uk-flex-middle\">\r\n                <div class=\"uk-flex-item-1\">\r\n                    {{ getText(value) }}\r\n                </div>\r\n                <div class=\"\">\r\n                    <ul class=\"uk-subnav pk-subnav-icon\">\r\n                        <li><a class=\"pk-icon-star\"\r\n                               data-uk-tooltip=\"{delay: 300}\" title=\"{{ 'Make primary category' | trans }}\"\r\n                               :class=\"{'uk-invisible': primary !== value}\"\r\n                               @click.prevent=\"primary = value\"></a></li>\r\n                        <li><a class=\"pk-icon-delete pk-icon-hover uk-invisible\" @click.prevent=\"removeCategory(value)\"></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n\r\n    <div id=\"select-category\" class=\"uk-flex uk-flex-middle uk-margin\">\r\n        <div>\r\n            <div class=\"uk-position-relative\" data-uk-dropdown=\"{justify:'#select-category'}\">\r\n                <button type=\"button\" class=\"uk-button uk-button-small\">{{ 'Please select' | trans }}</button>\r\n\r\n                <div class=\"uk-dropdown uk-dropdown-small\">\r\n                    <ul class=\"uk-nav uk-nav-dropdown\">\r\n                        <category-item v-for=\"category in tree[0]\" :category=\"category\" :tree=\"tree\"></category-item>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(5)
	__vue_template__ = __webpack_require__(6)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\BixieProjects\\pagekit\\pagekit\\packages\\bixie\\framework\\app\\components\\input-tags.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	// <template>
	//
	//     <div>
	//         <ul v-if="style == 'list'" class="uk-list uk-list-line">
	//             <li v-for="tag in tags">
	//                 <a class="uk-float-right uk-close" @click.prevent="removeTag(tag)"></a>
	//                 {{ tag }}
	//             </li>
	//         </ul>
	//         <div v-else class="uk-flex uk-flex-wrap" data-uk-margin="">
	//             <div v-for="tag in tags" class="uk-badge uk-margin-small-right" track-by="$index">
	//                 <a class="uk-float-right uk-close" @click.prevent="removeTag(tag)"></a>
	//                 {{ tag }}
	//             </div>
	//         </div>
	//
	//         <div class="uk-flex uk-flex-middle uk-margin">
	//             <div v-show="existing.length">
	//                 <div class="uk-position-relative" data-uk-dropdown="">
	//                     <button type="button" class="uk-button uk-button-small">{{ 'Existing' | trans }}</button>
	//
	//                     <div class="uk-dropdown uk-dropdown-small">
	//                         <ul class="uk-nav uk-nav-dropdown">
	//                             <li v-for="tag in existing"><a :class="{'uk-text-muted': selected(tag)}" @click.prevent="addTag(tag)">{{ tag }}</a></li>
	//                         </ul>
	//                     </div>
	//                 </div>
	//
	//             </div>
	//             <div class="uk-flex-item-1 uk-margin-small-left">
	//                 <div class="uk-form-password">
	//                     <input type="text" class="uk-width-1-1" v-model="newtag">
	//                     <a class="uk-form-password-toggle" @click.prevent="addTag()"><i
	//                             class="uk-icon-check uk-icon-hover"></i></a>
	//                 </div>
	//             </div>
	//
	//         </div>
	//     </div>
	//
	//
	// </template>
	//
	// <script>

	module.exports = {

	    props: {
	        'tags': Array,
	        'existing': Array,
	        'style': { type: String, default: 'tags' }
	    },

	    data: function data() {
	        return {
	            'newtag': ''
	        };
	    },

	    methods: {

	        addTag: function addTag(tag) {
	            tag = tag || this.newtag;
	            if (this.selected(tag)) {
	                return;
	            }
	            this.tags.push(tag);
	            if (this.style == 'tags') {
	                this.$nextTick(function () {
	                    UIkit.$html.trigger('resize'); //todo why no check.display or changed.dom???
	                });
	            }
	            this.newtag = '';
	        },

	        removeTag: function removeTag(tag) {
	            this.tags.$remove(tag);
	        },

	        selected: function selected(tag) {
	            return this.tags.indexOf(tag) > -1;
	        }

	    }

	};

	// </script>
	//

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n    <div>\r\n        <ul v-if=\"style == 'list'\" class=\"uk-list uk-list-line\">\r\n            <li v-for=\"tag in tags\">\r\n                <a class=\"uk-float-right uk-close\" @click.prevent=\"removeTag(tag)\"></a>\r\n                {{ tag }}\r\n            </li>\r\n        </ul>\r\n        <div v-else class=\"uk-flex uk-flex-wrap\" data-uk-margin=\"\">\r\n            <div v-for=\"tag in tags\" class=\"uk-badge uk-margin-small-right\" track-by=\"$index\">\r\n                <a class=\"uk-float-right uk-close\" @click.prevent=\"removeTag(tag)\"></a>\r\n                {{ tag }}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-flex uk-flex-middle uk-margin\">\r\n            <div v-show=\"existing.length\">\r\n                <div class=\"uk-position-relative\" data-uk-dropdown=\"\">\r\n                    <button type=\"button\" class=\"uk-button uk-button-small\">{{ 'Existing' | trans }}</button>\r\n\r\n                    <div class=\"uk-dropdown uk-dropdown-small\">\r\n                        <ul class=\"uk-nav uk-nav-dropdown\">\r\n                            <li v-for=\"tag in existing\"><a :class=\"{'uk-text-muted': selected(tag)}\" @click.prevent=\"addTag(tag)\">{{ tag }}</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"uk-flex-item-1 uk-margin-small-left\">\r\n                <div class=\"uk-form-password\">\r\n                    <input type=\"text\" class=\"uk-width-1-1\" v-model=\"newtag\">\r\n                    <a class=\"uk-form-password-toggle\" @click.prevent=\"addTag()\"><i\r\n                            class=\"uk-icon-check uk-icon-hover\"></i></a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n";

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {

	    params: ['icon', 'spinner'],

	    bind: function () {
	        var base = this.el.className || 'uk-margin-small-right';
	        this.iconClass = base + ' uk-icon-' + this.params.icon;
	        this.spinningClass = base + ' uk-icon-spin uk-icon-' + (this.params.spinner || 'circle-o-notch');

	    },

	    update: function (value) {
	        this.el.className = value ? this.spinningClass : this.iconClass;
	    }

	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-row\">\r\n    <label for=\"form-label\" class=\"uk-form-label\">{{ 'Label' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <input id=\"form-label\" class=\"uk-form-width-large\" type=\"text\" name=\"label\"\r\n               v-model=\"field.label\" v-validate:required>\r\n    </div>\r\n    <p class=\"uk-form-help-block uk-text-danger\" v-show=\"form.label.invalid\">{{ 'Please enter a label' | trans }}</p>\r\n</div>\r\n\r\n<div class=\"uk-form-row\">\r\n    <label for=\"form-slug\" class=\"uk-form-label\">{{ 'Slug' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <input id=\"form-slug\" class=\"uk-form-width-large\" type=\"text\" v-model=\"field.slug\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"uk-margin\" v-if=\"fieldSettings\">\r\n    <fields :config=\"fieldSettings\" :model.sync=\"field.data\" template=\"formrow\"></fields>\r\n</div>\r\n\r\n<div class=\"uk-form-row\">\r\n    <label for=\"form-slug\" class=\"uk-form-label\">{{ 'Help text' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <textarea id=\"form-help_text\" class=\"uk-form-width-large\"\r\n                  rows=\"2\" cols=\"40\" v-model=\"field.data.help_text\"></textarea>\r\n    </div>\r\n</div>\r\n\r\n";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div v-if=\"type.required < 0\" class=\"uk-form-row\">\r\n    <span class=\"uk-form-label\">{{ 'Field required' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <label><input type=\"checkbox\" value=\"required\" v-model=\"field.data.required\"> {{ 'Required' | trans\r\n            }}</label>\r\n    </div>\r\n</div>\r\n\r\n<div v-if=\"type.multiple < 0\" class=\"uk-form-row\">\r\n    <span class=\"uk-form-label\">{{ 'Multiple values' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <label><input type=\"checkbox\" value=\"multiple\" v-model=\"field.data.multiple\"> {{ 'Multiple' | trans\r\n            }}</label>\r\n    </div>\r\n</div>\r\n\r\n<div v-if=\"type.controls < 0\" class=\"uk-form-row\">\r\n    <span class=\"uk-form-label\">{{ 'Extra controls' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <label><input type=\"checkbox\" value=\"controls\" v-model=\"field.data.controls\"> {{ 'Show controls' | trans\r\n            }}</label>\r\n    </div>\r\n</div>\r\n\r\n<div v-if=\"type.repeatable < 0\" class=\"uk-form-row\">\r\n    <span class=\"uk-form-label\">{{ 'Field repeat' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <label><input type=\"checkbox\" value=\"repeatable\" v-model=\"field.data.repeatable\"> {{ 'Repeatable' | trans\r\n            }}</label>\r\n\r\n        <div v-show=\"field.data.repeatable == 1\" class=\"uk-flex uk-flex-middle uk-margin-left\">\r\n            <span class=\"uk-margin-small-right\">{{ 'Maximum' | trans }}</span>\r\n            <input type=\"number\" class=\"uk-text-right uk-form-small uk-form-width-mini\"\r\n                   v-model=\"field.data.max_repeat\" min=\"1\" :max=\"type.max_repeat\" number/>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"uk-form-row\" v-if=\"field.roles\">\r\n    <span class=\"uk-form-label\">{{ 'Restrict Access' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <p v-for=\"role in roles\" class=\"uk-form-controls-condensed\">\r\n            <label><input type=\"checkbox\" :value=\"role.id\" v-model=\"field.roles\" number> {{ role.name }}</label>\r\n        </p>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-row\">\r\n    <span class=\"uk-form-label\">{{ 'Label' | trans }}</span>\r\n\r\n    <div class=\"uk-form-controls uk-form-controls-text\">\r\n        <label><input type=\"checkbox\" value=\"hide-label\" v-model=\"field.data.hide_label\"> {{ 'Hide Label' |\r\n            trans }}</label>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"uk-form-row\">\r\n    <label for=\"form-class\" class=\"uk-form-label\">{{ 'Class suffix' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <input id=\"form-class\" class=\"uk-form-width-large\" type=\"text\" v-model=\"field.data.classSfx\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"uk-form-row\" v-show=\"field.data.required\">\r\n    <label for=\"form-required-error\" class=\"uk-form-label\">{{ 'Required error message' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <input id=\"form-required-error\" class=\"uk-form-width-large\" type=\"text\"\r\n               v-model=\"field.data.requiredError\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"uk-form-row\">\r\n    <label for=\"form-required-error\" class=\"uk-form-label\">{{ 'Display help text' | trans }}</label>\r\n\r\n    <div class=\"uk-form-controls\">\r\n        <select id=\"form-help_show\" class=\"uk-form-width-medium\" v-model=\"field.data.help_show\">\r\n            <option value=\"\">{{ 'Don\\'t show' | trans }}</option>\r\n            <option value=\"tooltip_icon\">{{ 'Tooltip icon' | trans }}</option>\r\n            <option value=\"block\">{{ 'Below input' | trans }}</option>\r\n         </select>\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (Vue) {

	    Vue.field.templates.formrow = __webpack_require__(12);
	    Vue.field.templates.raw = __webpack_require__(13);
	    Vue.field.templates.descriptionlist = __webpack_require__(14);

	    Vue.field.types.text = '<input type="text" v-bind="attrs" v-model="value">';
	    Vue.field.types.textarea = '<textarea v-bind="attrs" v-model="value"></textarea>';
	    Vue.field.types.select = '<select v-bind="attrs" v-model="value"><option v-for="option in options" :value="option">{{ $key }}</option></select>';
	    Vue.field.types.radio = '<p class="uk-form-controls-condensed"><label v-for="option in options" v-bind="attrs"><input type="radio" :value="option" v-model="value"> {{ $key }}</label></p>';
	    Vue.field.types.checkbox = '<p class="uk-form-controls-condensed"><label><input type="checkbox" v-bind="attrs" v-model="value" v-bind:true-value="1" v-bind:false-value="0" number> {{ optionlabel }}</label></p>';

	    Vue.field.types.number = '<input type="number" v-bind="attrs" v-model="value" number>';
	    Vue.field.types.title = '<h3 v-bind="attrs">{{ title }}</h3>';
	    Vue.field.types.paragraph = '<p v-bind="attrs">{{ text }}</p>';
	    Vue.field.types.price = '<i class="uk-icon-euro uk-margin-small-right"></i><input type="number" v-bind="attrs" v-model="value" number>';
	    Vue.field.types.multiselect = '<multiselect :values.sync="value" :options="options"></multiselect>';

	    Vue.field.types.tags = '<input-tags v-bind="attrs" :tags.sync="value" :existing="options" :style="style || \'tags\'"></input-tags>';

	    Vue.field.types.format = '<span v-bind="attrs">{{ value }}</span>';

	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div v-for=\"field in fields\" :class=\"{'uk-form-row': !field.raw}\">\r\n    <label v-if=\"field.label\" class=\"uk-form-label\">\r\n        <i v-if=\"field.tip\" class=\"uk-icon-info uk-icon-hover uk-margin-small-right\" data-uk-tooltip=\"{delay: 100}\" :title=\"field.tip\"></i>\r\n        {{ field.label | trans }}\r\n    </label>\r\n    <div v-if=\"!field.raw\" class=\"uk-form-controls\" :class=\"{'uk-form-controls-text': ['checkbox', 'radio'].indexOf(field.type)>-1}\">\r\n        <field :config=\"field\" :values.sync=\"values\"></field>\r\n    </div>\r\n    <field v-else :config=\"field\" :values.sync=\"values\"></field>\r\n</div>\r\n";

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<template v-for=\"field in fields\">\r\n    <field :config=\"field\" :values.sync=\"values\"></field>\r\n</template>\r\n";

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<template v-for=\"field in fields\">\r\n    <dt v-if=\"field.label\">\r\n        <i v-if=\"field.tip\" class=\"uk-icon-info uk-icon-hover uk-margin-small-right\" data-uk-tooltip=\"{delay: 100}\" :title=\"field.tip\"></i>\r\n        {{ field.label }}\r\n    </dt>\r\n    <dd>\r\n        <field :config=\"field\" :values.sync=\"values\"></field>\r\n    </dd>\r\n</template>\r\n";

/***/ }
/******/ ]);