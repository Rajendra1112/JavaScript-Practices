const todoForm = document.querySelector(".form-todo");
const textInputField = document.querySelector(".form-todo input[type='text']");
const ulInsideSectionTodo = document.querySelector(".todo-list");
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newLiText = textInputField.value;
  const newLi = document.createElement("li");
  const newLiInnerHTML = `<span class="text">${newLiText}</span>
  <div class="todo-buttons">
    <button class="done-btn">Done</button>
    <button class="remove-btn">Remove</button>
  </div>`;
  newLi.innerHTML = newLiInnerHTML;
  ulInsideSectionTodo.append(newLi);
  textInputField.value = "";
});

ulInsideSectionTodo.addEventListener("click", (e) => {
  //checking if user click done button or not
  if (e.target.classList.contains("done-btn")) {
    const spanInsideLi = e.target.parentNode.previousElementSibling;
    spanInsideLi.style.textDecoration = "line-through";
  }

  //checking if user click remove button not
  if (e.target.classList.contains("remove-btn")) {
    const liInsideUl = e.target.parentNode.parentNode;
    liInsideUl.remove();
  }
});
