/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/*! namespace exports */
/*! export Client [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Client\": () => /* binding */ Client\n/* harmony export */ });\nclass Client {\r\n    constructor(client) {\r\n        this.family = client.family;\r\n        this.name = client.name;\r\n        this.otch = client.otch;\r\n        this.date = client.date;\r\n        this.city = client.city;\r\n        this.cardNumber = client.cardNumber;\r\n        this.accountBalance = client.accountBalance;\r\n    }\r\n    \r\n    get cardNumber() {\r\n        return this._cardNumber;\r\n    }\r\n\r\n    set cardNumber(value) {\r\n        this._cardNumber = value;\r\n    }\r\n\r\n    get _accountBalance() {\r\n        return this._accountBalance;\r\n    }\r\n\r\n    set _accountBalance(value) {\r\n        this._accountBalance = value;\r\n    }\r\n}\r\n\r\n\r\n\r\n  \n\n//# sourceURL=webpack://shop/./src/classes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/classes.js\");\n\r\n\r\n\r\n\r\nlet clientsList = document.getElementById('clientsList');\r\nlet clients = [];\r\nlet clientProt = {\r\n    family: \"\",\r\n    name: \"\",\r\n    otch: \"\",\r\n    date: \"\",\r\n    city: \"\",\r\n    cardNumber: \"\",\r\n    accountBalance: 0\r\n};\r\n\r\n\r\n\r\nfunction generateNumber() {\r\n    let cardNumber = [];\r\n    for (let i = 0; i < 16; i++) { \r\n        cardNumber.push(Math.floor(Math.random()*10));\r\n    }\r\n    return cardNumber.join(\"\");\r\n}\r\n\r\n\r\nfunction fillClientProtData() {\r\n    clientProt.family = document.getElementById('family').value;\r\n    clientProt.name = document.getElementById('name').value;\r\n    clientProt.otch = document.getElementById('otch').value;\r\n    clientProt.date = document.getElementById('date').value;\r\n    clientProt.city = document.getElementById('city').value;\r\n    clientProt.cardNumber = generateNumber();\r\n};\r\n\r\n\r\nfunction createNewClient(client) {\r\n    let newClient = new _classes__WEBPACK_IMPORTED_MODULE_0__.Client(client);\r\n    clients.push(newClient);\r\n};\r\n\r\n\r\nfunction clearInputFields() {\r\n     document.getElementById('family').value = \"\";\r\n     document.getElementById('name').value= \"\";\r\n     document.getElementById('otch').value = \"\";\r\n     document.getElementById('date').value = \"\";\r\n     document.getElementById('city').value = \"\";\r\n     document.getElementById('addMoneyAmount').value = \"\";\r\n     document.getElementById('removeMoneyAmount').value = \"\";\r\n};\r\n\r\n\r\nfunction addClientToList(client) {\r\n    let insertedLine = clients[clients.length - 1].family + \" \" +\r\n        clients[clients.length - 1].name + \" \" +\r\n        clients[clients.length - 1].otch + \", \" + \r\n        clients[clients.length - 1].city;\r\n    clientsList.options[clientsList.length] = new Option(insertedLine);\r\n};\r\n\r\n\r\nfunction selectLastAddClient() {\r\n    clientsList.selectedIndex = clientsList.length-1;\r\n};\r\n\r\n\r\nfunction addClient() {\r\n    fillClientProtData();\r\n    createNewClient(clientProt);\r\n    clearInputFields();\r\n    addClientToList();\r\n    selectLastAddClient();\r\n    renewClientInformation(clientsList.selectedIndex);\r\n};\r\n\r\n\r\nfunction isFilledCorrect(item) {\r\n    if (item.value.length > 0) {\r\n        return true;\r\n    };\r\n};\r\n\r\n\r\nfunction checkClientFieldsCorrect() {\r\n    let inputFields = Array.from(document.querySelectorAll(\".clientInput\"));\r\n    if (inputFields.every(isFilledCorrect)) {\r\n        return true;\r\n    } else alert(\"Не все поля заполнены!\");\r\n};\r\n\r\n\r\ndocument.getElementById('addClient').addEventListener('click', function(event) {\r\n    if (checkClientFieldsCorrect()) {\r\n        addClient();\r\n    }\r\n});\r\n\r\n\r\nfunction makeJSON(clientsToModify) {\r\n    let output = clientsToModify.map(function(item, number) {\r\n        return JSON.stringify(item);\r\n    })\r\n    return output;    \r\n};\r\n\r\n\r\nfunction showJSONClients(clientList) {\r\n    let outputJSONDiv = document.getElementById(\"clientJSONList\");\r\n    outputJSONDiv.innerHTML = makeJSON(clientList);\r\n};\r\n\r\n\r\nfunction formCardNumberToOutput(cardNumber) {\r\n    let s = String(cardNumber);\r\n    return(s.split(\"\")\r\n    .map((item, number) => {\r\n        if ((number+1)%4 == 0) {\r\n            return (item+\" \")\r\n        } else return item;\r\n        })\r\n    .join(\"\")\r\n    );\r\n};\r\n\r\n\r\nfunction renewClientInformation(clientNumber) {\r\n    document.getElementById(\"infoFIO\").innerHTML = `${clients[clientNumber].family} ${clients[clientNumber].name} ${clients[clientNumber].otch}`;\r\n    document.getElementById(\"infoDate\").innerHTML = `${clients[clientNumber].date}г.`;\r\n    document.getElementById(\"infoCity\").innerHTML = `${clients[clientNumber].city}`;\r\n    document.getElementById(\"infoCardNumber\").innerHTML = `${formCardNumberToOutput(clients[clientNumber].cardNumber)}`;\r\n    document.getElementById(\"infoAccount\").innerHTML = `${clients[clientNumber].accountBalance}`;\r\n    showJSONClients(clients);\r\n};\r\n\r\n\r\nclientsList.addEventListener('click', function(event) {\r\n    if (clients.length) {\r\n        renewClientInformation(clientsList.selectedIndex);\r\n    };\r\n});\r\n\r\n\r\nfunction errorInput() {\r\n    alert(\"Вы ввели не число!\");\r\n}\r\n\r\n\r\nfunction changeMoneyToClient(clientNumber, amount, operation) {\r\n    if (operation === \"add\") {\r\n        if (Number(amount) >= 0) {\r\n            clients[clientNumber].accountBalance += Number(amount);\r\n        } else errorInput();\r\n    } else if (operation === \"remove\") {\r\n        if (Number(amount) >= 0) {\r\n            let balance = clients[clientNumber].accountBalance;\r\n                if (balance - amount > 0) {\r\n                    clients[clientNumber].accountBalance -= amount;\r\n                } else alert(\"Недостаточно средств для списания!\");\r\n        } else errorInput();\r\n    }\r\n};\r\n\r\n\r\ndocument.getElementById(\"addMoneyButton\").addEventListener('click', function() {\r\n    changeMoneyToClient(clientsList.selectedIndex, document.getElementById(\"addMoneyAmount\").value, \"add\");\r\n    renewClientInformation(clientsList.selectedIndex);\r\n    clearInputFields();\r\n});\r\n\r\n\r\ndocument.getElementById(\"removeMoneyButton\").addEventListener('click', function() {\r\n    changeMoneyToClient(clientsList.selectedIndex, document.getElementById(\"removeMoneyAmount\").value, \"remove\");\r\n    renewClientInformation(clientsList.selectedIndex);\r\n    clearInputFields();\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://shop/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;