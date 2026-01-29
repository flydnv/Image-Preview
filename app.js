const fileInput = document.querySelector("#file__input");
const preview = document.querySelector(".preview");
const prevImg = document.querySelector(".prevImg");
fileInput.addEventListener("change", (e) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    prevImg.setAttribute("src", reader.result);
  });
  reader.readAsDataURL(e.target.files[0]);
});
