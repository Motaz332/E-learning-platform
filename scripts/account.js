let page = document.querySelector('body')
window.onload = ()=>{
    document.querySelector('#divofsocialacc').style.display = 'none'
    document.querySelector('#divofSecurity').style.display = 'none'
    document.querySelector('#btn1').className = 'active'
    document.querySelector('#btn3').className = 'none'
    document.querySelector('#btn2').className = 'none'
}

document.querySelector('#btn1').onclick = ()=>{
    document.querySelector('#divofbasics').style.display = 'flex'
    document.querySelector('#divofsocialacc').style.display = 'none'
    document.querySelector('#divofSecurity').style.display = 'none'
    document.querySelector('#btn1').className = 'active'
    document.querySelector('#btn2').className = 'none'
    document.querySelector('#btn3').className = 'none'

}

document.querySelector('#btn2').onclick = ()=>{
    document.querySelector('#divofbasics').style.display = 'none'
    document.querySelector('#divofSecurity').style.display = 'flex'
    document.querySelector('#divofsocialacc').style.display = 'none'
    document.querySelector('#btn1').className = 'none'
    document.querySelector('#btn2').className = 'active'
    document.querySelector('#btn3').className = 'none'
}

document.querySelector('#btn3').onclick = ()=>{
    document.querySelector('#divofbasics').style.display = 'none'
    document.querySelector('#divofSecurity').style.display = 'none'
    document.querySelector('#divofsocialacc').style.display = 'flex'
    document.querySelector('#btn1').className = 'none'
    document.querySelector('#btn2').className = 'none'
    document.querySelector('#btn3').className = 'active'
}

let acc = JSON.parse(localStorage.getItem('accounts'))
let currntUser = localStorage.getItem('currentUser')
document.querySelector('#inp1').value =`${acc[currntUser][2]}`
document.querySelector('#inp3').value =`${acc[currntUser][0]}`

document.querySelector('#showpassbtn').onclick = ()=>{
    let pass1 = document.querySelector('#inp9')
    let pass2 = document.querySelector('#inp10')
    if(pass1.value == pass2.value){
        if(pass1.value != ''){
            acc[currntUser][1] = pass1.value
            document.querySelector('#showpassbtn').innerHTML ="password Was Changed"
            pass1.value = "" 
            pass2.value = "" 
            localStorage.setItem('accounts',JSON.stringify(acc))
            setTimeout(() => {
                document.querySelector('#showpassbtn').innerHTML ="Change Password"

            }, 1000);
        }
    }else{
        document.querySelector('#showpassbtn').innerHTML ="Unvalid password" 
    }
}

let a = document.querySelectorAll('a')
let logout = a[2]
logout.href = '../index.html'
logout.innerText = 'Logout'
logout.onclick= ()=>{
    localStorage.setItem('signed','no')
    location.reload()
}