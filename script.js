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

let years = now.getFullYear() - dob.getFullYear();
let months = now.getMonth() - dob.getMonth();
let days = now.getDate() - dob.getDate();
let hours = now.getHours() - dob.getHours();
let minutes = now.getMinutes() - dob.getMinutes();

if(minutes < 0){
minutes += 60;
hours--;
}

if(hours < 0){
hours += 24;
days--;
}

if(days < 0){
months--;
let prevMonthDays =
new Date(now.getFullYear(), now.getMonth(), 0).getDate();
days += prevMonthDays;
}

if(months < 0){
months += 12;
years--;
}

ageResult.innerText =
`${years} Years ${months} Months ${days} Days ${minutes} Minutes`;
}
