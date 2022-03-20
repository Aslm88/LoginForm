const inputs = document.querySelectorAll(".form__input")

/*Add focus*/
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

//remove focus//
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

//call function//
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})