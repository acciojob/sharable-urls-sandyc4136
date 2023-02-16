// your code here
var named=document.querySelector('#name');
var form=document.querySelector('form');
var year=document.querySelector('#year');
var h3=document.querySelector('h3');
var btn=document.querySelector('#button');


function sharableURL(event){
	event.preventDefault();
	var h3Element="https://localhost:8080/";
	if(named.value && year.value){
		h3Element += "?name=" + named.value + "&?year=" + year.value;
	}
	else if(!named.value && year.value){
		h3Element += "?year=" + year.value;
	}
	else if(named.value && !year.value){
		h3Element += "?name=" + named.value;
	}
	h3.textContent=h3Element;
}

btn.addEventListener("submit",sharableURL);



btn.addEventListener('click', sharableURL);