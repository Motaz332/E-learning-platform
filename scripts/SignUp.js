let form = document.forms[0]
let name = form.children[1]
let username = form.children[3]
let password = form.children[5]
form.onsubmit = (e)=>{
    let newAccounts = JSON.parse(localStorage.getItem('accounts'));
    newAccounts[newAccounts.length] = [username.value,password.value,name.value]
    console.log(newAccounts)
    localStorage.setItem('accounts',JSON.stringify(newAccounts))
    
}