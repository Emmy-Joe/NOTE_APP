const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("#btn");
let notes = document.querySelectorAll(".input-box");

function displayNote(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}
displayNote();

function updateSave(){
    localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete2.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})

noteContainer.addEventListener("click", (t)=>{
    if(t.target.tagName === "IMG"){
        t.target.parentElement.remove();
        updateSave();
    }
    else if(t.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateSave();
            }
        })
    }
})

document.addEventListener("Keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
        }
})