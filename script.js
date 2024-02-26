const points = [
  "Maybe",
  "No",
  "Yes",
  "Most likely",
  "Better not tell you now",
  "Ask again later"
];
document.getElementById("response").innerHTML = points;  

function myFunction() {
points.sort(function(a, b){return 0.5 - Math.random()});
document.getElementById("response").innerHTML = points[0];
document.getElementById("response").style.fontSize="20px";
setTimeout(timeup, 4000);

function timeup(){
  document.getElementById("response").innerHTML="8";
  document.getElementById("response").style.fontSize="135px";
  document.getElementById("clear").value="";

}
}