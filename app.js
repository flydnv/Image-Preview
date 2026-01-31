let i = 0;
const loading = document.querySelector("#loading");
const fileInput = document.querySelector("#file__input");
const preview = document.querySelector(".preview");
const reader = new FileReader();
reader.addEventListener("load", () => {
  const prevImg = document.createElement("img");
  prevImg.classList.add("prevImg");
  prevImg.setAttribute("src", reader.result);
  preview.append(prevImg);
  i++;
  readFile();
});

const readFile = () => {
  const file = fileInput.files[i];
  if (file) {
    reader.readAsDataURL(file);
  } else {
    loading.classList.remove("active");
  }
};
fileInput.addEventListener("change", (e) => {
  loading.classList.add("active");
  preview.textContent = "";
  readFile();
});
