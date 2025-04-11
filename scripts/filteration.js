let course = `<a class="course">
                    <img src="../Resources/Image.png" alt="">
                    <h2>Course Descreption</h2>
                    <div>
                        <p class="hours">hour to compelete(99)</p>
                        <p class="price">999$</p>
                    </div>
                </a>`;
function addCourse(img,courseName,Descreption,Hours,Price){
     return `<a class="course">
                    <img src="../Resources/Image.png" alt="">
                    <h2>Course Descreption</h2>
                    <div>
                        <p class="hours">${Descreption}</p>
                        <p class="price">${courseName}$</p>
                    </div>
                </a>`;
}
let courses = document.querySelector(".courses");
let types = ["tec","health","health","tec","IT","IT","IT","health","Ai","Ai","Ai"];
let name = [322,343,234,54,345,65,32,6,54,3,123];


function filter(){
    courses.innerHTML = ""
    let filterCheckBoks = document.getElementsByClassName("chkfilter");
    for(let chk = 0;chk<filterCheckBoks.length;chk++){
        if(filterCheckBoks[chk].checked === false)continue;
        for(let cat = 0;cat<types.length;cat++){
            if(filterCheckBoks[chk].id == types[cat]){
                courses.innerHTML+=`${addCourse(0,cat,types[cat],0,0)}`;
            }
        }
    }
}

