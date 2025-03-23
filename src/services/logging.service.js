"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoggingService = void 0;
// src/services/logging.service.ts
var common_1 = require("@nestjs/common");
var LoggingService = /** @class */ (function () {
    function LoggingService() {
        this.logger = new common_1.Logger(LoggingService_1.name);
    }
    LoggingService_1 = LoggingService;
    LoggingService.prototype.log = function (message) {
        this.logger.log(message);
    };
    LoggingService.prototype.warn = function (message) {
        this.logger.warn(message);
    };
    LoggingService.prototype.error = function (message, trace) {
        this.logger.error(message, trace);
    };
    var LoggingService_1;
    LoggingService = LoggingService_1 = __decorate([
        (0, common_1.Injectable)()
    ], LoggingService);
    return LoggingService;
}());
exports.LoggingService = LoggingService;
