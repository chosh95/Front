var nameInfo = document.querySelector("#billingName")  // 주문 정보 - 이름
var telInfo = document.querySelector("#billingTel");  // 주문 정보 - 전화번호  

var check = document.querySelector("#shippingInfo");
check.addEventListener("click", function(){
	if(check.checked==true){
		document.querySelector("#shippingName").value = 
			nameInfo.value;
		document.querySelector("#shippingTel").value = 
			telInfo.value;
	}
});