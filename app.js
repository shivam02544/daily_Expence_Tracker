const list = document.querySelector(".list-items");
const taskValue = document.getElementById("txt");

function addList() {
    if (taskValue.value === "")
        alert("Please fill the text box")
    else {
        let li = document.createElement("li")
        li.innerHTML = `<div class="checking uncheck"><i class="fa-solid fa-check"></i></div>
        <span>${taskValue.value}</span>
        <i class="fa-sharp fa-solid fa-xmark"></i>`
        list.appendChild(li)
        taskValue.value = "";
    }
}
list.addEventListener('click', (e) => {
    if (e.target.classList[1] == 'fa-check') {
        if (e.target.parentElement.classList[1] === "uncheck") {
            e.target.parentElement.classList.replace("uncheck", "check")
            e.target.parentElement.nextElementSibling.style.textDecoration = "line-through"
        } else {
            e.target.parentElement.nextElementSibling.style.textDecoration = "none"
            e.target.parentElement.classList.replace("check", "uncheck")
        }
    } else if (e.target.classList[2] == 'fa-xmark') {
        e.target.parentElement.remove();

    }
})