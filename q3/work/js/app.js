"use strict";

$(function () {
  $(".drawer_button").click(function () {
    // ページ読み込み時にfunction()が自動的に読み込まれ、.drawer_buttonをクリックした際に次の動作を行う。
    $(this).toggleClass("active");
    // toggleClassでactiveを.drawer_buttonに追加し、style.css記載のactive動作を行わせる。
    $(".drawer_bg").fadeToggle();
    // display: none;にしていたdrawer_bgをフェードインさせる。
    $("nav").toggleClass("open")
  });
  // navクラスにtoggleClassでopenを追加し、サイドメニューの表示を行う。
  // toggleClassでクラスを追加しているので再度クリックすると、activeやopenを外した元の動作に変化する。
  $(".drawer_bg").click(function () {
    // ドロワーメニューが出た際の灰色背景をクリックすると動作を行う。
    $(this).hide();
    // 灰色背景をhideで非表示にする。
    $(".drawer_button").removeClass("active");
    // activeを.drawer_buttonから外して通常動作にする。
    $("nav").removeClass("open");
    // openをnavから外してサイドメニュー非表示にする。
  });
});