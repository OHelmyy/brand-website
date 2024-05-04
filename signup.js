function validate() {
    var Name = document.getElementById('Name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('password2');
    var form = document.getElementById('form');
    var fullNameError = document.getElementById('fullNameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    var phone = document.getElementById('phone');
    var phoneError = document.getElementById('phoneError');
    var checkbox = document.getElementById('check');
    var termsError = document.getElementById('termsError');
  
  
  
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        let messages = [];
  
        if (!/^[A-Za-z]+$/.test(Name.value)) {
          messages.push('Name must contain only letters');
          fullNameError.innerText = 'Name must contain only letters';
        } else {
          fullNameError.innerText = '';
        }
  
        if (!validateEmail(email.value)) {
            messages.push('Invalid email format');
            emailError.innerText = 'Invalid email format';
        } else {
            emailError.innerText = '';
        }
  
        if (!/^\d{11}$/.test(phone.value)) {
          messages.push('Phone number must be 11 digits');
          phoneError.innerText = 'Phone number must be 11 digits';
        } else {
          phoneError.innerText = '';
        }
  
  
  
        if (!checkbox.checked) {
          messages.push('Please agree to the terms and conditions');
          termsError.innerText = 'Please agree to the terms and conditions';
      } else {
          termsError.innerText = '';
      }
  
  
  
  
  
  
  
  
        if (password.value.length <= 6) {
            messages.push('Password must be longer than 6 characters');
            passwordError.innerText = 'Password must be longer than 6 characters';
        } else if (password.value.length >= 12) {
            messages.push('Password must be less than 12 characters');
            passwordError.innerText = 'Password must be less than 12 characters';
        } else {
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
  
  
  
  
        
        window.location.href = "home.html";
        alert("Your new Account has been successfully updated!");

    });
  }
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Call the validate function to initiate the validation process
  validate();
  