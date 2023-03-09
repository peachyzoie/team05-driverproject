"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUserById_1 = require("./getUserById");
const createUser_1 = require("./createUser");
const deleteUser_1 = require("./deleteUser");
exports.handler = async (event) => {
    switch (event.info.fieldName) {
        case 'createUser':
            return await (0, createUser_1.default)(event.arguments.user);
        case 'getUserById':
            return await (0, getUserById_1.default)(event.arguments.userId);
        case 'deleteUser':
            return await (0, deleteUser_1.default)(event.arguments.userId);
        default:
            return null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUF3QztBQUN4Qyw2Q0FBc0M7QUFDdEMsNkNBQXNDO0FBYXRDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQWtCLEVBQUUsRUFBRTtJQUMzQyxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQzFCLEtBQUssWUFBWTtZQUNiLE9BQU8sTUFBTSxJQUFBLG9CQUFVLEVBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxLQUFLLGFBQWE7WUFDZCxPQUFPLE1BQU0sSUFBQSxxQkFBVyxFQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsS0FBSyxZQUFZO1lBQ2IsT0FBTyxNQUFNLElBQUEsb0JBQVUsRUFBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BEO1lBQ0ksT0FBTyxJQUFJLENBQUM7S0FDbkI7QUFDTCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0VXNlckJ5SWQgZnJvbSAnLi9nZXRVc2VyQnlJZCc7XG5pbXBvcnQgY3JlYXRlVXNlciBmcm9tICcuL2NyZWF0ZVVzZXInO1xuaW1wb3J0IGRlbGV0ZVVzZXIgZnJvbSBcIi4vZGVsZXRlVXNlclwiO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxudHlwZSBBcHBTeW5jRXZlbnQgPSB7XG4gICAgaW5mbzoge1xuICAgICAgICBmaWVsZE5hbWU6IHN0cmluZ1xuICAgIH0sXG4gICAgYXJndW1lbnRzOiB7XG4gICAgICAgIHVzZXI6IFVzZXIsXG4gICAgICAgIHVzZXJJZDogbnVtYmVyXG4gICAgfVxufVxuXG5leHBvcnRzLmhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6QXBwU3luY0V2ZW50KSA9PiB7XG4gICAgc3dpdGNoIChldmVudC5pbmZvLmZpZWxkTmFtZSkge1xuICAgICAgICBjYXNlICdjcmVhdGVVc2VyJzpcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjcmVhdGVVc2VyKGV2ZW50LmFyZ3VtZW50cy51c2VyKTtcbiAgICAgICAgY2FzZSAnZ2V0VXNlckJ5SWQnOlxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdldFVzZXJCeUlkKGV2ZW50LmFyZ3VtZW50cy51c2VySWQpO1xuICAgICAgICBjYXNlICdkZWxldGVVc2VyJzpcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkZWxldGVVc2VyKGV2ZW50LmFyZ3VtZW50cy51c2VySWQpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdfQ==