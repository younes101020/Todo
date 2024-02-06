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
exports.LazyLoadingInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LazyLoadingInputDto {
    constructor() {
        this.limit = 5;
    }
}
exports.LazyLoadingInputDto = LazyLoadingInputDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: "This field can't be used in the first request, you can fill it with the id of the last todo you have retrieved, this will allow you to get the next setp of todos"
    }),
    __metadata("design:type", Number)
], LazyLoadingInputDto.prototype, "cursor", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(5),
    (0, swagger_1.ApiProperty)({
        description: "The number of todo you want to retrieve"
    }),
    __metadata("design:type", Number)
], LazyLoadingInputDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        description: "The project id tied to todo(s)"
    }),
    __metadata("design:type", Number)
], LazyLoadingInputDto.prototype, "initiatorId", void 0);
//# sourceMappingURL=lazyloading-input.dto.js.map