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

## Endpoint: `/users/login`

### Description
This endpoint allows an existing user to log in. It validates the input data, checks the credentials, and returns an authentication token and user data if successful.

### Method
`POST`

### Required Data
The request body must include:
- `email` (string): A valid email address.
- `password` (string): The user's password (minimum 6 characters).

### Status Codes
- `200 OK`: Login successful.
- `400 Bad Request`: Validation errors or missing/invalid data.
- `401 Unauthorized`: Invalid email or password.

### Example Request
```json
POST /users/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response
#### Success Response (200 OK)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f1a2b3c4d5e6f7890g1234",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketID": null
  }
}
```

#### Error Response (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Please provide a valid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Error Response (401 Unauthorized)
```json
{
  "message": "Invalid email or password"
}
```

## Endpoint: `/users/profile`

### Description
Returns the authenticated user's profile information. Requires a valid authentication token (JWT) in the cookie or Authorization header.

### Method
`GET`

### Authentication
- Requires JWT token in cookie (`token`) or in header (`Authorization: Bearer <token>`).

### Status Codes
- `200 OK`: Returns user profile.
- `401 Unauthorized`: Missing or invalid token.

### Example Request
```
GET /users/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response
#### Success Response (200 OK)
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
  }
}
```

#### Error Response (401 Unauthorized)
```json
{
  "message": "Unauthorized, token missing"
}
```

---

## Endpoint: `/users/logout`

### Description
Logs out the authenticated user by clearing the authentication cookie and blacklisting the token. Requires a valid authentication token.

### Method
`GET`

### Authentication
- Requires JWT token in cookie (`token`) or in header (`Authorization: Bearer <token>`).

### Status Codes
- `200 OK`: Logout successful.
- `401 Unauthorized`: Missing or invalid token.

### Example Request
```
GET /users/logout
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response
#### Success Response (200 OK)
```json
{
  "message": "Logged out successfully"
}
```

#### Error Response (401 Unauthorized)
```json
{
  "message": "Unauthorized, token missing"
}
```

## Endpoint: `/captains/register`

### Description
This endpoint is used to register a new captain (driver). It validates the input data, hashes the password, and creates a new captain in the database. Upon successful registration, it returns a success message and an authentication token.

### Method
`POST`

### Required Data
The request body must include the following fields:
- `fullName.firstName` (string): The first name of the captain (minimum 3 characters).
- `fullName.lastName` (string): The last name of the captain (minimum 3 characters).
- `email` (string): A valid email address.
- `password` (string): A password (minimum 6 characters).
- `vehicle.color` (string): Vehicle color.
- `vehicle.plate` (string): Vehicle plate number.
- `vehicle.capacity` (integer): Vehicle capacity (minimum 1).
- `vehicle.vehicleType` (string): Vehicle type (`car`, `bike`, `auto`, or `suv`).

### Status Codes
- `201 Created`: Captain registered successfully.
- `400 Bad Request`: Validation errors or missing/invalid data.

### Example Request
```json
POST /captains/register
Content-Type: application/json

{
  "fullName": {
    "firstName": "Ravish",
    "lastName": "Kumar"
  },
  "email": "ravikumar@example.com",
  "password": "Password123",
  "vehicle": {
    "color": "Black",
    "plate": "DL8CAF1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response
#### Success Response (201 Created)
```json
{
  "message": "Captian registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Error Response (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullName.firstName",
      "location": "body"
    },
    {
      "msg": "Vehicle type must be one of car, bike, auto, suv",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```
