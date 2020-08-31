    var lot_a=0; lot_b=0;lot_c=0; lot_e=0; lot_f=0; lot_g=0;
    function lottoNum () {
    let lotto = [];


    let i = 0;
    while (i < 6) {
    // let n = Math.ceil(45*Math.random());
    let n = weightRandom();
    if (!sameNum(n)) {
    lotto.push(n);
    i++;
    };
  } ;
    function sameNum(n) {
    for (var i = 0; i < lotto.length; i++) {
    if (n === lotto[i]) {
    var b = 1;
    } else {
    var c = 1;
      }
     }
    if (b > 0) {return true;}
    else {return false;}
    }

    function weightRandom () {
      let primitive_lotto = [];
      for (var i=1; i<=122 ; i++) { primitive_lotto.push(2) };
      for (var i=1; i<=129 ; i++) { primitive_lotto.push(1) };
      for (var i=1; i<=123 ; i++) { primitive_lotto.push(3) };
      for (var i=1; i<=124 ; i++) { primitive_lotto.push(4) };
      for (var i=1; i<=128 ; i++) { primitive_lotto.push(5) };
      for (var i=1; i<=117 ; i++) { primitive_lotto.push(6) };
      for (var i=1; i<=123 ; i++) { primitive_lotto.push(7) };
      for (var i=1; i<=124 ; i++) { primitive_lotto.push(8) };
      for (var i=1; i<=94 ; i++) { primitive_lotto.push(9) };
      for (var i=1; i<=126 ; i++) { primitive_lotto.push(10) };
      for (var i=1; i<=126 ; i++) { primitive_lotto.push(11) };
      for (var i=1; i<=132 ; i++) { primitive_lotto.push(12) };
      for (var i=1; i<=130 ; i++) { primitive_lotto.push(13) };
      for (var i=1; i<=131 ; i++) { primitive_lotto.push(14) };
      for (var i=1; i<=122 ; i++) { primitive_lotto.push(15) };
      for (var i=1; i<=121 ; i++) { primitive_lotto.push(16) };
      for (var i=1; i<=135 ; i++) { primitive_lotto.push(17) };
      for (var i=1; i<=135 ; i++) { primitive_lotto.push(18) };
      for (var i=1; i<=135 ; i++) { primitive_lotto.push(19) };
      for (var i=1; i<=129 ; i++) { primitive_lotto.push(20) };
      for (var i=1; i<=124 ; i++) { primitive_lotto.push(21) };
      for (var i=1; i<=104 ; i++) { primitive_lotto.push(22) };
      for (var i=1; i<=110 ; i++) { primitive_lotto.push(23) };
      for (var i=1; i<=123 ; i++) { primitive_lotto.push(24) };
      for (var i=1; i<=119 ; i++) { primitive_lotto.push(25) };
      for (var i=1; i<=125 ; i++) { primitive_lotto.push(26) };
      for (var i=1; i<=137 ; i++) { primitive_lotto.push(27) };
      for (var i=1; i<=115 ; i++) { primitive_lotto.push(28) };
      for (var i=1; i<=111 ; i++) { primitive_lotto.push(29) };
      for (var i=1; i<=111 ; i++) { primitive_lotto.push(30) };
      for (var i=1; i<=125 ; i++) { primitive_lotto.push(31) };
      for (var i=1; i<=108 ; i++) { primitive_lotto.push(32) };
      for (var i=1; i<=129 ; i++) { primitive_lotto.push(33) };
      for (var i=1; i<=146 ; i++) { primitive_lotto.push(34) };
      for (var i=1; i<=113 ; i++) { primitive_lotto.push(35) };
      for (var i=1; i<=121 ; i++) { primitive_lotto.push(36) };
      for (var i=1; i<=127 ; i++) { primitive_lotto.push(37) };
      for (var i=1; i<=123 ; i++) { primitive_lotto.push(38) };
      for (var i=1; i<=122 ; i++) { primitive_lotto.push(44) };
      for (var i=1; i<=132 ; i++) { primitive_lotto.push(39) };
      for (var i=1; i<=132 ; i++) { primitive_lotto.push(40) };
      for (var i=1; i<=112 ; i++) { primitive_lotto.push(41) };
      for (var i=1; i<=121 ; i++) { primitive_lotto.push(42) };
      for (var i=1; i<=137 ; i++) { primitive_lotto.push(43) };
      for (var i=1; i<=130 ; i++) { primitive_lotto.push(45) };


    let j = Math.ceil(5556*Math.random());

    return primitive_lotto[j];

    };

    let sum = 0;
    for (i = 0; i<6; i++) {
      sum+=lotto[i]
    } ;
    if (sum < 87 || sum > 189) {
      lottoNum();
    };


    lotto.sort(function(a,b){
        return a-b ;});
        
      lot_a=lotto[0];
      lot_b=lotto[1];
      lot_c=lotto[2];
      lot_d=lotto[3];
      lot_e=lotto[4];
      lot_f=lotto[5];


    };



    $(function(){
      $("#go_a").on("click", function(){

        $("#go_a").attr({
          "src" :"images/go_gray.png"
        });
        $("#go_a").off("click");

        $("#a_a").attr({
          "src": "images/maball/m"+lot_a+".gif"
        });
        $("#a_b").attr({
          "src": "images/maball/m"+lot_b+".gif"
        });
        $("#a_c").attr({
          "src": "images/maball/m"+lot_c+".gif"
        });
        $("#a_d").attr({
          "src": "images/maball/m"+lot_d+".gif"
        });
        $("#a_e").attr({
          "src": "images/maball/m"+lot_e+".gif"
        });
        $("#a_f").attr({
          "src": "images/maball/m"+lot_f+".gif"
        });
      });

      $("#go_b").on("click", function(){

        $("#go_b").attr({
          "src" :"images/go_gray.png"
        });
        $("#go_b").off("click");

        $("#b_a").attr({
          "src": "images/mbball/mb"+lot_a+".gif"
        });
        $("#b_b").attr({
          "src": "images/mbball/mb"+lot_b+".gif"
        });
        $("#b_c").attr({
          "src": "images/mbball/mb"+lot_c+".gif"
        });
        $("#b_d").attr({
          "src": "images/mbball/mb"+lot_d+".gif"
        });
        $("#b_e").attr({
          "src": "images/mbball/mb"+lot_e+".gif"
        });
        $("#b_f").attr({
          "src": "images/mbball/mb"+lot_f+".gif"
        });
      });

      $("#go_c").on("click", function(){

        $("#go_c").attr({
          "src" :"images/go_gray.png"
        });
        $("#go_c").off("click");

        $("#c_a").attr({
          "src": "images/mcball/mc"+lot_a+".gif"
        });
        $("#c_b").attr({
          "src": "images/mcball/mc"+lot_b+".gif"
        });
        $("#c_c").attr({
          "src": "images/mcball/mc"+lot_c+".gif"
        });
        $("#c_d").attr({
          "src": "images/mcball/mc"+lot_d+".gif"
        });
        $("#c_e").attr({
          "src": "images/mcball/mc"+lot_e+".gif"
        });
        $("#c_f").attr({
          "src": "images/mcball/mc"+lot_f+".gif"
        });
      });

      $("#go_d").on("click", function(){

        $("#go_d").attr({
          "src" :"images/go_gray.png"
        });
        $("#go_d").off("click");

        $("#d_a").attr({
          "src": "images/mdball/m"+lot_a+".gif"
        });
        $("#d_b").attr({
          "src": "images/mdball/m"+lot_b+".gif"
        });
        $("#d_c").attr({
          "src": "images/mdball/m"+lot_c+".gif"
        });
        $("#d_d").attr({
          "src": "images/mdball/m"+lot_d+".gif"
        });
        $("#d_e").attr({
          "src": "images/mdball/m"+lot_e+".gif"
        });
        $("#d_f").attr({
          "src": "images/mdball/m"+lot_f+".gif"
        });
      });

      $("#go_e").on("click", function(){

        $("#go_e").attr({
          "src" :"images/go_gray.png"
        });
        $("#go_e").off("click");

        $("#e_a").attr({
          "src": "images/meball/m"+lot_a+".gif"
        });
        $("#e_b").attr({
          "src": "images/meball/m"+lot_b+".gif"
        });
        $("#e_c").attr({
          "src": "images/meball/m"+lot_c+".gif"
        });
        $("#e_d").attr({
          "src": "images/meball/m"+lot_d+".gif"
        });
        $("#e_e").attr({
          "src": "images/meball/m"+lot_e+".gif"
        });
        $("#e_f").attr({
          "src": "images/meball/m"+lot_f+".gif"
        });
      });


    });

    function re(){
      location.reload();
    };
