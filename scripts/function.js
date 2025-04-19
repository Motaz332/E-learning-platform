/**
 * color are static variables*
 * varables in local storage:-
 *           signed -> if sign 'yes'   -    else 'no' or 'null'
 *           accounts is array holds the signed accouts
 *           
 * 
 * 
 * 
 * 
 * 
 * 
*/


window.onload = function () {

        // _________get theme from localStorage________
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.getElementById("cbx-51").checked = true;
        theme()
    }



    let is_signed = localStorage.getItem('signed')
    if(is_signed === 'yes'){
        let a = document.querySelectorAll('a')
        let acc = a[5]
        acc.innerText = 'Account'
        if(document.title = 'SuperEdu')
            acc.href = '/Templets/Account.html'
        else acc.href = '../Templets/Account.html'

        let logout = a[6]
        logout.innerText = 'Logout'
        logout.onclick= ()=>{
            localStorage.setItem('signed','no')
            location.reload()
        }

    }else{
        let a = document.querySelectorAll('a')
        let log = a[5]
        log.innerText = 'Log In'

        let Register = a[6]
        Register.innerText = 'Register'
        Register.href = 'SignUp.html'
    } 

    //store default account
    if(localStorage.getItem('accounts') == null){
        localStorage.setItem('accounts',JSON.stringify([['Moataz','Moataz1#']]))
    }
};



        /*_____________varaibles________________*/
let aside = document.getElementById("sidebar")
let collab = document.getElementById("collab")
let continer = document.getElementById("continer")
let body = document.querySelector("body")












            /*___________________functions__________*/


            // light & dark theme colors
function theme(){
    let checkbox = document.getElementById("cbx-51");
    if (checkbox.checked == true) {
        localStorage.setItem("theme", "dark");
        document.documentElement.style.setProperty("--aside-text-color","#5f7be0")
        document.documentElement.style.setProperty("--button-hover-color","#0848634a")
        document.documentElement.style.setProperty("--aside-color-top","#242a2f")
        document.documentElement.style.setProperty("--aside-color-bottom","#07074b")
        document.documentElement.style.setProperty("--background-c3","#0d0808")
        document.documentElement.style.setProperty("--icon-color","#bababadf")
        document.documentElement.style.setProperty("--paragarph-color1","#2c2a2d")
        document.documentElement.style.setProperty("--button-color1","#9fd4f3")
        document.documentElement.style.setProperty("--background-c1","#050f18")
        document.documentElement.style.setProperty("--text-color1","#c8c6c6")
        document.documentElement.style.setProperty("--text-color2","white")
    }else{
        localStorage.setItem("theme", "light");
        document.documentElement.style.setProperty("--aside-text-color","white")
        document.documentElement.style.setProperty("--button-hover-color","#ffffff39")
        document.documentElement.style.setProperty("--aside-color-top","#418CD1")
        document.documentElement.style.setProperty("--aside-color-bottom","#9C41D1")
        document.documentElement.style.setProperty("--background-c3","white")
        document.documentElement.style.setProperty("--icon-color","#515151df")
        document.documentElement.style.setProperty("--paragarph-color1","#767278")
        document.documentElement.style.setProperty("--button-color1","white")
        document.documentElement.style.setProperty("--background-c1","#F5F7F9")
        document.documentElement.style.setProperty("--text-color1","black")
        document.documentElement.style.setProperty("--text-color2","black")
    }
}


// ________________close & open -siade bar
if(collab != 'null'){
    collab.onclick = function(){
        
        if(aside.style.width === "100%"){
            aside.style = "width : 0px"
            setTimeout(() => {
                aside.style.display = "none"
                body.style.display = "block"
            }, 500);
            
        }
        else{
            setTimeout(() => {
                aside.style = "width :100%"
            }, 50);
            aside.style.display = "block"
            body.style.display = "grid"
        }
    }
}

