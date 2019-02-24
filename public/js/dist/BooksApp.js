(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        BooksApp: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/index.js", "vendors~BooksApp" ]);
    return checkDeferredModules();
})({
    "./assets/js/actions/allActions.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return addingBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return removingBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return openingInfoBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return closingInfoBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return openingMyList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return closingMyList; });\nconst addingBook = bookTitle => {\n  return {\n    type: 'ADD_BOOK',\n    payload: bookTitle\n  };\n};\nconst removingBook = book => {\n  return {\n    type: 'REMOVE_BOOK',\n    payload: book\n  };\n};\nconst openingInfoBook = book => {\n  return {\n    type: 'OPEN_INFO_BOOK',\n    payload: book\n  };\n};\nconst closingInfoBook = book => {\n  return {\n    type: 'CLOSE_INFO_BOOK',\n    payload: book\n  };\n};\nconst openingMyList = () => {\n  return {\n    type: 'OPEN_MY_LIST'\n  };\n};\nconst closingMyList = () => {\n  return {\n    type: 'CLOSE_MY_LIST'\n  };\n};\n\n//# sourceURL=webpack:///./assets/js/actions/allActions.js?");
    },
    "./assets/js/components/AllBooks.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../actions/allActions */ "./assets/js/actions/allActions.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\nclass AllBooks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.showAllBooks = () => {\n      return this.props.booksData.map(book => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "book-container",\n          key: book.id\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          onClick: this.props.openingInfoBook.bind(null, book),\n          className: "book",\n          style: {\n            backgroundImage: `url(\'${book.coverURL}\')`\n          }\n        }));\n      });\n    };\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "all-books"\n    }, this.showAllBooks());\n  }\n\n}\n\nconst mapStateToProps = state => {\n  //console.log(state);\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  openingInfoBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* openingInfoBook */ "d"]\n})(AllBooks));\n\n//# sourceURL=webpack:///./assets/js/components/AllBooks.js?');
    },
    "./assets/js/components/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _AllBooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllBooks */ "./assets/js/components/AllBooks.js");\n/* harmony import */ var _MyList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyList */ "./assets/js/components/MyList.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../actions/allActions */ "./assets/js/actions/allActions.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "approot",\n      className: this.props.globalState.popupOpen ? \'popupOpen\' : \'\'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      onClick: this.props.openingMyList,\n      className: `open-list \n\t\t\t\t\t\t\t${this.props.globalState.listOpen == true ? \'open\' : \'closed\'}`\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-bars"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AllBooks__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyList__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  //console.log(state);\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  openingMyList: _actions_allActions__WEBPACK_IMPORTED_MODULE_4__[/* openingMyList */ "e"]\n})(App));\n\n//# sourceURL=webpack:///./assets/js/components/App.js?');
    },
    "./assets/js/components/Modal.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../actions/allActions */ "./assets/js/actions/allActions.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nclass Modal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "modal",\n      className: this.props.globalState.popupOpen == true ? \'active\' : \'\'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "modal-container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "close-modal",\n      onClick: this.props.closingInfoBook\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-times"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "modal-grid"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "images"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cover",\n      style: {\n        backgroundImage: `url(\'${this.props.globalState.openInfoBook.coverURL == undefined ? \'\' : this.props.globalState.openInfoBook.coverURL}\')`\n      }\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, this.props.globalState.openInfoBook.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "bold"\n    }, "Author: "), this.props.globalState.openInfoBook.author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "bold"\n    }, "Category: "), this.props.globalState.openInfoBook.category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "bold"\n    }, "Published: "), this.props.globalState.openInfoBook.published), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n      className: "review"\n    }, this.props.globalState.openInfoBook.review), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "add-btn" // able to pass down paramater to function without triggering it\n      ,\n      onClick: this.props.addingBook.bind(null, this.props.globalState.openInfoBook.title)\n    }, "Add to my list")))));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  console.log(state);\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  closingInfoBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* closingInfoBook */ "b"],\n  addingBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* addingBook */ "a"]\n})(Modal));\n\n//# sourceURL=webpack:///./assets/js/components/Modal.js?');
    },
    "./assets/js/components/MyList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../actions/allActions */ "./assets/js/actions/allActions.js");\n\n\n\n\nclass MyList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.showListOfBooks = () => {\n      return this.props.globalState.myList.map(book => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n          key: book\n        }, book, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "delete-btn",\n          onClick: this.props.removingBook.bind(null, book)\n        }, "Delete"));\n      });\n    };\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "myList",\n      className: this.props.globalState.listOpen == true ? \'active\' : \'\'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "My list of books"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.showListOfBooks()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "close-list",\n      onClick: this.props.closingMyList\n    }, "Close list"));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  //console.log(state);\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  closingMyList: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* closingMyList */ "c"],\n  removingBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* removingBook */ "f"]\n})(MyList));\n\n//# sourceURL=webpack:///./assets/js/components/MyList.js?');
    },
    "./assets/js/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ "./assets/js/components/App.js");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Modal */ "./assets/js/components/Modal.js");\n/* harmony import */ var _reducers_allReducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/allReducers */ "./assets/js/reducers/allReducers.js");\n\n\n\n\n\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[/* createStore */ "c"])(_reducers_allReducers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* Provider */ "a"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)), document.getElementById(\'app\'));\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* Provider */ "a"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null)), document.getElementById(\'modalroot\'));\n\n//# sourceURL=webpack:///./assets/js/index.js?');
    },
    "./assets/js/reducers/allReducers.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\n/* harmony import */ var _appStateReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appStateReducer */ "./assets/js/reducers/appStateReducer.js");\n/* harmony import */ var _booksDataReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booksDataReducer */ "./assets/js/reducers/booksDataReducer.js");\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* combineReducers */ "b"])({\n  globalState: _appStateReducer__WEBPACK_IMPORTED_MODULE_1__[/* appStateReducer */ "a"],\n  booksData: _booksDataReducer__WEBPACK_IMPORTED_MODULE_2__[/* booksDataReducer */ "a"]\n}));\n\n//# sourceURL=webpack:///./assets/js/reducers/allReducers.js?');
    },
    "./assets/js/reducers/appStateReducer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return appStateReducer; });\nconst initialState = {\n  myList: [],\n  openInfoBook: {},\n  popupOpen: false,\n  listOpen: false\n};\nlet newState;\nconst appStateReducer = function appStateReducer() {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'ADD_BOOK':\n      var myList = [...state.myList, action.payload];\n      newState = Object.assign({}, state, {\n        myList: myList\n      });\n      return newState;\n      break;\n\n    case 'REMOVE_BOOK':\n      var myList = state.myList.filter(book => // return everything that doesnt equal the unique id\n      book !== action.payload);\n      newState = Object.assign({}, state, {\n        myList: myList\n      });\n      return newState;\n      break;\n\n    case 'OPEN_INFO_BOOK':\n      newState = Object.assign({}, state, {\n        openInfoBook: action.payload,\n        popupOpen: true\n      }); // console.log('book opened');\n      // console.log(newState);\n\n      return newState;\n      break;\n\n    case 'CLOSE_INFO_BOOK':\n      newState = Object.assign({}, state, {\n        popupOpen: false\n      }); //console.log('closed book');\n\n      return newState;\n      break;\n\n    case 'OPEN_MY_LIST':\n      newState = Object.assign({}, state, {\n        listOpen: true\n      }); //console.log('opened list');\n\n      return newState;\n      break;\n\n    case 'CLOSE_MY_LIST':\n      newState = Object.assign({}, state, {\n        listOpen: false\n      });\n      return newState;\n      break;\n\n    default:\n      return state;\n      break;\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/reducers/appStateReducer.js?");
    },
    "./assets/js/reducers/booksDataReducer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return booksDataReducer; });\nconst booksDataReducer = () => {\n  return [{\n    id: 1,\n    title: 'X-men novel',\n    author: 'chris clairemont',\n    category: 'graphic novel',\n    published: 1982,\n    coverURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/X-Men_v1_141.jpg/220px-X-Men_v1_141.jpg',\n    review: `The Marvel Cinematic Universe is an American media franchise and\n      shared universe that is centered on a series of superhero films,\n      independently produced by Marvel Studios and based on characters\n      that appear in American comic books published by Marvel Comics.`\n  }, {\n    id: 2,\n    title: 'Housewives novel',\n    author: 'john clairemont',\n    category: 'fiction novel',\n    published: 1972,\n    coverURL: 'https://marketplace.canva.com/MACV2Ehunsw/1/0/thumbnail_large/canva-blue-photo-science-fiction-book-cover-MACV2Ehunsw.jpg',\n    review: `The Marvel Cinematic Universe is an American media franchise and\n      shared universe that is centered on a series of superhero films,\n      independently produced by Marvel Studios and based on characters\n      that appear in American comic books published by Marvel Comics.`\n  }, {\n    id: 3,\n    title: 'Engineering novel',\n    author: 'liz clairemont',\n    category: 'textbook novel',\n    published: 1992,\n    coverURL: 'https://www.bookish.com/wp-content/uploads/9780823420476_d2861-1.jpg',\n    review: `The Marvel Cinematic Universe is an American media franchise and\n      shared universe that is centered on a series of superhero films,\n      independently produced by Marvel Studios and based on characters\n      that appear in American comic books published by Marvel Comics.`\n  }, {\n    id: 4,\n    title: 'Very true novel',\n    author: 'emma clairemont',\n    category: 'shill me novel',\n    published: 1982,\n    coverURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UhjPFLDByO4Cj7cJcI3zSh4HNzTRjrDE1Fa1SzxGSj9kbGL9',\n    review: `The Marvel Cinematic Universe is an American media franchise and\n      shared universe that is centered on a series of superhero films,\n      independently produced by Marvel Studios and based on characters\n      that appear in American comic books published by Marvel Comics.`\n  }, {\n    id: 5,\n    title: 'Tennis novel',\n    author: 'pat clairemont',\n    category: 'instruction novel',\n    published: 1983,\n    coverURL: 'https://www.bookish.com/wp-content/uploads/the-night-gardener-9781481439787_hr.jpg',\n    review: `The Marvel Cinematic Universe is an American media franchise and\n      shared universe that is centered on a series of superhero films,\n      independently produced by Marvel Studios and based on characters\n      that appear in American comic books published by Marvel Comics.`\n  }, {\n    id: 6,\n    title: 'Business novel',\n    author: 'dan clairemont',\n    category: 'non fiction book',\n    published: 1989,\n    coverURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_tfuaFWA_jtLXdPB93EvhtJXjEXihKwhJ0rl2k3Zyqs8ATU',\n    review: `The Marvel Cinematic Universe is an American media franchise and\n      shared universe that is centered on a series of superhero films,\n      independently produced by Marvel Studios and based on characters\n      that appear in American comic books published by Marvel Comics.`\n  }];\n};\n\n//# sourceURL=webpack:///./assets/js/reducers/booksDataReducer.js?");
    }
});