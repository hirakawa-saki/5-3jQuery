var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.createTemplateTagFirstArg = function (a) { return a.raw = a }; $jscomp.createTemplateTagFirstArgWithRaw = function (a, d) { a.raw = d; return a };
$(function () {
  function a(e) {
    $(".message").remove(); var b; 0 < (null == (b = e[0].items) ? void 0 : b.length) ? $.each(e[0].items, function (h, c) {
      var g = '<li class="lists-item"><div class="list-inner"><p>\u30bf\u30a4\u30c8\u30eb\uff1a' + ((c.title ? c.title : "\u30bf\u30a4\u30c8\u30eb\u4e0d\u660e") + "</p><p>\u4f5c\u8005\uff1a") + ((c["dc:creator"] ? c["dc:creator"] : "\u4f5c\u8005\u4e0d\u660e") + "</p><p>\u51fa\u7248\u793e\uff1a") + ((c["dc:publisher"] ? c["dc:publisher"][0] : "\u51fa\u7248\u793e\u4e0d\u660e") + '</p><a href="') + (c.link["@id"] +
        '" target="_blank">\u66f8\u7c4d\u60c5\u5831</a></div></li>'); $(".lists").prepend(g)
    }) : $(".lists").before('<div class="message">\u691c\u7d22\u7d50\u679c\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002<br>\u5225\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u3067\u691c\u7d22\u3057\u3066\u4e0b\u3055\u3044\u3002</div>')
  } var d = 1, f = ""; $(".search-btn").on("click", function () {
    var e = $("#search-input").val(); e !== f ? (d = 1, $(".lists").empty(), f = e) : d++; $.ajax({
      url: "https://ci.nii.ac.jp/books/opensearch/search?title=" +
        e + "&format=json&p=" + d + "&count=20", method: "GET"
    }).done(function (b) { a(b["@graph"]) }).fail(function (b) {
      $(".lists").empty(); $(".message").remove(); 0 === b.status ? $(".lists").before('<div class="message">\u6b63\u5e38\u306b\u901a\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002<br>\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306e\u63a5\u7d9a\u306e\u78ba\u8a8d\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002</div>') : 400 === b.status ? $(".lists").before('<div class="message">\u691c\u7d22\u30ad\u30fc\u30ef\u30fc\u30c9\u304c\u6709\u52b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002<br>1\u6587\u5b57\u4ee5\u4e0a\u3067\u691c\u7d22\u3057\u3066\u4e0b\u3055\u3044\u3002</div>') :
        $(".lists").before('<div class="message">\u4e88\u671f\u305b\u306c\u30a8\u30e9\u30fc\u304c\u8d77\u304d\u307e\u3057\u305f\u3002<br>\u518d\u8aad\u307f\u8fbc\u307f\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002</div>')
    })
  }); $(".reset-btn").on("click", function () { d = 1; f = ""; $(".lists").empty(); $(".message").remove(); $("#search-input").val("") })
});