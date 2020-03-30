var res = document.querySelector(".price");
var list = document.querySelectorAll(".checkbx");
var price = 24000;

for(var i = 0;i<list.length;i++){
    list[i].onclick = function(){
        if(this.checked==true){
            price += parseInt(this.value);
        }
        else{
            price -= parseInt(this.value);
        }
        res.value = price + "won";
    }
}