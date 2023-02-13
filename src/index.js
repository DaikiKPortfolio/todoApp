import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  createInCompleteList(inputText);
};

const createInCompleteList = (text) => {
  // liの生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  // div.appendChild("CompleteButton");
  div.className = "list_row";
  const pTag = document.getElementById("p");

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // const deleteTarget = div.parentNode;
    // document.getElementById("incomplete_list").removeChild(target);
    deleteFromInCompleteList(div.parentNode);
  });

  // 完了ボタン
  const CompleteButton = document.createElement("button");
  CompleteButton.innerText = "完了";
  CompleteButton.addEventListener("click", () => {
    deleteFromInCompleteList(div.parentNode);

    // 完了リストに追加する
    const addTarget = pTag.parentNode;
    const text = addTarget.firstElementChild.innerText;
    // divの中身の初期化
    addTarget.textContent = null;

    // 戻るボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻るボタンの処理
    backButton.addEventListener("click", () => {
      // 押された戻るボタンの親要素を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document
        .getElementById("complete_list")
        .removeChild(deleteTarget.parentNode);

      // テキストの取得
      const text = backButton.parentNode.firstChild.innerText;
      createInCompleteList(text);
    });

    // 完了したtodo listタグ生成
    addTarget.appendChild(pTag);
    addTarget.appendChild(backButton);
    pTag.innerText = text;

    // 完了リストに追加
    document.getElementById("complete_list").appendChild(addTarget.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(pTag);
  pTag.innerText = text;
  div.appendChild(CompleteButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete_list").appendChild(li);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromInCompleteList = (target) => {
  document.getElementById("incomplete_list").appendChild(li);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
