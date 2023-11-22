
function displayer(fgv)
{
    let sz = document.getElementById("display");
    console.log(sz + "szoveg");
    sz.innerHTML = `<div class=" size black"></div>`;
    fgv();
    sz.innerHTML += `<div class= "size yellow"></div>`;


}

function SyncFunction()
{
    let sz = document.getElementById("display");
    sz.innerHTML +=`<div class= "size red"></div>`;
}




function AsyncFunction() {
    setTimeout(function() { 
        document.getElementById("display").innerHTML += `<div class= "size red"></div>`; 
    }
        , 2000);
  
}



  



