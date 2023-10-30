"use strict";

$(function () {
  let pageNumber = 1;
  let previousSearchWord = "";

  $("#search-button").on("click", function () {
    const searchWord = $("#search-input").val();
    if (searchWord !== previousSearchWord) {
      pageNumber = 1;
      $(".lists").empty();
      //サーチワードと前回のワードが異なる場合、ページを１にリセットし、リストをemptyで無にする。
    } else {
      pageNumber++;
      //同じ検索ワードが使用されている場合はページ数を増やす。
    }

    const apiSettings = {//API設定
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageNumber}&count=20`,
      "method": "GET",
    };

    $.ajax(apiSettings)
      .done(function (response) {
        const results = response['@graph'];
        displayResults(results);
       })//リクエストが成功すると変数リザルトを表示させる。
      .fail(function (err) {
        $(".lists").empty();
        displayError(err);
      });//リクエスト失敗すると変数エラーを表示させる。

    previousSearchWord = searchWord;
  });

  $(".reset-btn").on("click", function () {
    pageNumber = 1;
    previousSearchWord = "";
    $(".lists").empty();
    $("#search-input").val("");
    $(".message").remove();
  });//リセットボタンを押すとページ数を１に、検索結果と条件をリセット

  function displayResults(results) {
    if (results && results.length > 0) {//１つ以上のresultsがある時に実行
      $.each(results, function (index, item) {
        const listItem = `<li class="lists-item">
          <div class="list-inner">
            <p>タイトル：${item.title || "タイトル不明"}</p>
            <p>著者：${item["dc:creator"] || "著者不明"}</p>
            <p>出版社：${item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明"}</p>
            <a href="${item.link["@id"]}" target="_blank">書籍情報</a>
          </div>
        </li>`;
        $(".lists").prepend(listItem);
      });
    } else {//検索結果が１つもなかった場合メッセージを表示
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。</div>');
    }
  }

  function displayError(err) {//APIがうまく送信されなかったときのエラー
    $(".lists").before('<div class="message">エラーが発生しました。<br>再度更新してください。</div>');
  }
});


//  変数settingsに設定情報などを格納
// const settings = {
//    実行するURL。実行するURLのことをエンドポイントと言います。
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?
//   title=${searchWord}&format=json&p=${pageCount}&count=20`,
//    サーバーに送るメソッド
//   "method": "GET",
//   }
//    Ajaxの実行
//   .doneが通信成功した時の処理、”response”が引数となっていて通信した結果を受け取ってい
//   る
//   $.ajax(settings).done(function (response) {
//   .failが通信に失敗した時の処理、”err”にサーバーから送られてきたエラー内容を受け取って
//   いる。
//   }).fail(function (err) {
//   });
