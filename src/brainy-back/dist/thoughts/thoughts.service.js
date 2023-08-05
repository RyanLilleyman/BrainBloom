"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThoughtsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let ThoughtsService = exports.ThoughtsService = class ThoughtsService {
    constructor() {
        this.thoughts = [];
    }
    createThought(createThought) {
        const thought = {
            id: (0, uuid_1.v4)(),
            title: createThought.title,
            date: createThought.date,
            content: createThought.content,
            status: createThought.status,
        };
        this.thoughts.push(thought);
        return thought;
    }
    findAll() {
        return this.thoughts;
    }
    findOne(id) {
        return this.thoughts.find((thought) => thought.id === id);
    }
    remove(id) {
        this.thoughts = this.thoughts.filter((thought) => thought.id !== id);
    }
    update(id, updateThoughtDto) {
        const thought = this.thoughts.find((thought) => thought.id === id);
        if (thought) {
            if (updateThoughtDto.title) {
                thought.title = updateThoughtDto.title;
            }
            if (updateThoughtDto.date) {
                thought.date = updateThoughtDto.date;
            }
            if (updateThoughtDto.content) {
                thought.content = updateThoughtDto.content;
            }
            if (updateThoughtDto.status) {
                thought.status = updateThoughtDto.status;
            }
        }
        return thought;
    }
};
exports.ThoughtsService = ThoughtsService = __decorate([
    (0, common_1.Injectable)()
], ThoughtsService);
//# sourceMappingURL=thoughts.service.js.map