"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let MongoService = class MongoService {
    insert(cat, arg1) {
        throw new Error('Method not implemented.');
    }
    constructor(client) {
        this.client = client;
        this.DATABASE_NAME = "cats";
        this.database = this.client.db(this.DATABASE_NAME);
    }
    create(cats) {
        this.cats.push(cats);
        return cats;
    }
    findAll() {
        return this.cats;
    }
    findOne(id) {
        return this.cats.find(cats => cats.id === id);
    }
    update(id, cats) {
        const index = this.cats.findIndex(cats => cats.id === id);
        if (index !== -1) {
            this.cats[index] = Object.assign(Object.assign({}, cats), { id });
            return this.cats[index];
        }
        return null;
    }
    delete(id) {
        const index = this.cats.findIndex(cats => cats.id === id);
        if (index !== -1) {
            const deletedCats = this.cats[index];
            this.cats.splice(index, 1);
            return deletedCats;
        }
        return null;
    }
};
MongoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATABASE_CONNECTION')),
    __metadata("design:paramtypes", [mongodb_1.MongoClient])
], MongoService);
exports.MongoService = MongoService;
//# sourceMappingURL=mongo.service.js.map