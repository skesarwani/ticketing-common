"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = void 0;
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.transformErrorList = function (errorList) {
        return errorList.map(function (error) {
            return {
                message: error.msg,
                field: error.param
            };
        });
    };
    return Utility;
}());
exports.Utility = Utility;
