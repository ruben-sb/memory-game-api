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
exports.collections = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const collections = {};
exports.collections = collections;
const username = process.env.MONGO_USERNAME || 'username';
const password = process.env.MONGO_PASSWORD || 'password';
const host = process.env.MONGO_HOST || 'localhost';
const port = process.env.MONGO_PORT || '27017';
const dbName = process.env.MONGO_DB_NAME;
const url = `mongodb+srv://${username}:${password}@${host}/`;
function createMongoConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield mongodb_1.MongoClient.connect(url);
            const db = client.db(dbName);
            addCollections(db);
            console.log('Connected to MongoDB');
        }
        catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    });
}
const addCollections = (db) => {
    collections.users = db.collection('users');
};
createMongoConnection();
exports.default = createMongoConnection;
