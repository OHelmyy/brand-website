

/**
  ******************************************************************************************************************************
 
 sign in javascript
  */

 function show()
 {
 
 var showpw = document.getElementById('password');
 if (showpw.type == "password") 
   {
   showpw.type = "text";
 } else {
 
   showpw.type = "password";
   
 }
 
 }
 
 function show2()
 {
 
 var showpw = document.getElementById('password2');
 if (showpw.type == "password") 
   {
   showpw.type = "text";
 } else {
 
   showpw.type = "password";
   
 }
 
 }
 function validate1() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var form = document.getElementById('form');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
  
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        let messages = [];
  
        if (email.value.trim().toLowerCase() !== 'amr123@gmail.com') {
            messages.push('Invalid email');
            emailError.innerText = 'Invalid email';
        } else {
            emailError.innerText = '';
        }
  
        
         if (password.value !== 'amr12345') {
            messages.push('Invalid password');
            passwordError.innerText = 'Invalid password';
        } else {
            passwordError.innerText = '';
        }
  
  
        if (messages.length > 0) {
            return false; // Prevent form submission
        }
  
        // If no errors, proceed to the desired action
        window.location.href = "home.html";
    });
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

// Call the validate function to initiate the validation process
validate1();

  



  
/**
  ******************************************************************************************************************************
 
forget password javascript
  */

function validate3() {
  
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
  validate3();
  

  /**
  ******************************************************************************************************************************
 
sign up javascript
  */


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
  
  
  
  
        
        window.location.href = "register.html";
    });
  }
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Call the validate function to initiate the validation process
  validate();




  /**
  ******************************************************************************************************************************
 
cheackout javascript
  */

document.getElementById("cash").addEventListener("change", function() {
  var cashMessage = document.getElementById("cashMessage");
  var visaDetails = document.getElementById("visaDetails");
  if (this.checked) {
    cashMessage.style.display = "block";
    visaDetails.style.display = "none";
  }
});

document.getElementById("card").addEventListener("change", function() {
  var cashMessage = document.getElementById("cashMessage");
  var visaDetails = document.getElementById("visaDetails");
  if (this.checked) {
    cashMessage.style.display = "none";
    visaDetails.style.display = "block";
  }
});

// Function to validate form and handle submission
function validate5() {


  var form = document.getElementById('form');
  var Name = document.getElementById('Name');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var adress = document.getElementById('adress');
  var cname = document.getElementById('cname');
  var ccnum = document.getElementById('ccnum');
  var expmonth = document.getElementById('expmonth');
  var expyear = document.getElementById('expyear');
  var cvv = document.getElementById('cvv');
  var fullNameError = document.getElementById('fullNameError');
  var emailError = document.getElementById('emailError');
  var phoneError = document.getElementById('phoneError');
  var adressError = document.getElementById('adressError');
  var cnameError = document.getElementById('cnameError');
  var ccnumError = document.getElementById('ccnumError');
  var expmonthError = document.getElementById('expmonthError');
  var expyearError = document.getElementById('expyearError');
  var cvvError = document.getElementById('cvvError');

  form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission behavior
      var messages = [];

      


 // Validate payment method
 var cashPayment = document.getElementById('cash').checked;
 var cardPayment = document.getElementById('card').checked;

 if (cashPayment) {

    if (!/^[A-Za-z]+$/.test(Name.value)) {
        messages.push('Name must contain only letters');
        fullNameError.innerText = 'Name must contain only letters';
    } else {
        fullNameError.innerText = '';
    }

    // Validate email
    if (!validateEmail(email.value)) {
        messages.push('Invalid email format');
        emailError.innerText = 'Invalid email format';
    } else {
        emailError.innerText = '';
    }

    // Validate phone
    if (!/^\d{11}$/.test(phone.value)) {
        messages.push('Phone number must be 11 digits');
        phoneError.innerText = 'Phone number must be 11 digits';
    } else {
        phoneError.innerText = '';
    }

    // Validate address
    if (adress.value.trim() === '') {
        messages.push('Address is required');
        adressError.innerText = 'Address is required';
    } else {
        adressError.innerText = '';
    }

    if (messages.length > 0) {
        return false;
    }

    window.location.href = "home.html";
      alert("Your order has been successfully confirmed!");



 } else if (cardPayment) {
     // Set action attribute to the visa page
   
     if (!/^[A-Za-z]+$/.test(Name.value)) {
        messages.push('Name must contain only letters');
        fullNameError.innerText = 'Name must contain only letters';
    } else {
        fullNameError.innerText = '';
    }

    // Validate email
    if (!validateEmail(email.value)) {
        messages.push('Invalid email format');
        emailError.innerText = 'Invalid email format';
    } else {
        emailError.innerText = '';
    }

    // Validate phone
    if (!/^\d{11}$/.test(phone.value)) {
        messages.push('Phone number must be 11 digits');
        phoneError.innerText = 'Phone number must be 11 digits';
    } else {
        phoneError.innerText = '';
    }

    // Validate address
    if (adress.value.trim() === '') {
        messages.push('Address is required');
        adressError.innerText = 'Address is required';
    } else {
        adressError.innerText = '';
    }










      // Validate name on card
      if (!/^[A-Za-z\s]+$/.test(cname.value)) {
          messages.push('Name on card must contain only letters');
          cnameError.innerText = 'Name on card must contain only letters';
      } else {
          cnameError.innerText = '';
      }

      // Validate credit card number
      if (!/^\d{16}$/.test(ccnum.value)) {
          messages.push('Credit card number must be 16 digits');
          ccnumError.innerText = 'Credit card number must be 16 digits';
      } else {
          ccnumError.innerText = '';
      }

      // Validate expiration month
      if (!isValidMonth(expmonth.value.trim())) {
          messages.push('Expiration month is invalid');
          expmonthError.innerText = 'Expiration month is invalid';
      } else {
          expmonthError.innerText = '';
      }

      // Validate expiration year
      if (!isValidYear(expyear.value.trim())) {
          messages.push('Expiration year is invalid or out of range');
          expyearError.innerText = 'Expiration year is invalid or out of range';
      } else {
          expyearError.innerText = '';
      }

      // Validate CVV
      if (!/^\d{3}$/.test(cvv.value)) {
          messages.push('CVV must be 3 digits');
          cvvError.innerText = 'CVV must be 3 digits';
      } else {
          cvvError.innerText = '';
      }

      // If there are validation errors, prevent form submission and display error messages
      if (messages.length > 0) {
          return false;
      }

      // If validation passes, proceed with form submission
      window.location.href = "home.html";
      alert("Your order has been successfully confirmed!");
    }
  });
}

// Function to validate email format
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Function to validate month (1-12)
function isValidMonth(month) {
  var monthNumber = parseInt(month, 10);
  return !isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12;
}

// Function to validate year (2024-2035)
function isValidYear(year) {
  var yearNumber = parseInt(year, 10);
  return !isNaN(yearNumber) && yearNumber >= 2024 && yearNumber <= 2035;
}

// Call the validate function to initiate the validation process
validate5();




  
  