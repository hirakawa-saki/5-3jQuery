'use strict';

$(function () {
  $(".modal_open_button").click(function () {
    $(".modal_win").fadeIn()
  });
  $(".modal_close_button").click(function(){$(".modal_win").fadeOut()});
});

// $(function () {});はドキュメントが読み込まれたときに実行されるコードである。
// .modal_open_buttonをクリックすると通常、display:noneで隠れている.modal_winという要素をfadeInで表示させる。
// .modal_close_buttonをクリックすると.modal_winという要素を再び.fadeOutで非表示にさせる。