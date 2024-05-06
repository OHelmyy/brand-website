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