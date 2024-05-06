function openPage(pageName) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    
    
}
// -------------------------------------------------------------------------
  function showAddUser() {
    var addWindow = document.getElementById('AddUser');
    addWindow.style.display = 'block';
  }
function hideAddWindow() {
    var addWindow = document.getElementById('AddUser');
    addWindow.style.display = 'none';
}


function showEditUser() {
  var addWindow = document.getElementById('EditUser');
  addWindow.style.display = 'block';
}
function hideEditWindow() {
  var addWindow = document.getElementById('EditUser');
  addWindow.style.display = 'none';
}
//--------------------------------------------------------------------------
function logout() {
  alert("Logout successful!");
  window.location.href = "register.html"; 
}
//--------------------------------------------------------------------------
function showAddProduct() {
  var addWindow = document.getElementById('AddProduct');
  addWindow.style.display = 'block';
}
function hidePAddWindow() {
  var addWindow = document.getElementById('AddProduct');
  addWindow.style.display = 'none';
}


function showEditProduct() {
var addWindow = document.getElementById('EditProduct');
addWindow.style.display = 'block';
}
function hidePEditWindow() {
var addWindow = document.getElementById('EditProduct');
addWindow.style.display = 'none';
}

//--------------------------------------------------------------------------



// function addInput() {
//     var inputText = document.getElementById('input-text').value;
//     // Do something with the input value (e.g., store it, display it, etc.)
//     console.log('Input value:', inputText);

//     hideAddWindow();
// }



  function showAlert(){
     confirm('ARE YOU SURE YOU WANT TO DELETE THE ITEM');
     }
     
  
  
  //


  function addInput() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var usernameError = document.getElementById('usernameError');
    var phoneError = document.getElementById('phoneError');
    var addressError = document.getElementById('addressError');

    var err = true;

    if(firstName == "") {
        firstNameError.innerHTML = " first name is Required";
        err = false;
    } else if(!/^[a-zA-Z\s]+$/.test(firstName)) {
        firstNameError.innerHTML = "Please enter a valid first name";
        err = false;
    } else {
        firstNameError.innerHTML = "";
    }

    if(lastName == "") {
        lastNameError.innerHTML = "last name is required";
        err = false;
    } else if(!/^[a-zA-Z\s]+$/.test(lastName)) {
        lastNameError.innerHTML = "Please enter a valid last name";
        err = false;
    } else {
        lastNameError.innerHTML = "";
    }

    if(email == "") {
        emailError.innerHTML = " email is required";
        err = false;
    } else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        emailError.innerHTML = "Please enter a valid email";
        err = false;
    } else {
        emailError.innerHTML = "";
    }

    if(password == "" ){
        passwordError.innerHTML = "Password Is Required";
        err = false;
    } else {
        passwordError.innerHTML = "";
    }

    if(username == "" ){
        usernameError.innerHTML = "username Is Required";
        err = false;
    } else {
        usernameError.innerHTML = "";
    }

    if(phone == ""){
        phoneError.innerHTML = " phone number Is Required";
        err = false;
    } else {
        phoneError.innerHTML = "";
    }

    if(address == ""){
        addressError.innerHTML = " address is required";
        err = false;
    } else {
        addressError.innerHTML = "";
    }

    return err;
}
