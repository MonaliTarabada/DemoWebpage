var extralinks = document.getElementById("extra_added_links");
function onClickLogin(){
  openNav();
  extralinks = document.getElementById("extra_added_links");
  extralinks.style.display = "block";
  window.scrollTo(0,document.body.scrollHeight);
}
  
function openNav() {
    document.getElementById("mySidenav").style.width = "fit-content";
    extralinks.style.display = "none";
} 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    if (document.contains(document.getElementById("sideNavDiv"))) {
      document.getElementById("sideNavDiv").remove();
    }
    window.scrollTo(0,document.body.scrollTop);
  }
