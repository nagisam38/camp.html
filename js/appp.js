
$(function () {


  $(".ycard").on("click", function () {
   
    let number = Math.ceil(Math.random() * 6);
   
    let view =" ";
    if (number === 1) {
      view =
        "「人はパンだけで生きるものではない。神の口から出る一つ一つの言葉で生きる。」（マタイ４．４）";
    } else if (number === 2) {
      view =
        "「悲しむ人々は、幸いである、その人たちは慰められる。」（マタイ５．４）";
    } else if (number === 3) {
      view =
        "「一粒の麦は、地に落ちて死ななければ、一粒のままである。だが、死ねば、多くの実を結ぶ。」（ヨハネ１２・２４）";
    } else if (number === 4) {
      view =
        "「わたしがあなたがたを愛したように、互いに愛し合いなさい。これがわたしの掟である。」（ヨハネ１５・１２）";
    } else if (number === 5) {
      view =
        "「憐れみ深い人々は、幸いである、その人たちは憐れみを受ける。」（マタイ５・７）";
    } else if (number === 6) {
      view =
        "「人にしてもらいたいと思うことは何でも、あなた方も人にしなさい。」（マタイ７・１２）";
    }
    $(".miko").html(view);

  });

   $(".ycard").on("click", function () {
     $(".modal").fadeIn();
     return false;
   });
   $(".close , .mbg").on("click", function () {
     $(".modal").fadeOut();
     return false;
   });
  
});

