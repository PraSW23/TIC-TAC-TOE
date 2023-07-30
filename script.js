$(document).ready(() => {
  var count = 0, match = 1;
    win = false;
  var x = [], y = [], visited=[];
  var strike = [];

  var pos = [
    ["d1", "d2", "d3"],
    ["d4", "d5", "d6"],
    ["d7", "d8", "d9"],

    ["d1", "d4", "d7"],
    ["d2", "d5", "d8"],
    ["d3", "d6", "d9"],

    ["d1", "d5", "d9"],
    ["d3", "d5", "d7"],
  ];

  $("#div2 > div").click(function () {
    //alert("clicked");
    checking(this);
  });

  $("#b1").click(function(){
  //  alert("button clicked");
    visited = [];
    //checking(this);
    x = [];
    y = [];
    strike = [];
    win = false;
    match++;
    if(match%2==0){
      count = 1;
    }
    else{
      count = 0;
    }
  $(".X").remove();
  $(".o").remove();
  $("#strike").css({
    "width":"0%",
    "height": "0%",
    "transform": "rotate(0deg)",
    "top":"0px"

   });
   $("#result").css({
    "visibility":"hidden"
   });

  })
  

  function check(array) {
    //console.log("in check", array);
    for (let i = 0; i < 8; i++) {
      let con = 0;
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < array.length; k++) {
          if (pos[i][j] == array[k]) {
            con++;
            //console.log("con = ", con);
          }
          if (con == 3) {
            //alert("winner");
            strike = pos[i];
            return true;
          }
        }
      }
    }
    return false;
  }

  function strike_it() {
    //console.log("strike = ",strike);
    A = [
      ["d1", "d2", "d3"],
      ["d4", "d5", "d6"],
      ["d7", "d8", "d9"],
    ];
    B = [
      ["d1", "d4", "d7"],
      ["d2", "d5", "d8"],
      ["d3", "d6", "d9"],
    ];
    C = [
      ["d1", "d5", "d9"],
      ["d3", "d5", "d7"],
    ];

    if(C.some(subArray => JSON.stringify(subArray) === JSON.stringify(strike))){
      if(strike[0]==="d3"){
     $("#strike").css({
      "transform": "rotate(45deg)",
      "height": "130%",
      "width": "10px",
      "top":"-90px"
     });
    }else{
      $("#strike").css({
        "transform": "rotate(-45deg)",
        "height": "130%",
        "width": "10px",
        "top":"-90px"
       });
    }

    //console.log("c");
    }else if(A.some(subArray => JSON.stringify(subArray) === JSON.stringify(strike))){

      if (strike[0]==="d1") {
        $("#strike").css({
          "height": "10px",
          "width":"600px",
          "top":"100px"
         });
        
      }else if(strike[0]==="d4"){
        $("#strike").css({
          "height": "10px",
          "width":"600px",
          "top":"300px"
         });

      }else{
        $("#strike").css({
          "height": "10px",
          "width":"600px",
          "top":"500px"
         });
      }
      
      //console.log("a");

    }else{
      if(strike[0]==="d1"){
        $("#strike").css({
          "height": "100%",
          "transform": "translateX(-210px)",
          "width": "10px"
         });
      }else if(strike[0]==="d2"){
        $("#strike").css({
          "height": "100%",
          "width": "10px"
         });
      }else{
        $("#strike").css({
          "height": "100%",
          "transform": "translateX(205px)",
          "width": "10px"
         });

      }
      //console.log("b");

    }


  }

  function prom(){
    //alert("in promp");

    $("#result").css({
      "visibility":"visible"
    });
  }

  function checking(ele){
    if(visited.includes($(ele).attr("id"))){
      alert("Not Allowed");
      return;
    }else{
    doing(ele);
    visited.push(($(ele).attr("id")));
    }
    
  }

  function doing(tagg){
    //console.log("in doing ",tagg);
    if (win === true) {
      return;
    } else if (count % 2 == 0) {
      var ele1 = $("<div>", { class: "x1" });
      var ele2 = $("<div>", { class: "x2" });
      var ele = $("<div>", { class: "X" });
      $(ele).append(ele1, ele2);
      x.push($(tagg).attr("id"));
      if (check(x)) {
        //alert("X wins");
        win = true;
        $("#h1").text("X WiNS");
        
      }
    } else {
      var ele = $("<div>", { class: "o" });
      y.push($(tagg).attr("id"));
      if (check(y)) {
        //alert("O wins");
        win = true;
        $("#h1").text("O WiNS");
      }
    }
   
    $(tagg).append(ele); 
   // $(tagg).unbind();
   
    //console.log(y);
    if (win) {
      strike_it();
      prom();
      return;
    }else if (match%2!=0) {
      if(count===8){
        //alert("match drawn");
        $("#h1").text("MATCH drAwn");
      prom();
        return;
      }
    }else {
      if(count===9){
        //alert("match drawn");
        $("#h1").text("MATCH drAwn");
      prom();
        return;
      }
    }

    count++;
  }

});
