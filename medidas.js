 function LenghtConverter(m){
    document.getElementById("feet").value=m*3.2808;
    document.getElementById("inch").value=m*39.3701;
    document.getElementById("km").value=m/1000;
    document.getElementById("hm").value=m/100;
    document.getElementById("dam").value=m/10;
    document.getElementById("meter").value=m;
    document.getElementById("dm").value=m*10;
    document.getElementById("cm").value=m*100;
    document.getElementById("mm").value=m*1000;
  }
  
  function FeetToMeter(valNum) {
    LenghtConverter(valNum/3.2808);
  }

  function InchToMeter(valNum) {
    LenghtConverter(valNum/39.3701);
  }

  function KmToMeter(valNum) {
    LenghtConverter(valNum*1000);
  }

  function HmToMeter(valNum) {
    LenghtConverter(valNum*100);
  }

  function DamToMeter(valNum) {
    LenghtConverter(valNum*10);
  }

  function DmToMeter(valNum) {
    LenghtConverter(valNum/10);
  }


  function CmToMeter(valNum) {
    LenghtConverter(valNum/100);
  }

  function MmToMeter(valNum) {
    LenghtConverter(valNum/1000);
  }