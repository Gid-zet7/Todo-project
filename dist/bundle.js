/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --background: rgba(85, 214, 170, .85);
    --bg-color: #8054FF;
    --btn-color: #6e41f3;
    --bg-light: #f4f4f4;
    --font-size: calc(.5em + .5vw);

}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-weight: 400;
    overflow-x: hidden;
}

.task-modal {
    display: flex;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: clamp(250px, 80vw, 380px);
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    padding: 1.5rem;
    /* border-radius: 1rem 0rem 1rem; */
    background-color: #fff;
    /* transition: transform .3s ease-in-out ; */
}

.task-modal.open {
    display: block;
}

form {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}

#task-form h3 {
    align-self: center;
    font-weight: 800;
    /* position: relative; */
}

#task-form::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    top: 4rem;
    /* right: -4rem; */
    background-color: #000;
}

.field > input {
    margin-top: 1.2rem;
    width: 100%;
    height: 2rem;
    border: none;
    outline: none;
    font-size: 1.2rem;
    border-radius: .3rem 0rem .3rem;
}

#submit {
    margin-top: 3rem;
    padding: .5rem;
    font-size: 1.3rem;
    background-color: #1f1f35;
    position: relative;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: .3rem 0rem .3rem;
    transition: background-color .3s ease-in-out;
}

#submit:hover {
    background-color: #1ae094;
}

input:valid {
    background-color: rgb(235, 247, 252);
}

#project-input {
    background-color: #fff;
}

input:invalid {
    border-color: rgb(238, 117, 117);
    background-color: #fdd;
}

input:focus:invalid {
    outline: #000;
}

/* This is the style of the error messages */
.error {
    width: 100%;
    padding: 0;

    font-size: 80%;
    color: white;
    background-color: rgb(253, 77, 77);
    border-radius: 0 0 5px 5px;

    box-sizing: border-box;
}

.error.active {
    padding: 0.1rem;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.overlay.active {
    display: block;
}

.container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 4fr;

}

.text-header {
    grid-column: 1 / 2;
    display: grid;
    grid-template-rows: 1fr;
}

.content {
    padding: 1.5rem;
    /* grid-row: 2 / 3; */
    grid-column: 1 / 2;
    background-color: #EAF1F1;
    min-height: 100vh;
}

.project__content {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
}

.project__content h1 {
    align-self: center;
}

.tasks-list {
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    /* align-items: center; */
}

.tasks-list > div {
    width: 90%;
    display: flex;
    cursor: pointer;
    margin-top: 1rem;
    background-color: #f4f4f4;
    justify-content: space-around;
    /* transition: transform .1s ease-in-out; */
    /* transition: background-color .3s ease-in; */

}

.tasks-list > div:hover {
    /* transform: scale(1.08); */
    background-color: #9683cf;
    color: #fff;
}

.btn-add-task {
    min-width: 100px;
    align-self: center;
    margin-top: 1em;
    padding: .5rem;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: var(--bg-color);
    color: #fff;
    border: none;
    outline: none;
    border-radius: .3rem 0rem .3rem;
    transition: background-color .3s ease-in-out;
}

.btn-add-task:hover {
    background-color: #1ae094;
}

.side-panel h4 {
    padding: .8rem;
    user-select: none;
    cursor: pointer;
}

#all-tasks {
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: var(--bg-light);
    border-radius: .5rem 0rem .5rem;
}

#today-tasks {
    display: flex;
    align-items: center;
    gap: .5rem;
}

#week-tasks {
    display: flex;
    align-items: center;
    gap: .5rem;
}


#today-tasks:hover {
    background-color: var(--bg-light);
    border-radius: .5rem 0rem .5rem;
}

#week-tasks:hover {
    background-color: var(--bg-light);
    border-radius: .5rem 0rem .5rem;
}

.projects > div {
    cursor: pointer;
    user-select: none;
}

#create__project {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: .5rem;
    border-radius: 1rem 0rem 1rem;
    background-color: var(--bg-light);
    width: 80%;
    margin-bottom: 3rem;
    font-size: var(--font-size);
    transition: background-color .3s ease-in-out;
}

#create__project:hover {
    background-color: #1ae094;
    color: #fff;
}

#create__project h3 {
    margin-right: .7rem;
}

.side-proj {
    display: flex;
    align-items: center;
    height: 60px;
    /* padding: .5rem; */
}

.side-proj h4 {
    flex: 2;
    display: flex;
    align-items: center;
    gap: .5rem;
}

.side-proj:hover .delete_project {
    display: block;
    height: 75%;
    border-radius: .5rem 0rem .5rem;
    background: var(--bg-light);
}

.delete_project {
    display: none;
}

.delete_project:hover {
    fill: rgb(253, 77, 77)
}

.side-proj > h4 {
    padding: .8rem;
    /* margin-top: 1rem; */
    cursor: pointer;
    user-select: none;
}

.side-proj > h4:hover {
    background-color: var(--bg-light);
    border-radius: .5rem 0rem .5rem;
}

.project-modal {
    display: none;
}

.project-modal.active {
    display: block;
}

.project-modal > input {
    margin-top: 1rem;
    height: 2rem;
    /* border: none; */
    outline: none;
    font-size: 1.2rem;
    border-radius: .3rem 0rem .3rem;
}

.project-modal > div {
    margin-top: 1rem;
}

.project-modal > div > button {
    justify-content: space-between;
    padding: .5rem;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: .3rem 0rem .3rem;
}

#create {
    background-color: #1ae094;
}

#create:hover {
    background-color: #23c587;
}

#close {
    background-color: #fa7d7d;
}

#close:hover {
    background-color: #f16b6b;
}

