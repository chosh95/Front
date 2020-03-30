var a = parseInt(prompt("put num 1"));
var b = parseInt(prompt("put num 2 "));
fun(a,b);
function fun(x, y){
    if(x>=y) alert(`${x}가 ${y}보다 큽니다.`);
    else alert(`${y}가 ${x}보다 큽니다.`)
}