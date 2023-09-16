

// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  // textというidを持つHTML要素を取得し、定数に代入
  const text = document.getElementById('text');

  // 要素の中身を変更
  text.innerHTML = 'ボタンをクリックしました';
});