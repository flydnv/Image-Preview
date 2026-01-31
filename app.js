const fileInput = document.querySelector("#file__input");
const preview = document.querySelector(".preview");
fileInput.addEventListener("change", (e) => {
  [...e.target.files].forEach((file)=>{
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const prevImg = document.createElement("img");
      prevImg.classList.add("prevImg");
      prevImg.setAttribute("src", reader.result);
      preview.append(prevImg);
    });
    if (file) {
      reader.readAsDataURL(file);
    }
  })
});