@media screen and (max-width: 680px) {
    .container {
        display: flex;
        
    }

    .text-header h1 {
        display: none;
    }

    .content {
        padding: 0;
       /* width: 76px;  */
    }

    .content .inactive {
        display: none;
    }

    .project__content {
        /* display: none; */
        flex: 1;
    }

    .project__content .active {
        display: block;
    }

    .side-panel {
        width: 76px;
    }

    #all-tasks {
        padding: 0;
    }

    #today-tasks {
        padding: 0;
    }

    #week-tasks {
        padding: 0;
    }

    #Inbox {
        fill: #1ae094;
        width: 100%;
        /* height: 30px; */
    }

    .today {
        /* fill: #1ae094; */
        width: 100%;
    }

    .upcoming {
        width: 100%;
    }

    span {
        display: none;
    }

    #create__project {
        padding: 0;
        margin: 0 0rem 2rem 0rem;
        display: flex;
        align-items: center;
        background-color: #EAF1F1;
    }

    #create__project h3 {
        display: none;
        margin: 0;
    }

    .projects {
        padding: .5rem;
    }

    .projects h1 {
        font-size: .8rem;
        align-self: center;
    }

    .side-proj {
        font-size: .7rem;
    }

    .side-proj h4 {
        padding: 0;
    }

    .tasks-list {
        font-size: .7rem;
        margin-left: .3rem;
    }

    .tasks-list > div {
        align-items: center;
    }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --background: rgba(85, 214, 170, .85);\n    --bg-color: #8054FF;\n    --btn-color: #6e41f3;\n    --bg-light: #f4f4f4;\n    --font-size: calc(.5em + .5vw);\n\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-weight: 400;\n    overflow-x: hidden;\n}\n\n.task-modal {\n    display: flex;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    width: clamp(250px, 80vw, 380px);\n    position: absolute;\n    top: 50%;\n    right: 50%;\n    transform: translate(50%, -50%);\n    padding: 1.5rem;\n    /* border-radius: 1rem 0rem 1rem; */\n    background-color: #fff;\n    /* transition: transform .3s ease-in-out ; */\n}\n\n.task-modal.open {\n    display: block;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    width: 100%;\n}\n\n#task-form h3 {\n    align-self: center;\n    font-weight: 800;\n    /* position: relative; */\n}\n\n#task-form::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    top: 4rem;\n    /* right: -4rem; */\n    background-color: #000;\n}\n\n.field > input {\n    margin-top: 1.2rem;\n    width: 100%;\n    height: 2rem;\n    border: none;\n    outline: none;\n    font-size: 1.2rem;\n    border-radius: .3rem 0rem .3rem;\n}\n\n#submit {\n    margin-top: 3rem;\n    padding: .5rem;\n    font-size: 1.3rem;\n    background-color: #1f1f35;\n    position: relative;\n    color: #fff;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    border-radius: .3rem 0rem .3rem;\n    transition: background-color .3s ease-in-out;\n}\n\n#submit:hover {\n    background-color: #1ae094;\n}\n\ninput:valid {\n    background-color: rgb(235, 247, 252);\n}\n\n#project-input {\n    background-color: #fff;\n}\n\ninput:invalid {\n    border-color: rgb(238, 117, 117);\n    background-color: #fdd;\n}\n\ninput:focus:invalid {\n    outline: #000;\n}\n\n/* This is the style of the error messages */\n.error {\n    width: 100%;\n    padding: 0;\n\n    font-size: 80%;\n    color: white;\n    background-color: rgb(253, 77, 77);\n    border-radius: 0 0 5px 5px;\n\n    box-sizing: border-box;\n}\n\n.error.active {\n    padding: 0.1rem;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.overlay.active {\n    display: block;\n}\n\n.container {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 4fr;\n\n}\n\n.text-header {\n    grid-column: 1 / 2;\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n.content {\n    padding: 1.5rem;\n    /* grid-row: 2 / 3; */\n    grid-column: 1 / 2;\n    background-color: #EAF1F1;\n    min-height: 100vh;\n}\n\n.project__content {\n    grid-column: 2 / 3;\n    display: flex;\n    flex-direction: column;\n}\n\n.project__content h1 {\n    align-self: center;\n}\n\n.tasks-list {\n    display: flex;\n    flex-direction: column;\n    margin-left: 3rem;\n    /* align-items: center; */\n}\n\n.tasks-list > div {\n    width: 90%;\n    display: flex;\n    cursor: pointer;\n    margin-top: 1rem;\n    background-color: #f4f4f4;\n    justify-content: space-around;\n    /* transition: transform .1s ease-in-out; */\n    /* transition: background-color .3s ease-in; */\n\n}\n\n.tasks-list > div:hover {\n    /* transform: scale(1.08); */\n    background-color: #9683cf;\n    color: #fff;\n}\n\n.btn-add-task {\n    min-width: 100px;\n    align-self: center;\n    margin-top: 1em;\n    padding: .5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n    background-color: var(--bg-color);\n    color: #fff;\n    border: none;\n    outline: none;\n    border-radius: .3rem 0rem .3rem;\n    transition: background-color .3s ease-in-out;\n}\n\n.btn-add-task:hover {\n    background-color: #1ae094;\n}\n\n.side-panel h4 {\n    padding: .8rem;\n    user-select: none;\n    cursor: pointer;\n}\n\n#all-tasks {\n    display: flex;\n    align-items: center;\n    gap: .5rem;\n    background-color: var(--bg-light);\n    border-radius: .5rem 0rem .5rem;\n}\n\n#today-tasks {\n    display: flex;\n    align-items: center;\n    gap: .5rem;\n}\n\n#week-tasks {\n    display: flex;\n    align-items: center;\n    gap: .5rem;\n}\n\n\n#today-tasks:hover {\n    background-color: var(--bg-light);\n    border-radius: .5rem 0rem .5rem;\n}\n\n#week-tasks:hover {\n    background-color: var(--bg-light);\n    border-radius: .5rem 0rem .5rem;\n}\n\n.projects > div {\n    cursor: pointer;\n    user-select: none;\n}\n\n#create__project {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    padding: .5rem;\n    border-radius: 1rem 0rem 1rem;\n    background-color: var(--bg-light);\n    width: 80%;\n    margin-bottom: 3rem;\n    font-size: var(--font-size);\n    transition: background-color .3s ease-in-out;\n}\n\n#create__project:hover {\n    background-color: #1ae094;\n    color: #fff;\n}\n\n#create__project h3 {\n    margin-right: .7rem;\n}\n\n.side-proj {\n    display: flex;\n    align-items: center;\n    height: 60px;\n    /* padding: .5rem; */\n}\n\n.side-proj h4 {\n    flex: 2;\n    display: flex;\n    align-items: center;\n    gap: .5rem;\n}\n\n.side-proj:hover .delete_project {\n    display: block;\n    height: 75%;\n    border-radius: .5rem 0rem .5rem;\n    background: var(--bg-light);\n}\n\n.delete_project {\n    display: none;\n}\n\n.delete_project:hover {\n    fill: rgb(253, 77, 77)\n}\n\n.side-proj > h4 {\n    padding: .8rem;\n    /* margin-top: 1rem; */\n    cursor: pointer;\n    user-select: none;\n}\n\n.side-proj > h4:hover {\n    background-color: var(--bg-light);\n    border-radius: .5rem 0rem .5rem;\n}\n\n.project-modal {\n    display: none;\n}\n\n.project-modal.active {\n    display: block;\n}\n\n.project-modal > input {\n    margin-top: 1rem;\n    height: 2rem;\n    /* border: none; */\n    outline: none;\n    font-size: 1.2rem;\n    border-radius: .3rem 0rem .3rem;\n}\n\n.project-modal > div {\n    margin-top: 1rem;\n}\n\n.project-modal > div > button {\n    justify-content: space-between;\n    padding: .5rem;\n    font-size: 1rem;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    border-radius: .3rem 0rem .3rem;\n}\n\n#create {\n    background-color: #1ae094;\n}\n\n#create:hover {\n    background-color: #23c587;\n}\n\n#close {\n    background-color: #fa7d7d;\n}\n\n#close:hover {\n    background-color: #f16b6b;\n}\n\n@media screen and (max-width: 680px) {\n    .container {\n        display: flex;\n        \n    }\n\n    .text-header h1 {\n        display: none;\n    }\n\n    .content {\n        padding: 0;\n       /* width: 76px;  */\n    }\n\n    .content .inactive {\n        display: none;\n    }\n\n    .project__content {\n        /* display: none; */\n        flex: 1;\n    }\n\n    .project__content .active {\n        display: block;\n    }\n\n    .side-panel {\n        width: 76px;\n    }\n\n    #all-tasks {\n        padding: 0;\n    }\n\n    #today-tasks {\n        padding: 0;\n    }\n\n    #week-tasks {\n        padding: 0;\n    }\n\n    #Inbox {\n        fill: #1ae094;\n        width: 100%;\n        /* height: 30px; */\n    }\n\n    .today {\n        /* fill: #1ae094; */\n        width: 100%;\n    }\n\n    .upcoming {\n        width: 100%;\n    }\n\n    span {\n        display: none;\n    }\n\n    #create__project {\n        padding: 0;\n        margin: 0 0rem 2rem 0rem;\n        display: flex;\n        align-items: center;\n        background-color: #EAF1F1;\n    }\n\n    #create__project h3 {\n        display: none;\n        margin: 0;\n    }\n\n    .projects {\n        padding: .5rem;\n    }\n\n    .projects h1 {\n        font-size: .8rem;\n        align-self: center;\n    }\n\n    .side-proj {\n        font-size: .7rem;\n    }\n\n    .side-proj h4 {\n        padding: 0;\n    }\n\n    .tasks-list {\n        font-size: .7rem;\n        margin-left: .3rem;\n    }\n\n    .tasks-list > div {\n        align-items: center;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/LocalStorage.js":
