function append(v){
display.value += v;
}

function clearDisplay(){
display.value="";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){
try{
display.value = eval(display.value);
}catch{
alert("Invalid input");
}
}

function toggleAge(){
let p=document.getElementById("agePanel");
p.style.maxHeight = p.style.maxHeight ? null : "200px";
}

function findAge(){
let dob=new Date(document.getElementById("dob").value);
let now=new Date();

if(!dob.getTime()){
ageResult.innerText="Enter valid DOB";
return;
}

let diff=now-dob;

let days=Math.floor(diff/(1000*60*60*24));
let years=Math.floor(days/365);
let minutes=Math.floor(diff/(1000*60));

ageResult.innerText=
`${years} years • ${days} days • ${minutes} minutes`;
}