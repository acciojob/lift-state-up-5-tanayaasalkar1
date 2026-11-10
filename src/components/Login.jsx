import React from 'react'

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
    
  return (
    <div>
        {isLoggedIn ? (
            <h2>Welcome, User!</h2>
        ) : (
            <form onSubmit={(e) => {    
            e.preventDefault();
            const formData = new FormData(e.target);
            const name = formData.get("name");
            const password = formData.get("password");

            // Simple login logic (replace with actual authentication)
            if (name && password) {
                setIsLoggedIn(true);
            }
        }}>
            <label>Name:</label>
            <input type="text" name="name"/>

            <label>Password:</label>
            <input type="password" name="password"/>

            <button type="submit">Login</button>
        </form>
        )}
       
    </div>
  )
}

export default Login