  function myFunction() {
          var x = document.getElementById("myLinks");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
        }
  /*function Functionnew() {
    var mySidenav= document.getElementById("mySidenav")
    var y = document.getElementById("HTML-nav");
    var htmlNav= document.getElementById("ires-aside");
    var gridCont = document.querySelector(".grid-cont");
    var tableRemove = document.getElementById("table-remove");
    if (mySidenav.style.display === "block") {
      
      y.style.display = "none";
      mySidenav.style.display="none"
      gridCont.style.gridTemplateColumns="100%";
    } else {
      mySidenav.style.display = "block"; 
     mySidenav.style.height="100%";
     gridCont.style.gridTemplateColumns="40% 60%";
     y.style.display="block";
     tableRemove.style.display="none";
     y.style.height='100%';
     y.style.margin="-14px";
     y.style.fontSize="100%";
     //tableRemove.style.display="none";
    }
  }*/
  /*function Createsidenav(){
    var mainContent = document.getElementsByClassName("HTML-nav");
    var gridCont = document.querySelector(".grid-cont");
    var SideNav = document.getElementById("mySidenav");
    var htmlNav= document.getElementById("ires-aside");
    console.log(SideNav)
  }*/
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   // document.getElementById("main").style.marginLeft= "1em";
    document.body.style.backgroundColor = "white";
  }
