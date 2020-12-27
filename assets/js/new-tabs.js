$(document).ready(function () {

// onload tab
  activeTab = localStorage.getItem("clickedID");
  document.getElementById(activeTab);
  let mytab = document.getElementById(activeTab)
  mytab.classList.add("active")
  console.log(document.getElementById(activeTab));

  // onload tab content 
  activeCont = localStorage.getItem("content");
  mystr = activeCont.replace('#', '');
  console.log(mystr , "content");
  let myContent = document.getElementById(mystr);
  myContent.classList.add("active")

var nodes = Array.prototype.slice.call( document.getElementsByClassName('stretched-link') ),
Ref = document.getElementById(activeTab);
if (nodes.indexOf( Ref ) > 4){
  console.log("i'm > 4");
  showHideContent()
}
console.log( nodes.indexOf( Ref ) );
});



function showHideContent(){
  $('.show-more').toggleClass('opened');
  $('.hide-me').toggleClass('show-onclick');
}

// click tab and save in localStorage

$(".stretched-link").on("click", function () {
  $('.stretched-link').removeClass('active');

  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('id');
    var href = $(this).attr('href');
  // console.log(id);
   
   

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
  
    localStorage.setItem("clickedID", id);
    localStorage.setItem("content", href);
  
});
 
});