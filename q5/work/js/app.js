"use strict";

$(function(){
  // ドキュメントを読み込んだ際に実行する。
  $(".dropdwn li").hover(function(){
  // dropdwnのli要素をホバーすると動作する。
    $(this).children("ul").stop().slideDown()
   },
  // thisでdropdwn liの要素を取得し、childrenで子要素である直下のliを選択し.slideDownでプルダウンさせる。.stopを設定しておくとホバーでの複数動作を防ぐ。
  function(){
    $(this).children("ul").stop().slideUp()
    // thisでdropdwn liの要素を再び取得し、childrenで子要素である直下のliを選択し.slideUpでプルダウンメニューを元に戻す。.stopを設定しておくとホバーでの複数動作を防ぐ。
  });
});