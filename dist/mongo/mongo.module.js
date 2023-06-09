"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoModule = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const mongo_service_1 = require("./mongo.service");
let MongoModule = class MongoModule {
};
MongoModule = __decorate([
    (0, common_1.Module)({
        providers: [mongo_service_1.MongoService, {
                provide: 'DATABASE_CONNECTION',
                useFactory: async () => {
                    var _a;
                    try {
                        const url = (_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : "mongodb://127.0.0.1:27017";
                        console.log("url", "mongodb://localhost:27017");
                        const client = await mongodb_1.MongoClient.connect(url);
                        return client;
                    }
                    catch (e) {
                        throw e;
                    }
                }
            }],
        exports: [mongo_service_1.MongoService]
    })
], MongoModule);
exports.MongoModule = MongoModule;
//# sourceMappingURL=mongo.module.js.map