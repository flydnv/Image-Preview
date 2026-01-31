const fileInput = document.querySelector("#file__input");
const preview = document.querySelector(".preview");
fileInput.addEventListener("change", (e) => {
  createImg(e.target.files);
  preview.textContent = "";
});

function createImg(files) {
  let i = 0;
  while (i >= 0) {
    let file = files[i];
    console.log(file);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const prevImg = document.createElement("img");
      prevImg.classList.add("prevImg");
      prevImg.setAttribute("src", reader.result);
      preview.append(prevImg);
    });
    if (file) {
      reader.readAsDataURL(file);
      i++;
    } else {
      i = -1;
    }
  }
}
