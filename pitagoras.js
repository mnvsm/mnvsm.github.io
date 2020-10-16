var hip = 0;
var catO = 0;
var catA = 0;
var rHip = 0;
var rCatO = 0;
var rCatA = 0;
var uni;

function CatOp(cat){
  if(cat >= 0) catO = cat;
  else catO = 0;
}

function CatAd(cat){
  if(cat >= 0) catA = cat;
  else catA = 0;
}
function Hip(h){
  if(h >= 0) hip = h;
  else hip = 0;
}

function Uni(u){
  uni =" "+u;
}

function Exibir(validade){
  if((uni == null)||(uni == " ")) uni = " VAI TOMAR NO CU";
  console.log(uni);
  if(validade == false){
    rHip = rCatO = rCatA = "O Triângulo não existe ou não foi possível calcular o ";
  }

  document.getElementById("resultHip").innerHTML  = rHip + uni;
  document.getElementById("resultCatO").innerHTML  = rCatO + uni;
  document.getElementById("resultCatA").innerHTML  = rCatA + uni;
  
}

function Calcular(){
  let validade = true;
  rHip = hip;
  rCatO = catO;
  rCatA = catA;
  console.log("hip: ",hip);
  console.log("catO: ",catO);
  console.log("catA: ",catA);
  if(rHip == 0){
    rHip = Math.sqrt(Math.pow(rCatO,2) + Math.pow(rCatA,2));
    console.log("hip: ",rHip);
  }else if(rCatO == 0){
    rCatO = Math.sqrt(Math.pow(rHip,2) - Math.pow(rCatA,2));
  }else if(rCatA == 0){
    rCatA = Math.sqrt(Math.pow(rHip,2) - Math.pow(rCatO,2));
  }else{
    validade = false;
  }

  if((rHip == 0)||(rCatO == 0)||(rCatA == 0)){
    validade = false;
  }
  
  Exibir(validade);
}

