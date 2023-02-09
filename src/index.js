import "./styles.css";

const onClickAdd = () => {
  // alert();
  const inputText = document.getElementById("addText").value;
  // console.log(inputText);
  document.getElementById("addText").value = "";
  // タグの追加
  const li = document.createElement("li");
  // console.log(li);
  const div = document.createElement("div");
  // liタグの子要素に各要素を設定
  li.appendChild(div);
  // console.log(li);
  div.innerText = inputText;
  // console.log(li);

  // 未完了リストに追加
  document.getElementById("uncomplete_list").appendChild(li);
};

document
  .getElementById("add_bottun")
  .addEventListener("click", () => onClickAdd());
