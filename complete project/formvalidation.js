let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let cpassword=document.getElementById("cpassword")
let form=document.getElementById("form")
let image=document.getElementById("eye")
form.addEventListener("submit",(e)=>{
    if(!validation()){
        e.preventDefault()
    }
})
function validation(){
    let Name=username.value   
    let Email=email.value
    let Password=password.value
    let Cpassword=cpassword.value
    let success=true

    if(Name==""){
        success=false
        set_error(Name,"Please enter a valid name")
    }

}

function set_error(tag,message){
    let parentTag=tag.parentElement
    console.log(parentTag)
    let err=parentTag.getElementById("error")
    err.innerText=message
}
