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
exports.ThoughtsController = void 0;
const common_1 = require("@nestjs/common");
const thoughts_service_1 = require("./thoughts.service");
const create_thought_dto_1 = require("./dto/create-thought.dto");
const update_thought_dto_1 = require("./dto/update-thought.dto");
let ThoughtsController = exports.ThoughtsController = class ThoughtsController {
    constructor(thoughtsService) {
        this.thoughtsService = thoughtsService;
    }
    create(createThoughtDto) {
        return this.thoughtsService.create(createThoughtDto);
    }
    findAll() {
        return this.thoughtsService.findAll();
    }
    findOne(id) {
        return this.thoughtsService.findOne(+id);
    }
    update(id, updateThoughtDto) {
        return this.thoughtsService.update(+id, updateThoughtDto);
    }
    remove(id) {
        return this.thoughtsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_thought_dto_1.CreateThoughtDto]),
    __metadata("design:returntype", void 0)
], ThoughtsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThoughtsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThoughtsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_thought_dto_1.UpdateThoughtDto]),
    __metadata("design:returntype", void 0)
], ThoughtsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThoughtsController.prototype, "remove", null);
exports.ThoughtsController = ThoughtsController = __decorate([
    (0, common_1.Controller)('thoughts'),
    __metadata("design:paramtypes", [thoughts_service_1.ThoughtsService])
], ThoughtsController);
//# sourceMappingURL=thoughts.controller.js.map