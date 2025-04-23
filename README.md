# Form validation and Routing (React)   - [Preview](https://gokul-cp0.github.io/Validation-and-Router/) 👆


  This is a basic React web app that shows how simple user login and signup can work using only the frontend. It includes three pages: Sign Up, Login, and Home.
When users sign up, their details are checked for basic validation. The app uses useNavigate from React Router to move between pages and pass user data — no backend or database is used. It's mainly for learning how form handling and page navigation work in React.
The Home page can only be accessed if the user enters the correct login details, making it a simple example of client-side authentication.
<br></br>
## Technologies Used

- React JS
- React Router DOM
- CSS
- Bootstrap
<br></br>
## How It Works

1. **Sign Up Page:**
   - User enters name, username, email, and password.
   - Basic validation checks are applied.
   - If valid, data is passed to the Login page using `useNavigate` state.

2. **Login Page:**
   - User enters the previously registered username and password.
   - The entered credentials are compared with the signup data from the state.
   - If matched, user is navigated to the Home page.

3. **Home Page:**
   - A simple welcome page shown only after successful login.
