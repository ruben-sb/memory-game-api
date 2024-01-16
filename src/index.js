"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const originURL = process.env.URL_CORS;
const options = {
    origin: originURL,
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
const user_router_1 = __importDefault(require("./user/infrastructure/rest/user.router"));
app.use('/api/users', user_router_1.default);
app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});
