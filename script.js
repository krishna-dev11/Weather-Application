const yourtab = document.querySelector("[yourtab]");
const searchtab = document.querySelector("[searchtab]")
const searchweathercontainer = document.querySelector("[search-weather-container]");

let currenttab = yourtab;
const API_KEY = "c7b412623be14dca4286aa0046a13101";
currenttab.classList.add("dono-tab-piche-ka-style")
// getfromsessionstorage();

function switchtab(newtab)
{
    if(currenttab != newtab)
    {
       currenttab.classList.remove("dono-tab-piche-ka-style");
       currenttab = newtab;
       currenttab.classList.add("dono-tab-piche-ka-style");
    }

    if(!searchweathercontainer.classList.contains("active") )
    
}

yourtab.addEventListener("click", ()=>{
    switchtab(yourtab);
})


searchtab.addEventListener("click", ()=>{
    switchtab(searchtab);
})