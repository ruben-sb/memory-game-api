"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_usecases_1 = __importDefault(require("../../application/user.usecases"));
const user_repository_mongo_1 = __importDefault(require("../db/user.repository.mongo"));
const router = express_1.default.Router();
const userUseCases = new user_usecases_1.default(new user_repository_mongo_1.default());
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userUseCases.getTop10();
        res.send(users);
    }
    catch (error) {
        res.status(500).send({ error: error });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFromRequest = req.body;
        const user = yield userUseCases.add(userFromRequest);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
}));
exports.default = router;
