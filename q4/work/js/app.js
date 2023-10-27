"use strict";

$(function(){
  // ドキュメントの読み込みが完了した際に実行する。
  $("nav li").on("click",function(){
  // ナビゲーションメニューのli要素がクリックされたときに動作する。
    var a = $("nav li").index(this);
  // クリックされたli要素のインデックスを取得して変数のaに保存する。thisはnav liが代入されている。
    $(".description li").addClass("is-hidden");
  // description li要素にis-hiddenを追加し非表示にする。
    $(".description li").eq(a).removeClass("is-hidden");
  // クリックされた要素に保存していたli要素のインデックスを取り出し、is-hiddenを外す。
  // そのためクリックされたli要素だけ表示される。
  });
})