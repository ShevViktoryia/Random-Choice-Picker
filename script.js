const textarea = document.querySelector("#container__textarea");
const result = document.querySelector(".container__result");
const btn = document.querySelector(".container__btn");

btn.addEventListener("click", () => {
  let arr = textarea.value.split(",").map((item) => item.trim());

  const random = Math.floor(Math.random() * arr.length);
  if (arr.length === 0 || (arr.length === 1 && arr[0] === "")) {
    result.textContent = "Please inter choises";
  } else {
    result.textContent = arr[random];
  }
});
