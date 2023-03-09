"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
//v9: uuid creates a unique identifier using the uuid 9.0.0 library
const { v9: uuid } = require('uuid');
async function createUser(user) {
    //If there is no user id is passed then a unique id is created with uuid
    if (!user.id)
        user.id = uuid();
    //Content field for our user
    const { id, first_name, last_name, email, user_type } = user;
    try {
        //MySQL query, like a prepared statement, with DML inserting a new user to the db
        const query = `INSERT INTO User (id, first_name, last_name, email, user_type) 
                                                    VALUES (:id, :first_name, :last_name, :email, :user_type)`;
        //execute query with parameters
        await db_1.default.query(query, { id, first_name, last_name, email, user_type });
        return user;
    }
    catch (err) {
        console.log('MySQL error from createUser: ', err);
        return null;
    }
}
exports.default = createUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZVVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2QkFBc0I7QUFDdEIsbUVBQW1FO0FBQ25FLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLEtBQUssVUFBVSxVQUFVLENBQUMsSUFBVTtJQUNoQyx3RUFBd0U7SUFDeEUsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUM5Qiw0QkFBNEI7SUFDNUIsTUFBTSxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsR0FBRyxJQUFJLENBQUM7SUFDM0QsSUFBSTtRQUNBLGlGQUFpRjtRQUNqRixNQUFNLEtBQUssR0FBRzs4R0FDd0YsQ0FBQztRQUN2RywrQkFBK0I7UUFDL0IsTUFBTSxZQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFBO1FBQ3BFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFBQSxPQUFPLEdBQUcsRUFBRTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUM7QUFDRCxrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4vZGJcIjtcbi8vdjk6IHV1aWQgY3JlYXRlcyBhIHVuaXF1ZSBpZGVudGlmaWVyIHVzaW5nIHRoZSB1dWlkIDkuMC4wIGxpYnJhcnlcbmNvbnN0IHsgdjk6IHV1aWQgfSA9IHJlcXVpcmUoJ3V1aWQnKTtcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIodXNlcjogVXNlcikge1xuICAgIC8vSWYgdGhlcmUgaXMgbm8gdXNlciBpZCBpcyBwYXNzZWQgdGhlbiBhIHVuaXF1ZSBpZCBpcyBjcmVhdGVkIHdpdGggdXVpZFxuICAgIGlmKCF1c2VyLmlkKSB1c2VyLmlkID0gdXVpZCgpO1xuICAgIC8vQ29udGVudCBmaWVsZCBmb3Igb3VyIHVzZXJcbiAgICBjb25zdCB7aWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZW1haWwsIHVzZXJfdHlwZX0gPSB1c2VyO1xuICAgIHRyeSB7XG4gICAgICAgIC8vTXlTUUwgcXVlcnksIGxpa2UgYSBwcmVwYXJlZCBzdGF0ZW1lbnQsIHdpdGggRE1MIGluc2VydGluZyBhIG5ldyB1c2VyIHRvIHRoZSBkYlxuICAgICAgICBjb25zdCBxdWVyeSA9IGBJTlNFUlQgSU5UTyBVc2VyIChpZCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBlbWFpbCwgdXNlcl90eXBlKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQUxVRVMgKDppZCwgOmZpcnN0X25hbWUsIDpsYXN0X25hbWUsIDplbWFpbCwgOnVzZXJfdHlwZSlgO1xuICAgICAgICAvL2V4ZWN1dGUgcXVlcnkgd2l0aCBwYXJhbWV0ZXJzXG4gICAgICAgIGF3YWl0IGRiLnF1ZXJ5KHF1ZXJ5LCB7aWQsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgZW1haWwsIHVzZXJfdHlwZX0pXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1jYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNeVNRTCBlcnJvciBmcm9tIGNyZWF0ZVVzZXI6ICcsIGVycik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVzZXI7XG4iXX0=