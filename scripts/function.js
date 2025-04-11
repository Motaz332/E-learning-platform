window.onload = function () {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.getElementById("cbx-51").checked = true;
        theme()
    }

    if(document.title === "Explore Courses"){
        for(let cat = 0;cat<types.length;cat++){
            courses.innerHTML+=`${addCourse(0,cat,types[cat],0,0)}`;
        }
    }
};

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


let aside = document.getElementById("sidebar")
let collab = document.getElementById("collab")
let continer = document.getElementById("continer")
let body = document.querySelector("body")
aside.style.width = "100%"
collab.onclick = function(){
    
    if(aside.style.width === "100%"){
        aside.style = "width : 0"
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
let te3t = 3;

let ho = 2