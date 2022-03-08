const itemDiv = document.getElementsByClassName("items");
// const openItem = document.getElementsByClassName("icon-plus");
// const closeItem = document.getElementsByClassName("icon-close");

// console.log(itemDiv);
for(let i=0; i<itemDiv.length; i++){
    itemDiv[i].addEventListener("click", ()=>{
        itemDiv[i].classList.toggle("active");
    })
}