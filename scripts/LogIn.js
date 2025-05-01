let login = document.forms[0]
let username = login.children[0].children[1]
let password = login.children[1].children[1]
let submitButton = login.children[2]
login.onsubmit = (e)=>{
    let account = JSON.parse(localStorage.getItem('accounts'))
    let ok = false
    let userid = 0
    account.forEach((user,i)=> {
        if(user[0] === username.value && user[1] === password.value){
            ok = true;
            userid = i
        }
    });
    if(ok){
        localStorage.setItem('signed','yes')
        localStorage.setItem('currentUser',userid)
    }else{
        e.preventDefault()
        username.value = ""
        password.value = ""
        submitButton.value = "Wrong Account"
        setTimeout(()=>{
            submitButton.value = "Log In"
        },1000)
        
    }
}