/*!*************************************!*\
  !*** ./src/modules/LocalStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");




const LocalStorage = () => {
  const save = (data) => {
    window.localStorage.setItem("todo", JSON.stringify(data));
  };

  const getTodo = () => {
    const todo = Object.assign(
      (0,_Todo__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      JSON.parse(localStorage.getItem("todo"))
    );
    console.log(todo);

    return todo;
  };

  const addProject = (newProject) => {
    const todo = getTodo();
    todo.projects.push(newProject);
    save(todo);
  };

  const renameProject = (projectName, newName) => {
    const todo = getTodo();
    const project = todo.projects.find((proj) => proj.name === projectName);
    console.log(project);
    project.name = newName;
    save(todo);
  };

  const deleteProject = (projectName) => {
    const todo = getTodo();
    const project = todo.projects.find((proj) => proj.name === projectName);
    todo.projects.splice(todo.projects.indexOf(project), 1);
    save(todo);
  };

  const addTask = (projectName, task) => {
    const todo = getTodo();
    const getProject = (name) => {
      return todo.projects.find((project) => project.name === name);
    };
    getProject(projectName).tasks.push(task);
    console.log(todo.projects);
    save(todo);
  };

  const deleteTask = (projectName, taskName) => {
    const todo = getTodo();
    console.log(`taskName: ${taskName}`);

    const project = todo.projects.find((proj) => proj.name === projectName);
    console.log(project);
    const projectIndex = todo.projects.indexOf(project);
    console.log(projectIndex);

    const taskToDelete = todo.projects[projectIndex].tasks.find(
      (task) => task.name.split(" ").join("") === taskName
    );

    console.log(taskToDelete);

    console.log(todo.projects[projectIndex].tasks.indexOf(taskToDelete));

    todo.projects[projectIndex].tasks.splice(
      todo.projects[projectIndex].tasks.indexOf(taskToDelete),
      1
    );

    save(todo);
  };

  const getFormattedDate = (dueDate) => {
    // console.log(dueDate);
    const day = dueDate.split("-")[2];
    const month = dueDate.split("-")[1];
    const year = dueDate.split("-")[0];
    return `${month}/ ${day}/ ${year}`;
  };

  const updateTodayProject = () => {
    const todo = getTodo();

    const exists = (taskName) => {
      return todo.projects[1].tasks.some((task) => task.name === taskName);
    };

    const getTodayTask = () => {
      let todayTasks = [];
      todo.projects.forEach((project) => {
        project.tasks.filter((task) => {
          const taskDate = new Date(getFormattedDate(task.dueDate));
          if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDate)) && !exists(task.name)) {
            todayTasks.push(task);
          }
        });
      });
      return todayTasks;
    };

    todo.projects.forEach((project) => {
      if (project.name === "Today Tasks" || project.name === "Upcoming Tasks")
        return;

      todo.projects[1].tasks = [];

      const todayTasks = getTodayTask();
      console.log(todayTasks);
      todayTasks.forEach((task) => {
        todo.projects[1].tasks.push(
          (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(task.name, task.description, task.dueDate, task.priority)
        );
      });
    });
    console.log(todo.projects[1].tasks);
    save(todo);
  };

  return {
    save,
    getTodo,
    renameProject,
    addProject,
    deleteProject,
    addTask,
    deleteTask,
    updateTodayProject,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorage);


/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = (name) => {
  let tasks = [];

  return {
    name,
    tasks,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Task = (name, description, dueDate, priority) => {
  return {
    name,
    description,
    dueDate,
    priority,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");


const Todo = () => {
  let projects = [];
  projects.push((0,_Project__WEBPACK_IMPORTED_MODULE_0__["default"])("Inbox"));
  projects.push((0,_Project__WEBPACK_IMPORTED_MODULE_0__["default"])("Today Tasks"));
  projects.push((0,_Project__WEBPACK_IMPORTED_MODULE_0__["default"])("Upcoming Tasks"));

  return {
    projects,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/modules/domManip.js":
/*!*********************************!*\
  !*** ./src/modules/domManip.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage */ "./src/modules/LocalStorage.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");




