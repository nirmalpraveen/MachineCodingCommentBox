import "./styles.css";

const combo = (id) => {
  const box = document.createElement("div");
  const input = document.createElement("input");
  const replyButton = document.createElement("button");
  replyButton.textContent = "Reply";
  replyButton.addEventListener("click", function () {
    const previousCombo = document.getElementById(id);
    previousCombo.appendChild(combo(id + 1));
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    const previousCombo = document.getElementById(id);
    previousCombo.remove();
  });
  box.appendChild(input);
  box.appendChild(replyButton);
  box.appendChild(deleteButton);
  box.setAttribute(
    "style",
    "border: 1px solid black; padding: 1%; margin-left: 5px"
  );
  box.setAttribute("id", id);
  return box;
};
const mod = document.getElementById("app");
mod.innerHTML = "";
mod.appendChild(combo(1));
