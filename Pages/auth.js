document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    window.signup = (event) => {
      event.preventDefault();
      const name = document.getElementById('Name').value;
      const userName = document.getElementById('UserName').value;
      const password = document.getElementById('Password').value;
      const email = document.getElementById('Email').value;
  
      const user = { name, userName, password, email };
  
      if (users.some(user => user.userName === userName)) {
        alert('Username already exists.');
      } else {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully.');
        window.location.href = './Sign_in.html';
      }
    };
  
    window.login = (event) => {
      event.preventDefault();
      const userName = document.getElementById('UserName').value;
      const password = document.getElementById('Password').value;
  
      const user = users.find(user => user.userName === userName && user.password === password);
  
      if (user) {
        alert('Login successful.');
        // Redirect or handle logged-in state
        window.location.href = './Menu.html';
      } else {
        alert('Invalid username or password.');
      }
    };
  });
  