# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns the created user object and an authentication token.

### Method
`POST`

### Required Data
The request body must include the following fields:
- `firstName` (string): The first name of the user (minimum 3 characters).
- `lastName` (string): The last name of the user (minimum 3 characters).
- `email` (string): A valid email address.
- `password` (string): A password (minimum 6 characters).

### Status Codes
- `201 Created`: User registered successfully.
- `400 Bad Request`: Validation errors or missing/invalid data.

### Example Request
```json
POST /users/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response
#### Success Response (201 Created)
```json
{
  "user": {
    "_id": "64f1a2b3c4d5e6f7890g1234",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketID": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Error Response (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "firstName",
      "location": "body"
    },
    {
      "msg": "Please provide a valid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```
