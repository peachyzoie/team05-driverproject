"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.createUser = void 0;
exports.createUser = `
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      first_name
      last_name
      email
      user_type
    }
  }
`;
exports.deleteUser = `
  mutation DeleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      id
      first_name
      last_name
      email
      user_type
    }
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXV0YXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLDJEQUEyRDs7O0FBRTlDLFFBQUEsVUFBVSxHQUFpQjs7Ozs7Ozs7OztDQVV2QyxDQUFDO0FBQ1csUUFBQSxVQUFVLEdBQWlCOzs7Ozs7Ozs7O0NBVXZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIHRoaXMgaXMgYW4gYXV0byBnZW5lcmF0ZWQgZmlsZS4gVGhpcyB3aWxsIGJlIG92ZXJ3cml0dGVuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gLyogR3JhcGhRTCAqLyBgXG4gIG11dGF0aW9uIENyZWF0ZVVzZXIoJHVzZXI6IENyZWF0ZVVzZXJJbnB1dCEpIHtcbiAgICBjcmVhdGVVc2VyKHVzZXI6ICR1c2VyKSB7XG4gICAgICBpZFxuICAgICAgZmlyc3RfbmFtZVxuICAgICAgbGFzdF9uYW1lXG4gICAgICBlbWFpbFxuICAgICAgdXNlcl90eXBlXG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSAvKiBHcmFwaFFMICovIGBcbiAgbXV0YXRpb24gRGVsZXRlVXNlcigkdXNlcklkOiBJRCEpIHtcbiAgICBkZWxldGVVc2VyKHVzZXJJZDogJHVzZXJJZCkge1xuICAgICAgaWRcbiAgICAgIGZpcnN0X25hbWVcbiAgICAgIGxhc3RfbmFtZVxuICAgICAgZW1haWxcbiAgICAgIHVzZXJfdHlwZVxuICAgIH1cbiAgfVxuYDtcbiJdfQ==