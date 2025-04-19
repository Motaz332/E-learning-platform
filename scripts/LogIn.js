let login = document.forms[0]
let username = login.children[0].children[0]
let usernameLabel = login.children[0].children[1]
let password = login.children[1].children[0]
let passwordLabel = login.children[1].children[1]

login.onsubmit = (e)=>{
    let account = JSON.parse(localStorage.getItem('accounts'))
    let ok = false
    account.forEach((user)=> {
        if(user[0] === username.value && user[1] === password.value){
            ok = true;
        }
    });
    if(ok){
        localStorage.setItem('signed','yes')
    }else{
        e.preventDefault()
    }
}

username.onblur = ()=>{
    if(username.value.length >0){
        usernameLabel.style.display = 'none'
    }else usernameLabel.style.display = 'block'
}

password.onblur = ()=>{
    if(password.value.length >0){
        passwordLabel.style.display = 'none'
    }else passwordLabel.style.display = 'block'
}