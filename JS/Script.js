window.onscroll = function(){StickyTopNav()};
var headerNav = document.getElementById("Header-Nav");
var headerStiff = headerNav.offsetTop; 
var headerH1 = document.querySelector("#Header-Nav div");
var headerBar = document.querySelector(" #main-nav");
var myLinks = document.querySelector("#myLinks");
  function myFunction() {
          var x = document.getElementById("myLinks");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
        }
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }
  

  function StickyTopNav(){
    if (window.pageYOffset >= headerStiff ) {
      headerNav.style.height="auto";
      headerNav.style.position="sticky";
      headerNav.style.top="0";
      headerNav.style.display="flex"
      headerH1.style.fontSize ="75%";
      headerH1.style.textAlign ="left";
      headerH1.style.marginTop ="20px";
      headerH1.style.marginRight ="10px";
      headerBar.style.margin="0"
      myLinks.style.marginBottom="20px";
    } else{
      headerNav.style.height ="200px"
      headerNav.style.display="block"
      headerH1.style.display ="block";
      headerH1.style.textAlign ="center";
    }
  }
