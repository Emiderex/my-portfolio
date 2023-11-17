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