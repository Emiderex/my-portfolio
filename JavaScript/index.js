var infotabs = document.getElementsByClassName("info-tabs");
var tabinfos = document.getElementsByClassName("tab-infos");

function opentab(tabname){
    for(infotab of infotabs){
        infotab.classList.remove("active");
    }
    for(tabinfo of tabinfos){
        tabinfo.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}