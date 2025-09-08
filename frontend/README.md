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

### `/signup` (User Signup Page)
- **Method:** GET
- **Description:**  
  The signup page for new users.  
  Allows users to create an account by providing their details.
- **Component:** `UserSignUp.jsx`
- **UI Elements:**
  - Uber logo
  - Name, email, password input fields
  - "Sign Up" button
  - Link to login page
  - Copyright notice

### `/captain-signup` (Captain Signup Page)
- **Method:** GET
- **Description:**  
  The signup page for new captains.  
  Allows captains to create an account by providing their details.
- **Component:** `CaptainSignUp.jsx`
- **UI Elements:**
  - Uber logo
  - Name, email, password input fields
  - "Sign Up" button
  - Link to captain login page
  - Copyright notice

### `/captain-login` (Captain Login Page)
- **Method:** GET
- **Description:**  
  The login page for captains.  
  Allows captains to enter their email and password to log in.  
  Includes a link to the captain signup page and an option to log in as a user.
- **Component:** `CaptainLogin.jsx`
- **UI Elements:**
  - Uber logo
  - Email input field
  - Password input field
  - "Login" button
  - "Sign Up" link for new captains
  - "Login As User" button
  - Copyright notice

## Usage

- Visit `/` to start using the app.
- Click "Continue" to go to `/login` and log in as a user.
- New users can sign up at `/signup`.
- Captains can sign up at `/captain-signup` and log in at `/captain-login`.
