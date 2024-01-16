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
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_connector_1 = require("../../../context/mongo.connector");
class UserRepositoryMongoDB {
    getTop10() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usersFromDB = yield mongo_connector_1.collections.users
                    .find()
                    .sort({ time: 1 })
                    .limit(10)
                    .toArray();
                const users = usersFromDB.map((user) => {
                    const aux = {
                        username: user.username,
                        time: user.time,
                    };
                    return aux;
                });
                return users;
            }
            catch (error) {
                return undefined;
            }
        });
    }
    add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /*  const query = { username: user.username, time: { $lt: user.time } }
                const update = { $set: { username: user.username, time: user.time } }
                const options = { upsert: true } */
                const userInsertResult = yield mongo_connector_1.collections.users.insertOne(user);
                console.log(userInsertResult);
                const userResponse = {
                    username: user.username,
                    time: user.time,
                };
                console.log(userResponse);
                return userResponse;
            }
            catch (error) {
                console.log(error);
                return undefined;
            }
        });
    }
}
exports.default = UserRepositoryMongoDB;
