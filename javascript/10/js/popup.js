function openPop(){
    var newWin = window.open("popup.html", " ", "width=400, height=400");
    if(newWin==null){
        alert("팝업을 해제하시오");
    }
}
window.onload = openPop;