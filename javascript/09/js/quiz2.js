var r = document.querySelector("#radius");
var start = document.querySelector("#start");
start.onclick = function(){
    document.querySelector("#round").value = Number(r.value) * 2 * Math.PI;
    document.querySelector("#area").value = Number(r.value) * Number(r.value) * Math.PI;
}