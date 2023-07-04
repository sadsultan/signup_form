let card = document.getElementById("card")
let logo=document.getElementById("logo")

setTimeout(()=>{
    card.classList.remove("animation")
    logo.classList.remove("logo2")
}, 300);
function validateForm(){
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmPassword").value

    if (password != confirmPassword) {
        alert("Password and Confirm Password do not match")
        return false
    }
}