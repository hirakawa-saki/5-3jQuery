"use strict";

$(function () {
  $(".btn__submit").on("click", function () {
    // アカウント作成ボタンクリックしたときの処理
    var familyName = $(".family__name").val();
    // family__nameのvalue値を変数に格納する。
    var givenName = $(".given__name").val();
    // given__nameのvalue値を変数に格納する。
    console.log("名字" + familyName);
    // 名字＋変数familyNameをコンソールに表示させる。
    console.log("名前" + givenName);
    // 名前＋変数givenNameをコンソールに表示させる。

    var year = $(".year").val();
    // yearのvalue値を変数に格納する。
    var month = $(".month").val();
    // monthのvalue値を変数に格納する。
    var day = $(".day").val();
    // dayのvalue値を変数に格納する。
    var birthday = year + "年" + month + "月" + day + "日";
    // birthdayという変数にyear年month月day日という値を格納する。
    console.log("生年月日:" + birthday);
    // コンソールに生年月日:入力した値で表示させる。

    var gender = $("input[name='gender']:checked").val();
    // ジェンダーのチェックボックスにチェックが入っているvalue値を取得し、変数genderに格納する。
    console.log("性別:" + gender);
    // コンソールに性別：チェックボックスの入った性別というように表示させる。

    var occupation = $(".occupation").val();
    // 職業のoccupationのvalue値を取得し、変数に格納する。
    console.log("職業:" + occupation);
    // コンソールに職業：選択した職業のvalue値を表示させる。

    var accountName = $("#account__name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var duplicationPassword = $("#duplication__password").val();
    console.log("アカウント名" + accountName);
    console.log("メールアドレス" + email);
    console.log("パスワード" + password);
    console.log("確認用パスワード" + duplicationPassword);
    // アカウント名、メールアドレス、パスワード、確認用パスワードに入力された値を取得し、コンソールで表示させる。

    var address = $("#address").val();
    var tel =$("#tel").val();
    console.log("住所:" + address);
    console.log("電話番号:" + tel);
    // 住所と電話番号の入力された値を取得してコンソールに表示させる。

    var subscription = [];
    // 空の配列を作成し、購読情報を格納させる変数を定義。
    $("subscription__checkbox.:checked").each(function(){
      // subscription__checkboxでチェックボックスが選択されたものを選択
      // each()メソッドで選択された要素ごとに処理を行う。
      subscription.push($(this).val());
      // this(subscription__checkboxでチェックの入った要素の値)をsubscription配列に追加。
    });
    console.log("購買情報:" + subscription.join(","));
    // コンソールログでsubscription配列の内容を出力。
    // join()メソッドを使用して配列内の値をコンマで区切って結合させる。
  });



})
