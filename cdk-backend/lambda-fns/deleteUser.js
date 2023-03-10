"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
async function deleteUser(userId) {
    try {
        const query = `DELETE FROM User WHERE id = :userId`;
        const result = await db_1.default.query(query, { userId });
        //if there is an item that has been deleted we'll return the userId, so we can do some validation
        if (result.numberOfRecordsUpdated === 1)
            return userId;
        return null;
    }
    catch (err) {
        console.log('MySQL error from deleteUser', err);
        return null;
    }
}
exports.default = deleteUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGV0ZVVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBc0I7QUFDdEIsS0FBSyxVQUFVLFVBQVUsQ0FBQyxNQUFjO0lBQ3BDLElBQUk7UUFDQSxNQUFNLEtBQUssR0FBRyxxQ0FBcUMsQ0FBQztRQUNwRCxNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUMvQyxpR0FBaUc7UUFDakcsSUFBRyxNQUFNLENBQUMsc0JBQXNCLEtBQUssQ0FBQztZQUFFLE9BQU8sTUFBTSxDQUFDO1FBQ3RELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFBQSxPQUFPLEdBQUcsRUFBQztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUM7QUFDRCxrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi9kYic7XG5hc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZDogbnVtYmVyKXtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGBERUxFVEUgRlJPTSBVc2VyIFdIRVJFIGlkID0gOnVzZXJJZGA7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLnF1ZXJ5KHF1ZXJ5LCB7dXNlcklkfSk7XG4gICAgICAgIC8vaWYgdGhlcmUgaXMgYW4gaXRlbSB0aGF0IGhhcyBiZWVuIGRlbGV0ZWQgd2UnbGwgcmV0dXJuIHRoZSB1c2VySWQsIHNvIHdlIGNhbiBkbyBzb21lIHZhbGlkYXRpb25cbiAgICAgICAgaWYocmVzdWx0Lm51bWJlck9mUmVjb3Jkc1VwZGF0ZWQgPT09IDEpIHJldHVybiB1c2VySWQ7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1jYXRjaCAoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coJ015U1FMIGVycm9yIGZyb20gZGVsZXRlVXNlcicsIGVycik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVVzZXI7Il19