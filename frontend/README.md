# Uber Clone Frontend

## Endpoints

### `/` (Home Page)
- **Method:** GET
- **Description:**  
  The home page of the Uber Clone frontend.  
  Displays the Uber logo and a "Continue" button.  
  The background features a cityscape image.  
  Clicking "Continue" navigates the user to the `/login` page.
- **Component:** `Home.jsx`
- **UI Elements:**
  - Uber logo
  - "Continue" button (links to `/login`)
  - Background image

### `/login` (User Login Page)
- **Method:** GET
- **Description:**  
  The login page for users.  
  Allows users to enter their email and password to log in.  
  Includes a link to the signup page for new users and an option to log in as a captain.
- **Component:** `UserLogin.jsx`
- **UI Elements:**
  - Uber logo
  - Email input field
  - Password input field
  - "Login" button
  - "Sign Up" link for new users
  - "Login As Captain" button
  - Copyright notice

## Usage

- Visit `/` to start using the app.
- Click "Continue" to go to `/login` and log in as a user.
