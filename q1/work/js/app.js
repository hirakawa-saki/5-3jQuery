'use strict';

$(function () {
  $("#q1").css("color", "yellow");
  // ボタンq1をIDで取得。ページを読み込んだ時に文字の色を黄色に変化させる。
  $("#q2").on("click", function () { $(this).css("background", "blue") });
  // ボタンq2をIDで取得。thisは#q2を代入し、ボタンをクリックした時ボタンを青く変化させる。
  $("#q3").on("click", function () {
    $(this).fadeOut(3000)
  });
  // ボタンq3をIDで取得。thisに#q3を代入し、fadeoutに3000を指定することで3秒かけてフェードアウトさせる。
  $("#q4").on("click", function () {
    $(this).addClass("large")
  });
  // ボタンq4をIDで取得。thisに#q4を代入し、addClassでlargeタグを新たに追加してボタンを大きくしている。
  $("#q5").on("click", function () {
    $(this).append("テキスト追加されます")
  });
  $("#q5").on("click", function () {
    $(this).before("前に増えます")
  });
  $("#q5").on("click", function () {
    $(this).after("後ろに増えます")
  });
  // ボタンq5をIDで取得。thisに#q5を代入し、appendは通常の追加。
  // beforeは取得した要素の前に追加、afterは取得した要素の後に追加している。
  $("#q6").on("click", function () {
    $(this).animate({
      "marginTop": "100",
      "marginLeft": "100"
    }, 2000);
  });
  // ボタンq6をIDで取得。thisに#q6を代入し、クリックするとanimateが動作するようにしている。
  // marginTopとmarginLeftで動作、2000で2秒かけて移動と指定。
  $("#q7").on("click", function () {
    console.log(this);
  });
  // ボタンq7をIDで取得。クリックするとconsole.logにそのままthisに代入された<button id="q7" class="btn">Q7</button>を出力している。
  $("#q8").on("mouseenter", function () {
    $(this).addClass("large")
  });
  $("#q8").on("mouseleave", function () {
    $(this).removeClass("large")
  })
  // ボタンq8をIDで取得。mouseenterがマウスを乗せたとき、mouseleaveがマウスを外した時にそれぞれ動作する。
  //  addClassはクラスを追加するメソッド、removeClassはクラスを削除するメソッドである。
  $("#q9 li").on("click", function () {
    let a = $(this).index(); alert(a)
  });
  // ボタンq9をIDのliクラスを取得。クリックした時にインデックスで取得した変数を保存し、aに代入しアラートとして表示させる。
  $("#q10 li").on("click", function () {
    let a = $(this).index();
    $("#q11 li").eq(a).addClass("large-text");
  })
  // ボタンq10をIDのliクラスを取得。クリックしたときに#q11のli要素のインデックス数をaに保存する。
  // その後#q11のliにそれぞれ取得したインデックスaの数、addClassでlarge-textを追加し文字を大きくする。
})
