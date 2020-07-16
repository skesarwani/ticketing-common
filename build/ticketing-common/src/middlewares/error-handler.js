"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models/models");
var custom_error_base_1 = require("../errors/custom-error-base");
exports.errorHandler = function (err, req, res, next) {
    if (err instanceof custom_error_base_1.CustomErrorBase) {
        return res.status(err.statusCode).send(new models_1.ErrorMetadata(err.serializeErrors()));
    }
    return res.status(400).send(new models_1.ErrorMetadata([{ message: err.message }]));
};
