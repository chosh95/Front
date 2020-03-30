var userid = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userid.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId(){
    if(userid.value.length<4 || userid.value.length>15){
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        userid.select();
    }
}

function checkPw(){
    if(pw1.value.length<8){
        alert("put more than 8 words");
        pw1.value = "";
        pw1.focus();
    }
}

function comparePw(){
    if(pw1.value != pw2.value){
        alert("pw1 and pw2 should be same");
        pw2.value="";
        pw2.focus();
    }
}