
var j=0;
var i=0;
var arr=[1,2,3,4];
function evnt(){
 j=j+1;
 i=arr[(j%4)];
  for(let k=1;k<=4;k++){
    if(k==i){
let s=document.getElementById("s"+k);
console.log(s+"good");
s.style.display = 'contents';
    }
    else{
      let s=document.getElementById("s"+k);
      console.log(s+"bad");
      s.style.display = 'none';
 }
}

 console.log(i);
}
function evet(){

  j=(j-1);
  if(j<0){j=3;}
  i=arr[j%4];
  for(let k=1;k<=4;k++){
    if(k==i){
let s=document.getElementById("s"+k);
console.log(s+"good");
s.style.display = 'contents';
    }
    else{
      let s=document.getElementById("s"+k);
      console.log(s+"bad");
      s.style.display = 'none';
 }
 
}

 console.log(i);
}
var sel=0;
function sele(){
  const bar=document.getElementById("bar");
  if(sel%2==0){

bar.style.display="block";
sel++;
  }
  else{
    bar.style.display="none";
    sel++;
  }
  console.log("value is "+sel);
}