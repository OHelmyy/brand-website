function validate() {
  
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('password2');
    var form = document.getElementById('form');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
  
  
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        let messages = [];
  
        
  
        if (email.value.trim().toLowerCase() !== 'amr123@gmail.com') {
          messages.push('Invalid email');
          emailError.innerText = 'Invalid email';
      } else {
          emailError.innerText = '';
      }
       
  
        if (password.value.length <= 6) {
            messages.push('Password must be longer than 6 characters');
            passwordError.innerText = 'Password must be longer than 6 characters';
        } else if (password.value.length >= 10) {
            messages.push('Password must be less than 10 characters');
            passwordError.innerText = 'Password must be less than 10 characters';
        } 
         else {
            passwordError.innerText = '';
        }
  
        if (confirmPassword.value !== password.value) {
            messages.push('Passwords do not match');
            confirmPasswordError.innerText = 'Passwords do not match';
        } else {
            confirmPasswordError.innerText = '';
        }
  
        if (messages.length > 0) {
            return false; // Prevent form submission
        }
  
        // If no errors, proceed to the desired action
        window.location.href = "register.html";
        alert("Your new password has been successfully updated!");
  
    });
  }
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Call the validate function to initiate the validation process
  validate();
  