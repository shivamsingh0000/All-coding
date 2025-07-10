let number = (document.getElementById("number"));
document.getElementById("button").onclick = function(){
   let text = Number(number.textContent);
   number.textContent = text +1;
}