const domManip = () => {
  function loadHome() {
    loadProjects();
    initDefaultBtns();
    loadProjectContent("Inbox");
  }
  function createProjectUI(projectName) {
    const projectContainer = document.querySelector(".project-list");
    projectContainer.innerHTML += `
    <div class="side-proj">
      <h4 id="${projectName}"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" ><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>${projectName}</h4>
        <svg xmlns="http://www.w3.org/2000/svg" class="delete_project" id="${projectName}"
        height="15" viewBox="0 96 960 960" width="20" fill="#8054FF">
        <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
        </svg>
      </div>
    </div>
    `;
    initProjectDeleteBtn();
    initProjectPreviewBtns();
  }

  //   Loads projects from the localStorage and creates the project UI with the data retrieved
  function loadProjects() {
    (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"])()
      .getTodo()
      .projects.forEach((project) => {
        if (
          project.name !== "Inbox" &&
          project.name !== "Today Tasks" &&
          project.name !== "Upcoming Tasks"
        ) {
          createProjectUI(project.name);
        }
      });
    initAddProjectBtn();
    initProjPopupBtns();
  }

  function addProject() {
    const createProjectInput = document.getElementById("project-input");
    const projectName = createProjectInput.value;

    if (projectName === "") {
      alert("Please enter a name for your project");
      return;
    }

    const loalStore = (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const exists = (name) => {
      return loalStore
        .getTodo()
        .projects.some((project) => project.name === name);
    };

    if (exists(projectName)) {
      createProjectInput.value = "";
      alert("Project already exist");
      return;
    }

    loalStore.addProject((0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName));

    createProjectUI(projectName);

    createProjectInput.value = "";
  }

  function loadProjectContent(projectName) {
    const projectContainer = document.querySelector(".project__content");
    projectContainer.innerHTML = `
      <h1 id="project-name">${projectName}</h1>
      <div class="tasks-list" id="tasks-list"></div>`;

    if (projectName !== "Today Tasks" && projectName !== "Upcoming Tasks") {
      projectContainer.innerHTML += `
      <button class="btn-add-task" id="button-add-task">
        Add Task
      </button>`;
    }

    loadTasks(projectName);
  }

  function createTaskUI(title, description, dueDate, priority) {
    const taskList = document.querySelector(".tasks-list");
    const formatTitle = title.split(" ").join("");
    taskList.innerHTML += `
    <div class="task-ui" id=${formatTitle}>
      <p>${title}</p>
      <p>${description}</p>
      <p>${dueDate}</p>
      <p>${priority}</p>
    </div>
    `;
    initDeleteTask();
  }

  function loadTasks(projectName) {
    const projects = (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"])().getTodo().projects;
    const getProject = (projectName) => {
      return projects.find((project) => project.name === projectName);
    };
    console.log(getProject(projectName));
    getProject(projectName).tasks.forEach((task) =>
      createTaskUI(task.name, task.description, task.dueDate, task.priority)
    );
    if (projectName !== "Today Tasks" && projectName !== "Upcoming Tasks") {
      initTaskAddBtn();
      initTaskModalBtn();
    }
  }

  function addTask() {
    const projectName = document.getElementById("project-name").textContent;
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const dueDateInput = document.getElementById("dueDate");
    const priorityInput = document.getElementById("priority");

    const taskTitle = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    if (taskTitle === "") {
      alert("Title cannot be empty");
      return;
    }

    const localStore = (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const getProject = (projectName) => {
      return localStore
        .getTodo()
        .projects.find((project) => project.name === projectName);
    };

    const projectTasks = getProject(projectName).tasks;
    const exists = (taskName) => {
      return projectTasks.some((task) => task.name === taskName);
    };

    if (exists(taskTitle)) {
      alert("Task already exists");
      clearInputField();
      return;
    }

    localStore.addTask(
      projectName,
      (0,_Task__WEBPACK_IMPORTED_MODULE_2__["default"])(taskTitle, description, dueDate, priority)
    );

    createTaskUI(taskTitle, description, dueDate, priority);

    clearInputField();
  }

  function initAddProjectBtn() {
    const create = document.getElementById("create");

    create.addEventListener("click", addProject);
  }

  function initProjPopupBtns() {
    const projPopupBtn = document.getElementById("create__project");
    const cancelBtn = document.getElementById("close");
    const addPopup = document.querySelector(".project-modal ");
    projPopupBtn.addEventListener("click", () => {
      addPopup.classList.add("active");
    });
    cancelBtn.addEventListener("click", () => {
      addPopup.classList.remove("active");
    });
  }

  function initProjectDeleteBtn() {
    const delProject = document.querySelectorAll(".delete_project");
    delProject.forEach((button) =>
      button.addEventListener("click", (e) => {
        const projectName = e.target.id;
        (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"])().deleteProject(projectName);
        clearProjectContent();
        loadProjects();
      })
    );
  }

  function clearProjectContent() {
    const container = document.querySelector(".project-list");
    container.textContent = "";
  }

  // Clears the projects tasks on the UI
  function clearProjectPreview() {
    const container = document.querySelector(".project__content");
    container.innerHTML = "";
  }

  function initTaskAddBtn() {
    const submit = document.getElementById("submit");
    const taskModal = document.querySelector(".task-modal");
    const overlay = document.getElementById("overlay");

    submit.addEventListener("click", addTask);
    submit.addEventListener("click", () => {
      taskModal.classList.remove("open");
      overlay.classList.remove("active");
    });
  }

  function clearTasks() {
    const container = document.querySelector(".task-list");
    container.innerHTML = "";
  }

  function initDeleteTask() {
    const projectName = document.getElementById("project-name").textContent;
    const taskUI = document.querySelectorAll(".task-ui");
    taskUI.forEach(
      (task) =>
        task.addEventListener("click", function (e) {
          e.stopPropagation();
          const taskName = this.getAttribute("id");
          (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"])().deleteTask(projectName, taskName, title);
          clearProjectPreview();
          loadProjectContent(projectName);
        }),
      {
        capture: true,
      }
    );
  }

  function initDefaultBtns() {
    const inbox = document.getElementById("all-tasks");
    const todayTasks = document.getElementById("today-tasks");
    const weekTasks = document.getElementById("week-tasks");

    inbox.addEventListener("click", handleProjectButton);
    todayTasks.addEventListener("click", updateTodayProject);
    todayTasks.addEventListener("click", handleProjectButton);
    weekTasks.addEventListener("click", handleProjectButton);
  }

  function initProjectPreviewBtns() {
    const projBtn = document.querySelectorAll(".side-proj h4");
    projBtn.forEach((button) =>
      button.addEventListener("click", handleUnknownProjectBtns, {
        capture: true,
      })
    );
  }

  function handleProjectButton(e) {
    // console.log(e);
    e.stopPropagation();
    const projectName = this.getAttribute("class");
    loadProjectContent(projectName);
  }

  function handleUnknownProjectBtns(e) {
    e.stopPropagation();
    const projectName = this.getAttribute("id");
    loadProjectContent(projectName);
  }

  function updateTodayProject() {
    (0,_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"])().updateTodayProject();
  }

  function initTaskModalBtn() {
    const taskPopupBtn = document.getElementById("button-add-task");
    const taskModal = document.querySelector(".task-modal");
    const overlay = document.getElementById("overlay");

    const openModal = () => {
      taskModal.classList.add("open");
      overlay.classList.add("active");
    };

    const closeModal = () => {
      taskModal.classList.remove("open");
      overlay.classList.remove("active");
    };

    taskPopupBtn.onclick = openModal;
    overlay.onclick = closeModal;
  }

  function clearInputField() {
    let titleInput = document.getElementById("title");
    let descriptionInput = document.getElementById("description");
    let dueDateInput = document.getElementById("dueDate");
    let priorityInput = document.getElementById("priority");

    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "";
  }

  return { loadHome };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManip);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_domManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domManip */ "./src/modules/domManip.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_modules_domManip__WEBPACK_IMPORTED_MODULE_0__["default"])().loadHome();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLCtDQUErQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLGlEQUFpRDs7QUFFakQ7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZ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QUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix5REFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix5REFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0saURBQUk7QUFDVjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBWTtBQUNwQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5REFBWTtBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHlEQUFZO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDclRUO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBMEM7QUFDckI7O0FBRXJCLDZEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvbW9kdWxlcy9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9tb2R1bGVzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZG9tTWFuaXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoODUsIDIxNCwgMTcwLCAuODUpO1xuICAgIC0tYmctY29sb3I6ICM4MDU0RkY7XG4gICAgLS1idG4tY29sb3I6ICM2ZTQxZjM7XG4gICAgLS1iZy1saWdodDogI2Y0ZjRmNDtcbiAgICAtLWZvbnQtc2l6ZTogY2FsYyguNWVtICsgLjV2dyk7XG5cbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnRhc2stbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IGNsYW1wKDI1MHB4LCA4MHZ3LCAzODBweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgLyogYm9yZGVyLXJhZGl1czogMXJlbSAwcmVtIDFyZW07ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0IDsgKi9cbn1cblxuLnRhc2stbW9kYWwub3BlbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiN0YXNrLWZvcm0gaDMge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbn1cblxuI3Rhc2stZm9ybTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHRvcDogNHJlbTtcbiAgICAvKiByaWdodDogLTRyZW07ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmZpZWxkID4gaW5wdXQge1xuICAgIG1hcmdpbi10b3A6IDEuMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW0gMHJlbSAuM3JlbTtcbn1cblxuI3N1Ym1pdCB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjM1O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW0gMHJlbSAuM3JlbTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dDtcbn1cblxuI3N1Ym1pdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhZTA5NDtcbn1cblxuaW5wdXQ6dmFsaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDI0NywgMjUyKTtcbn1cblxuI3Byb2plY3QtaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlucHV0OmludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOCwgMTE3LCAxMTcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGQ7XG59XG5cbmlucHV0OmZvY3VzOmludmFsaWQge1xuICAgIG91dGxpbmU6ICMwMDA7XG59XG5cbi8qIFRoaXMgaXMgdGhlIHN0eWxlIG9mIHRoZSBlcnJvciBtZXNzYWdlcyAqL1xuLmVycm9yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgZm9udC1zaXplOiA4MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDc3LCA3Nyk7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZXJyb3IuYWN0aXZlIHtcbiAgICBwYWRkaW5nOiAwLjFyZW07XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ub3ZlcmxheS5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcblxufVxuXG4udGV4dC1oZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIC8qIGdyaWQtcm93OiAyIC8gMzsgKi9cbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRjFGMTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnByb2plY3RfX2NvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0X19jb250ZW50IGgxIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50YXNrcy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbn1cblxuLnRhc2tzLWxpc3QgPiBkaXYge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbi1vdXQ7ICovXG4gICAgLyogdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZS1pbjsgKi9cblxufVxuXG4udGFza3MtbGlzdCA+IGRpdjpob3ZlciB7XG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY4M2NmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWFkZC10YXNrIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbSAwcmVtIC4zcmVtO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuLWFkZC10YXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFlMDk0O1xufVxuXG4uc2lkZS1wYW5lbCBoNCB7XG4gICAgcGFkZGluZzogLjhyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWxsLXRhc2tzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW0gMHJlbSAuNXJlbTtcbn1cblxuI3RvZGF5LXRhc2tzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuI3dlZWstdGFza3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IC41cmVtO1xufVxuXG5cbiN0b2RheS10YXNrczpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtIDByZW0gLjVyZW07XG59XG5cbiN3ZWVrLXRhc2tzOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW0gMHJlbSAuNXJlbTtcbn1cblxuLnByb2plY3RzID4gZGl2IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiNjcmVhdGVfX3Byb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtIDByZW0gMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saWdodCk7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dDtcbn1cblxuI2NyZWF0ZV9fcHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhZTA5NDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuI2NyZWF0ZV9fcHJvamVjdCBoMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuN3JlbTtcbn1cblxuLnNpZGUtcHJvaiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbiAgICAvKiBwYWRkaW5nOiAuNXJlbTsgKi9cbn1cblxuLnNpZGUtcHJvaiBoNCB7XG4gICAgZmxleDogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLnNpZGUtcHJvajpob3ZlciAuZGVsZXRlX3Byb2plY3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNzUlO1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtIDByZW0gLjVyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctbGlnaHQpO1xufVxuXG4uZGVsZXRlX3Byb2plY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kZWxldGVfcHJvamVjdDpob3ZlciB7XG4gICAgZmlsbDogcmdiKDI1MywgNzcsIDc3KVxufVxuXG4uc2lkZS1wcm9qID4gaDQge1xuICAgIHBhZGRpbmc6IC44cmVtO1xuICAgIC8qIG1hcmdpbi10b3A6IDFyZW07ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2lkZS1wcm9qID4gaDQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbSAwcmVtIC41cmVtO1xufVxuXG4ucHJvamVjdC1tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb2plY3QtbW9kYWwuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2plY3QtbW9kYWwgPiBpbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgLyogYm9yZGVyOiBub25lOyAqL1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW0gMHJlbSAuM3JlbTtcbn1cblxuLnByb2plY3QtbW9kYWwgPiBkaXYge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5wcm9qZWN0LW1vZGFsID4gZGl2ID4gYnV0dG9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbSAwcmVtIC4zcmVtO1xufVxuXG4jY3JlYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFlMDk0O1xufVxuXG4jY3JlYXRlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNjNTg3O1xufVxuXG4jY2xvc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYTdkN2Q7XG59XG5cbiNjbG9zZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNmI2Yjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLnRleHQtaGVhZGVyIGgxIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgLyogd2lkdGg6IDc2cHg7ICAqL1xuICAgIH1cblxuICAgIC5jb250ZW50IC5pbmFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnByb2plY3RfX2NvbnRlbnQge1xuICAgICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5wcm9qZWN0X19jb250ZW50IC5hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuc2lkZS1wYW5lbCB7XG4gICAgICAgIHdpZHRoOiA3NnB4O1xuICAgIH1cblxuICAgICNhbGwtdGFza3Mge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgICN0b2RheS10YXNrcyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgI3dlZWstdGFza3Mge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgICNJbmJveCB7XG4gICAgICAgIGZpbGw6ICMxYWUwOTQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBoZWlnaHQ6IDMwcHg7ICovXG4gICAgfVxuXG4gICAgLnRvZGF5IHtcbiAgICAgICAgLyogZmlsbDogIzFhZTA5NDsgKi9cbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnVwY29taW5nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI2NyZWF0ZV9fcHJvamVjdCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMCAwcmVtIDJyZW0gMHJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRjFGMTtcbiAgICB9XG5cbiAgICAjY3JlYXRlX19wcm9qZWN0IGgzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5wcm9qZWN0cyB7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIH1cblxuICAgIC5wcm9qZWN0cyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc2lkZS1wcm9qIHtcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICB9XG5cbiAgICAuc2lkZS1wcm9qIGg0IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAudGFza3MtbGlzdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuM3JlbTtcbiAgICB9XG5cbiAgICAudGFza3MtbGlzdCA+IGRpdiB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7QUFFbEM7O0FBRUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNo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LFNBQVM7SUFDYjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDg1LCAyMTQsIDE3MCwgLjg1KTtcXG4gICAgLS1iZy1jb2xvcjogIzgwNTRGRjtcXG4gICAgLS1idG4tY29sb3I6ICM2ZTQxZjM7XFxuICAgIC0tYmctbGlnaHQ6ICNmNGY0ZjQ7XFxuICAgIC0tZm9udC1zaXplOiBjYWxjKC41ZW0gKyAuNXZ3KTtcXG5cXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stbW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IGNsYW1wKDI1MHB4LCA4MHZ3LCAzODBweCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHJpZ2h0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMXJlbSAwcmVtIDFyZW07ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQgOyAqL1xcbn1cXG5cXG4udGFzay1tb2RhbC5vcGVuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdGFzay1mb3JtIGgzIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbiN0YXNrLWZvcm06OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB0b3A6IDRyZW07XFxuICAgIC8qIHJpZ2h0OiAtNHJlbTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmZpZWxkID4gaW5wdXQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtIDByZW0gLjNyZW07XFxufVxcblxcbiNzdWJtaXQge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjFmMzU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbSAwcmVtIC4zcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3N1Ym1pdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWUwOTQ7XFxufVxcblxcbmlucHV0OnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjQ3LCAyNTIpO1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbmlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDExNywgMTE3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxuICAgIG91dGxpbmU6ICMwMDA7XFxufVxcblxcbi8qIFRoaXMgaXMgdGhlIHN0eWxlIG9mIHRoZSBlcnJvciBtZXNzYWdlcyAqL1xcbi5lcnJvciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCA3NywgNzcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmVycm9yLmFjdGl2ZSB7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuXFxufVxcblxcbi50ZXh0LWhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICAvKiBncmlkLXJvdzogMiAvIDM7ICovXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRjFGMTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5wcm9qZWN0X19jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdF9fY29udGVudCBoMSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuLnRhc2tzLWxpc3QgPiBkaXYge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjFzIGVhc2UtaW4tb3V0OyAqL1xcbiAgICAvKiB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluOyAqL1xcblxcbn1cXG5cXG4udGFza3MtbGlzdCA+IGRpdjpob3ZlciB7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NjgzY2Y7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYnRuLWFkZC10YXNrIHtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtIDByZW0gLjNyZW07XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnRuLWFkZC10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhZTA5NDtcXG59XFxuXFxuLnNpZGUtcGFuZWwgaDQge1xcbiAgICBwYWRkaW5nOiAuOHJlbTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FsbC10YXNrcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW0gMHJlbSAuNXJlbTtcXG59XFxuXFxuI3RvZGF5LXRhc2tzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuI3dlZWstdGFza3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG5cXG4jdG9kYXktdGFza3M6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1saWdodCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtIDByZW0gLjVyZW07XFxufVxcblxcbiN3ZWVrLXRhc2tzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbSAwcmVtIC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgPiBkaXYge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jY3JlYXRlX19wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtIDByZW0gMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbGlnaHQpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jY3JlYXRlX19wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhZTA5NDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNjcmVhdGVfX3Byb2plY3QgaDMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC43cmVtO1xcbn1cXG5cXG4uc2lkZS1wcm9qIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAvKiBwYWRkaW5nOiAuNXJlbTsgKi9cXG59XFxuXFxuLnNpZGUtcHJvaiBoNCB7XFxuICAgIGZsZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxufVxcblxcbi5zaWRlLXByb2o6aG92ZXIgLmRlbGV0ZV9wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbSAwcmVtIC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1saWdodCk7XFxufVxcblxcbi5kZWxldGVfcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kZWxldGVfcHJvamVjdDpob3ZlciB7XFxuICAgIGZpbGw6IHJnYigyNTMsIDc3LCA3NylcXG59XFxuXFxuLnNpZGUtcHJvaiA+IGg0IHtcXG4gICAgcGFkZGluZzogLjhyZW07XFxuICAgIC8qIG1hcmdpbi10b3A6IDFyZW07ICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zaWRlLXByb2ogPiBoNDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWxpZ2h0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW0gMHJlbSAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnByb2plY3QtbW9kYWwgPiBpbnB1dCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgLyogYm9yZGVyOiBub25lOyAqL1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW0gMHJlbSAuM3JlbTtcXG59XFxuXFxuLnByb2plY3QtbW9kYWwgPiBkaXYge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbCA+IGRpdiA+IGJ1dHRvbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtIDByZW0gLjNyZW07XFxufVxcblxcbiNjcmVhdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFlMDk0O1xcbn1cXG5cXG4jY3JlYXRlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzYzU4NztcXG59XFxuXFxuI2Nsb3NlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhN2Q3ZDtcXG59XFxuXFxuI2Nsb3NlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxNmI2YjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnRleHQtaGVhZGVyIGgxIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgLyogd2lkdGg6IDc2cHg7ICAqL1xcbiAgICB9XFxuXFxuICAgIC5jb250ZW50IC5pbmFjdGl2ZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0X19jb250ZW50IHtcXG4gICAgICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgICAgICBmbGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0X19jb250ZW50IC5hY3RpdmUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLnNpZGUtcGFuZWwge1xcbiAgICAgICAgd2lkdGg6IDc2cHg7XFxuICAgIH1cXG5cXG4gICAgI2FsbC10YXNrcyB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgICN0b2RheS10YXNrcyB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgICN3ZWVrLXRhc2tzIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG5cXG4gICAgI0luYm94IHtcXG4gICAgICAgIGZpbGw6ICMxYWUwOTQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIC8qIGhlaWdodDogMzBweDsgKi9cXG4gICAgfVxcblxcbiAgICAudG9kYXkge1xcbiAgICAgICAgLyogZmlsbDogIzFhZTA5NDsgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC51cGNvbWluZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2NyZWF0ZV9fcHJvamVjdCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwIDByZW0gMnJlbSAwcmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFGMUYxO1xcbiAgICB9XFxuXFxuICAgICNjcmVhdGVfX3Byb2plY3QgaDMge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHMge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnNpZGUtcHJvaiB7XFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlLXByb2ogaDQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbiAgICAudGFza3MtbGlzdCB7XFxuICAgICAgICBmb250LXNpemU6IC43cmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC4zcmVtO1xcbiAgICB9XFxuXFxuICAgIC50YXNrcy1saXN0ID4gZGl2IHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzVG9kYXksIHRvRGF0ZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiO1xuXG5jb25zdCBMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHNhdmUgPSAoZGF0YSkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9cIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG8gPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBUb2RvKCksXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb1wiKSlcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuXG4gICAgcmV0dXJuIHRvZG87XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IGdldFRvZG8oKTtcbiAgICB0b2RvLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgc2F2ZSh0b2RvKTtcbiAgfTtcblxuICBjb25zdCByZW5hbWVQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBuZXdOYW1lKSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IGdldFRvZG8oKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gdG9kby5wcm9qZWN0cy5maW5kKChwcm9qKSA9PiBwcm9qLm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBwcm9qZWN0Lm5hbWUgPSBuZXdOYW1lO1xuICAgIHNhdmUodG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSBnZXRUb2RvKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IHRvZG8ucHJvamVjdHMuZmluZCgocHJvaikgPT4gcHJvai5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgdG9kby5wcm9qZWN0cy5zcGxpY2UodG9kby5wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICBzYXZlKHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAocHJvamVjdE5hbWUsIHRhc2spID0+IHtcbiAgICBjb25zdCB0b2RvID0gZ2V0VG9kbygpO1xuICAgIGNvbnN0IGdldFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIHRvZG8ucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcbiAgICB9O1xuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpLnRhc2tzLnB1c2godGFzayk7XG4gICAgY29uc29sZS5sb2codG9kby5wcm9qZWN0cyk7XG4gICAgc2F2ZSh0b2RvKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKHByb2plY3ROYW1lLCB0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSBnZXRUb2RvKCk7XG4gICAgY29uc29sZS5sb2coYHRhc2tOYW1lOiAke3Rhc2tOYW1lfWApO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IHRvZG8ucHJvamVjdHMuZmluZCgocHJvaikgPT4gcHJvai5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gdG9kby5wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG5cbiAgICBjb25zdCB0YXNrVG9EZWxldGUgPSB0b2RvLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuZmluZChcbiAgICAgICh0YXNrKSA9PiB0YXNrLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikgPT09IHRhc2tOYW1lXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKHRhc2tUb0RlbGV0ZSk7XG5cbiAgICBjb25zb2xlLmxvZyh0b2RvLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuaW5kZXhPZih0YXNrVG9EZWxldGUpKTtcblxuICAgIHRvZG8ucHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UoXG4gICAgICB0b2RvLnByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuaW5kZXhPZih0YXNrVG9EZWxldGUpLFxuICAgICAgMVxuICAgICk7XG5cbiAgICBzYXZlKHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGdldEZvcm1hdHRlZERhdGUgPSAoZHVlRGF0ZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGR1ZURhdGUpO1xuICAgIGNvbnN0IGRheSA9IGR1ZURhdGUuc3BsaXQoXCItXCIpWzJdO1xuICAgIGNvbnN0IG1vbnRoID0gZHVlRGF0ZS5zcGxpdChcIi1cIilbMV07XG4gICAgY29uc3QgeWVhciA9IGR1ZURhdGUuc3BsaXQoXCItXCIpWzBdO1xuICAgIHJldHVybiBgJHttb250aH0vICR7ZGF5fS8gJHt5ZWFyfWA7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVG9kYXlQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSBnZXRUb2RvKCk7XG5cbiAgICBjb25zdCBleGlzdHMgPSAodGFza05hbWUpID0+IHtcbiAgICAgIHJldHVybiB0b2RvLnByb2plY3RzWzFdLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2submFtZSA9PT0gdGFza05hbWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRUb2RheVRhc2sgPSAoKSA9PiB7XG4gICAgICBsZXQgdG9kYXlUYXNrcyA9IFtdO1xuICAgICAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZShnZXRGb3JtYXR0ZWREYXRlKHRhc2suZHVlRGF0ZSkpO1xuICAgICAgICAgIGlmIChpc1RvZGF5KHRvRGF0ZSh0YXNrRGF0ZSkpICYmICFleGlzdHModGFzay5uYW1lKSkge1xuICAgICAgICAgICAgdG9kYXlUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0b2RheVRhc2tzO1xuICAgIH07XG5cbiAgICB0b2RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IFwiVG9kYXkgVGFza3NcIiB8fCBwcm9qZWN0Lm5hbWUgPT09IFwiVXBjb21pbmcgVGFza3NcIilcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB0b2RvLnByb2plY3RzWzFdLnRhc2tzID0gW107XG5cbiAgICAgIGNvbnN0IHRvZGF5VGFza3MgPSBnZXRUb2RheVRhc2soKTtcbiAgICAgIGNvbnNvbGUubG9nKHRvZGF5VGFza3MpO1xuICAgICAgdG9kYXlUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIHRvZG8ucHJvamVjdHNbMV0udGFza3MucHVzaChcbiAgICAgICAgICBUYXNrKHRhc2submFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codG9kby5wcm9qZWN0c1sxXS50YXNrcyk7XG4gICAgc2F2ZSh0b2RvKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNhdmUsXG4gICAgZ2V0VG9kbyxcbiAgICByZW5hbWVQcm9qZWN0LFxuICAgIGFkZFByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBhZGRUYXNrLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgdXBkYXRlVG9kYXlQcm9qZWN0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxTdG9yYWdlO1xuIiwiY29uc3QgUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gIGxldCB0YXNrcyA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICB0YXNrcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjb25zdCBUYXNrID0gKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5cbmNvbnN0IFRvZG8gPSAoKSA9PiB7XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuICBwcm9qZWN0cy5wdXNoKFByb2plY3QoXCJJbmJveFwiKSk7XG4gIHByb2plY3RzLnB1c2goUHJvamVjdChcIlRvZGF5IFRhc2tzXCIpKTtcbiAgcHJvamVjdHMucHVzaChQcm9qZWN0KFwiVXBjb21pbmcgVGFza3NcIikpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdHMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiaW1wb3J0IExvY2FsU3RvcmFnZSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcblxuY29uc3QgZG9tTWFuaXAgPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGxvYWRQcm9qZWN0cygpO1xuICAgIGluaXREZWZhdWx0QnRucygpO1xuICAgIGxvYWRQcm9qZWN0Q29udGVudChcIkluYm94XCIpO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RVSShwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgPGRpdiBjbGFzcz1cInNpZGUtcHJvalwiPlxuICAgICAgPGg0IGlkPVwiJHtwcm9qZWN0TmFtZX1cIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIC05NjAgOTYwIDk2MFwiIHdpZHRoPVwiMjRcIiA+PHBhdGggZD1cIk0yODAtNjAwdi04MGg1NjB2ODBIMjgwWm0wIDE2MHYtODBoNTYwdjgwSDI4MFptMCAxNjB2LTgwaDU2MHY4MEgyODBaTTE2MC02MDBxLTE3IDAtMjguNS0xMS41VDEyMC02NDBxMC0xNyAxMS41LTI4LjVUMTYwLTY4MHExNyAwIDI4LjUgMTEuNVQyMDAtNjQwcTAgMTctMTEuNSAyOC41VDE2MC02MDBabTAgMTYwcS0xNyAwLTI4LjUtMTEuNVQxMjAtNDgwcTAtMTcgMTEuNS0yOC41VDE2MC01MjBxMTcgMCAyOC41IDExLjVUMjAwLTQ4MHEwIDE3LTExLjUgMjguNVQxNjAtNDQwWm0wIDE2MHEtMTcgMC0yOC41LTExLjVUMTIwLTMyMHEwLTE3IDExLjUtMjguNVQxNjAtMzYwcTE3IDAgMjguNSAxMS41VDIwMC0zMjBxMCAxNy0xMS41IDI4LjVUMTYwLTI4MFpcIi8+PC9zdmc+JHtwcm9qZWN0TmFtZX08L2g0PlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImRlbGV0ZV9wcm9qZWN0XCIgaWQ9XCIke3Byb2plY3ROYW1lfVwiXG4gICAgICAgIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgOTYgOTYwIDk2MFwiIHdpZHRoPVwiMjBcIiBmaWxsPVwiIzgwNTRGRlwiPlxuICAgICAgICA8cGF0aCBkPVwibTI0OSA4NDktNDItNDIgMjMxLTIzMS0yMzEtMjMxIDQyLTQyIDIzMSAyMzEgMjMxLTIzMSA0MiA0Mi0yMzEgMjMxIDIzMSAyMzEtNDIgNDItMjMxLTIzMS0yMzEgMjMxWlwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGluaXRQcm9qZWN0RGVsZXRlQnRuKCk7XG4gICAgaW5pdFByb2plY3RQcmV2aWV3QnRucygpO1xuICB9XG5cbiAgLy8gICBMb2FkcyBwcm9qZWN0cyBmcm9tIHRoZSBsb2NhbFN0b3JhZ2UgYW5kIGNyZWF0ZXMgdGhlIHByb2plY3QgVUkgd2l0aCB0aGUgZGF0YSByZXRyaWV2ZWRcbiAgZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICAgIExvY2FsU3RvcmFnZSgpXG4gICAgICAuZ2V0VG9kbygpXG4gICAgICAucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvamVjdC5uYW1lICE9PSBcIkluYm94XCIgJiZcbiAgICAgICAgICBwcm9qZWN0Lm5hbWUgIT09IFwiVG9kYXkgVGFza3NcIiAmJlxuICAgICAgICAgIHByb2plY3QubmFtZSAhPT0gXCJVcGNvbWluZyBUYXNrc1wiXG4gICAgICAgICkge1xuICAgICAgICAgIGNyZWF0ZVByb2plY3RVSShwcm9qZWN0Lm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBpbml0QWRkUHJvamVjdEJ0bigpO1xuICAgIGluaXRQcm9qUG9wdXBCdG5zKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGNyZWF0ZVByb2plY3RJbnB1dC52YWx1ZTtcblxuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBuYW1lIGZvciB5b3VyIHByb2plY3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbG9hbFN0b3JlID0gTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgZXhpc3RzID0gKG5hbWUpID0+IHtcbiAgICAgIHJldHVybiBsb2FsU3RvcmVcbiAgICAgICAgLmdldFRvZG8oKVxuICAgICAgICAucHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcbiAgICB9O1xuXG4gICAgaWYgKGV4aXN0cyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgIGNyZWF0ZVByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICBhbGVydChcIlByb2plY3QgYWxyZWFkeSBleGlzdFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2FsU3RvcmUuYWRkUHJvamVjdChQcm9qZWN0KHByb2plY3ROYW1lKSk7XG5cbiAgICBjcmVhdGVQcm9qZWN0VUkocHJvamVjdE5hbWUpO1xuXG4gICAgY3JlYXRlUHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfX2NvbnRlbnRcIik7XG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICA8aDEgaWQ9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3ROYW1lfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFza3MtbGlzdFwiIGlkPVwidGFza3MtbGlzdFwiPjwvZGl2PmA7XG5cbiAgICBpZiAocHJvamVjdE5hbWUgIT09IFwiVG9kYXkgVGFza3NcIiAmJiBwcm9qZWN0TmFtZSAhPT0gXCJVcGNvbWluZyBUYXNrc1wiKSB7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWFkZC10YXNrXCIgaWQ9XCJidXR0b24tYWRkLXRhc2tcIj5cbiAgICAgICAgQWRkIFRhc2tcbiAgICAgIDwvYnV0dG9uPmA7XG4gICAgfVxuXG4gICAgbG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRhc2tVSSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWxpc3RcIik7XG4gICAgY29uc3QgZm9ybWF0VGl0bGUgPSB0aXRsZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgICB0YXNrTGlzdC5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXVpXCIgaWQ9JHtmb3JtYXRUaXRsZX0+XG4gICAgICA8cD4ke3RpdGxlfTwvcD5cbiAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPHA+JHtkdWVEYXRlfTwvcD5cbiAgICAgIDxwPiR7cHJpb3JpdHl9PC9wPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgaW5pdERlbGV0ZVRhc2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRUYXNrcyhwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RzID0gTG9jYWxTdG9yYWdlKCkuZ2V0VG9kbygpLnByb2plY3RzO1xuICAgIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgIHJldHVybiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGdldFByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PlxuICAgICAgY3JlYXRlVGFza1VJKHRhc2submFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5KVxuICAgICk7XG4gICAgaWYgKHByb2plY3ROYW1lICE9PSBcIlRvZGF5IFRhc2tzXCIgJiYgcHJvamVjdE5hbWUgIT09IFwiVXBjb21pbmcgVGFza3NcIikge1xuICAgICAgaW5pdFRhc2tBZGRCdG4oKTtcbiAgICAgIGluaXRUYXNrTW9kYWxCdG4oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUYXNrKCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG5cbiAgICBpZiAodGFza1RpdGxlID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIlRpdGxlIGNhbm5vdCBiZSBlbXB0eVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbFN0b3JlID0gTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmVcbiAgICAgICAgLmdldFRvZG8oKVxuICAgICAgICAucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IGdldFByb2plY3QocHJvamVjdE5hbWUpLnRhc2tzO1xuICAgIGNvbnN0IGV4aXN0cyA9ICh0YXNrTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIHByb2plY3RUYXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLm5hbWUgPT09IHRhc2tOYW1lKTtcbiAgICB9O1xuXG4gICAgaWYgKGV4aXN0cyh0YXNrVGl0bGUpKSB7XG4gICAgICBhbGVydChcIlRhc2sgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICBjbGVhcklucHV0RmllbGQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JlLmFkZFRhc2soXG4gICAgICBwcm9qZWN0TmFtZSxcbiAgICAgIFRhc2sodGFza1RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgKTtcblxuICAgIGNyZWF0ZVRhc2tVSSh0YXNrVGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgICBjbGVhcklucHV0RmllbGQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBZGRQcm9qZWN0QnRuKCkge1xuICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpO1xuXG4gICAgY3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRQcm9qUG9wdXBCdG5zKCkge1xuICAgIGNvbnN0IHByb2pQb3B1cEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlX19wcm9qZWN0XCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VcIik7XG4gICAgY29uc3QgYWRkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbW9kYWwgXCIpO1xuICAgIHByb2pQb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkUG9wdXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFkZFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0UHJvamVjdERlbGV0ZUJ0bigpIHtcbiAgICBjb25zdCBkZWxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVfcHJvamVjdFwiKTtcbiAgICBkZWxQcm9qZWN0LmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgTG9jYWxTdG9yYWdlKCkuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNsZWFyUHJvamVjdENvbnRlbnQoKTtcbiAgICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclByb2plY3RDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpO1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cblxuICAvLyBDbGVhcnMgdGhlIHByb2plY3RzIHRhc2tzIG9uIHRoZSBVSVxuICBmdW5jdGlvbiBjbGVhclByb2plY3RQcmV2aWV3KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9fY29udGVudFwiKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRUYXNrQWRkQnRuKCkge1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1tb2RhbFwiKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xuXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrKTtcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0RGVsZXRlVGFzaygpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHRhc2tVSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay11aVwiKTtcbiAgICB0YXNrVUkuZm9yRWFjaChcbiAgICAgICh0YXNrKSA9PlxuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgY29uc3QgdGFza05hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgICAgIExvY2FsU3RvcmFnZSgpLmRlbGV0ZVRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lLCB0aXRsZSk7XG4gICAgICAgICAgY2xlYXJQcm9qZWN0UHJldmlldygpO1xuICAgICAgICAgIGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0TmFtZSk7XG4gICAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0RGVmYXVsdEJ0bnMoKSB7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC10YXNrc1wiKTtcbiAgICBjb25zdCB0b2RheVRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS10YXNrc1wiKTtcbiAgICBjb25zdCB3ZWVrVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWstdGFza3NcIik7XG5cbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUHJvamVjdEJ1dHRvbik7XG4gICAgdG9kYXlUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBkYXRlVG9kYXlQcm9qZWN0KTtcbiAgICB0b2RheVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0QnV0dG9uKTtcbiAgICB3ZWVrVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByb2plY3RCdXR0b24pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFByb2plY3RQcmV2aWV3QnRucygpIHtcbiAgICBjb25zdCBwcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlLXByb2ogaDRcIik7XG4gICAgcHJvakJ0bi5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVVua25vd25Qcm9qZWN0QnRucywge1xuICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJvamVjdEJ1dHRvbihlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgbG9hZFByb2plY3RDb250ZW50KHByb2plY3ROYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVVua25vd25Qcm9qZWN0QnRucyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgbG9hZFByb2plY3RDb250ZW50KHByb2plY3ROYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvZGF5UHJvamVjdCgpIHtcbiAgICBMb2NhbFN0b3JhZ2UoKS51cGRhdGVUb2RheVByb2plY3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRUYXNrTW9kYWxCdG4oKSB7XG4gICAgY29uc3QgdGFza1BvcHVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYWRkLXRhc2tcIik7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW1vZGFsXCIpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG5cbiAgICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfTtcblxuICAgIHRhc2tQb3B1cEJ0bi5vbmNsaWNrID0gb3Blbk1vZGFsO1xuICAgIG92ZXJsYXkub25jbGljayA9IGNsb3NlTW9kYWw7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcklucHV0RmllbGQoKSB7XG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpO1xuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKTtcblxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH1cblxuICByZXR1cm4geyBsb2FkSG9tZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTWFuaXA7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBkb21NYW5pcCBmcm9tIFwiLi9tb2R1bGVzL2RvbU1hbmlwXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5kb21NYW5pcCgpLmxvYWRIb21lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=