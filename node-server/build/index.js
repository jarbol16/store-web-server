"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const constans_1 = require("./utilities/constans");
const items_1 = __importDefault(require("./routes/items"));
const app = (0, express_1.default)();
const PORT = constans_1.ApiSetting.port;
app.use((0, cors_1.default)({
    origin: ['http://localhost:3001', '*']
}));
app.get('/ping', (_req, res) => {
    res.send('resver responde');
});
app.use('/api/items', items_1.default);
app.listen(PORT, () => {
    console.log(`Server MercadoLibre running on port ${PORT}`);
});
