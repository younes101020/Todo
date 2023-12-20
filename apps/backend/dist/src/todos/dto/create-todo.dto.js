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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoDto = exports.Status = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var Status;
(function (Status) {
    Status["NOT_STARTED"] = "NOT_STARTED";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
    Status["DONE"] = "DONE";
})(Status || (exports.Status = Status = {}));
class CreateTodoDto {
}
exports.CreateTodoDto = CreateTodoDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: "The project id tied to this todo"
    }),
    __metadata("design:type", Number)
], CreateTodoDto.prototype, "initiatorId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, swagger_1.ApiProperty)({
        description: "Title of the task"
    }),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.MinLength)(5, {
        each: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: "Tags which qualifies the task"
    }),
    __metadata("design:type", Array)
], CreateTodoDto.prototype, "tags", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(Status),
    (0, swagger_1.ApiProperty)({
        description: "Current status of the task",
        default: Status.NOT_STARTED,
        enum: Status
    }),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(3),
    (0, swagger_1.ApiProperty)({
        description: "Priority level of the task",
        default: 2
    }),
    __metadata("design:type", Number)
], CreateTodoDto.prototype, "priority", void 0);
//# sourceMappingURL=create-todo.dto.js.map