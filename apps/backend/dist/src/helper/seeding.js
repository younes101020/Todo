"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSeeding = void 0;
const faker_1 = require("@faker-js/faker");
const generateSeeding = (callback, count) => {
    return faker_1.faker.helpers.multiple(callback, { count });
};
exports.generateSeeding = generateSeeding;
//# sourceMappingURL=seeding.js.map