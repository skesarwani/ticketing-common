"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
var custom_error_base_1 = require("./custom-error-base");
var DatabaseConnectionError = /** @class */ (function (_super) {
    __extends(DatabaseConnectionError, _super);
    function DatabaseConnectionError(reason) {
        if (reason === void 0) { reason = 'Error connecting to DB'; }
        var _this = _super.call(this, reason) || this;
        _this.statusCode = 500;
        _this.message = reason;
        Object.setPrototypeOf(_this, DatabaseConnectionError.prototype);
        return _this;
    }
    DatabaseConnectionError.prototype.serializeErrors = function () {
        return [{ message: this.message }];
    };
    return DatabaseConnectionError;
}(custom_error_base_1.CustomErrorBase));
exports.DatabaseConnectionError = DatabaseConnectionError;
