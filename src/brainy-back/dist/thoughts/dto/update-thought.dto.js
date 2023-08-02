"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThoughtDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_thought_dto_1 = require("./create-thought.dto");
class UpdateThoughtDto extends (0, mapped_types_1.PartialType)(create_thought_dto_1.CreateThoughtDto) {
}
exports.UpdateThoughtDto = UpdateThoughtDto;
//# sourceMappingURL=update-thought.dto.js.map