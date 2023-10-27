"use strict";

$(function () {
  // ドキュメントが読み込まれた際コードを実行する
  $(".select-box").on("change", function () {
    // select-boxが変更された際にその後の関数を実行する。
    var selectBox = $(this)[0];
    // セレクトボックスを[0]でDOM要素として取得する。
    var selectedValue = selectBox.value;
    // selectBox 変数からセレクトボックスの選択内容（オプションの値）を取得し、selectedValue 変数に保存する。
    var foodListItems = $(".food-list li");
    // food-listに設定されたリスト内のすべてのli要素を取得し、foodListItems 変数に保存する。
    if (selectedValue === "all") {
      // 選択がallであった場合すべての食べ物アイテムを表示する処理を行う。そうでなければ別の条件分岐に進む。
      for (var i = 0; i < foodListItems.length; i++) {
        // 全ての食べ物アイテムに対する処理を行う。foodListItems.lengthは食べ物アイテム。食べ物アイテム数分ループする。
        $(foodListItems[i]).show();
        // 選択された値がallの場合、全ての食べ物アイテムを表示する。
      }
    } else {
      // all以外であった場合こちらが読み込まれる。
      for (var i = 0; i < foodListItems.length; i++) {
        // 全ての食べ物アイテムに対する処理を行う。foodListItems.lengthは食べ物アイテム。食べ物アイテム数分ループする。
        var item = $(foodListItems[i]);
        // 食べ物アイテムをjQueryオブジェクトとして取得しitem変数に保存する。
        var categoryType = item.data("category-type");
        // 各食べ物アイテムのデータ属性category-type（肉や魚など）を取得し、categoryType変数に保存する。
        if (selectedValue === categoryType) {
          //selectedValueと食べ物のアイテムカテゴリーが一致する場合、そのアイテムを表示します。それ以外の場合は非表示にします。 
          item.show();
        } else {
          item.hide();
        }
      }
    }
  });
});