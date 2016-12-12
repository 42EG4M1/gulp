/**
 *
 * insert span tag
 * spanタグを挿入したい要素をdocument.getElementByIdまたはdocument.querySelectorで指定しnewでインスタンス化する
 *
 * 例）
 * // ターゲットとなる要素取得（大量にある場合はclassを付与しdocument.querySelectorで取得）
 * // var t = document.getElementById('js-textEffects1');
 * // オブジェクトをインスタンス化
 * // var insertSpan1 = new InsertSpan(t);
 *
 */

// コンストラクタ
var InsertSpan = function(element) {

  // プロパティを初期化
  this.element = element;

  // 関数呼び出し
  this.init();

}

// プロトタイプ
InsertSpan.prototype.init = function() {

  // メソッド
  // var trim  = this.element.textContent.replace(/\s/gi, '');
  var chars = this.element.textContent.split('');
  var after = "";
  for (var i = 0; i < chars.length; i++) {
    after += '<span>' + chars[i] + '</span>';
  }
  var afterTrim = after.replace(/<span>\s<\/span><span>/gi, '<span style="margin-left:8px;">');
  this.element.innerHTML = afterTrim;
  return afterTrim;
}

module.exports = InsertSpan;
