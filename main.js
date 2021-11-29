

const spanishBtn = document.querySelector("#spanish_btn")


$("button").on("click", (e) =>{
    e.preventDefault();
    $(e.target).toggleClass("button--animate");
}) 

spanishBtn.onclick = (e) => {
    e.preventDefault();
    $("#static_txt--en").toggleClass("hide");
    $("#static_txt--es").toggleClass("active");
}
    