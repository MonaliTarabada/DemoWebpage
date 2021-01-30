function onClickLogin(){
  openNav();
  if (document.contains(document.getElementById("sideNavDiv"))) {
    document.getElementById("sideNavDiv").remove();
  }
    var sideDiv = document.createElement("div");
    sideDiv.id = "sideNavDiv"
    var sideDivLink1 = document.createElement("a");
    sideDivLink1.id = "newLink1";
    sideDivLink1.href =  '#';
    sideDivLink1.innerHTML = "Loans";
    var sideDivLink2 = document.createElement("a");
    sideDivLink2.id = "newLink2";
    sideDivLink2.href =  '#';
    sideDivLink2.innerHTML = "Finance";
    var sideDivLink3 = document.createElement("a");
    sideDivLink3.id = "newLink3";
    sideDivLink3.href =  '#';
    sideDivLink3.innerHTML = "Debt";
    sideDiv.append(sideDivLink1);
    sideDiv.append(sideDivLink2);
    sideDiv.append(sideDivLink3);
    document.getElementById("itemList").prepend(sideDiv);
    window.scrollTo(0,document.body.scrollHeight);

}
  
function openNav() {
    document.getElementById("mySidenav").style.width = "fit-content";
}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    if (document.contains(document.getElementById("sideNavDiv"))) {
      document.getElementById("sideNavDiv").remove();
    }
    window.scrollTo(0,document.body.scrollTop);
  }
