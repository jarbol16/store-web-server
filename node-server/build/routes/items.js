"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const items = express_1.default.Router();
items.get('/', (req, _res) => {
    const { q } = req.query;
    try {
        console.log(`Queryyyyy ${q}`);
        _res.send(q);
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = items;
