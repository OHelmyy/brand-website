
// USER PROFILE JS-------------------------------------------------------
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


//   SIGN IN JS--------------------------------------------------------------------

  function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email !== "amr123@gmail.com" || password !== "1234") {
        alert("Invalid email or password. Please try again.");
        return false;
    } else {
        // Redirect to the home page
        window.location.href = "home.html";
        return false; // Prevent form submission
    }
}
function changeIfSign(){

    

}
// Home page js-----------------------------------------------------------------------
var myIndex = 0;
function slider() {
  var images = document.getElementsByClassName("mySlides");
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  if (myIndex > images.length - 1) {
    myIndex = 0;
  }
  images[myIndex].style.display = "flex";
  myIndex++;
  setTimeout(slider, 5000); // Change image every 5 seconds
}
// go to shop function
function goToShop() {
    window.location.href = "shop.html"; // Replace "shop.html" with the actual URL of your shop page
  }
  function openCart() {
document.getElementById("myCart").style.width = "30rem";
}


function closeCart() {
document.getElementById("myCart").style.width = "0";
}

//java script bta3 el side nav bta3et el account
function openAcc() {
document.getElementById("myAccount").style.width = "30rem";
}

/* Set the width of the side navigation to 0 */
function closeAcc() {
document.getElementById("myAccount").style.width = "0";
}
