
/*  every course object will have   
    -photo path this just will be the name and like (java.png) and path will be edit later (for github)
    - name
    -description for course page
    - category  [ Web , Ai , IT , Design   ]
    -price
    -id
    -buyed -> for dashbord 
*/



function getCourse(course) {
    let c = document.createElement('a');
    let name = document.createElement('h1')
    let photoholder = document.createElement('div')
    let photo = document.createElement(`img`)
    let price = document.createElement(`p`)
    let cat = document.createElement('p')
    let info = document.createElement('div')
    let buy = document.createElement('button')
    c.setAttribute('href','/Templets/CoursePage.html')
    photo.src = course.photopath
    price.innerText = course.price
    cat.innerText = course.category
    name.innerHTML = course.name
    photoholder.classList += 'imgholder'
    photoholder.appendChild(photo)
    buy.append('Buy Now')
    info.appendChild(cat)
    info.appendChild(price)
    c.appendChild(photoholder)
    c.appendChild(name)
    c.appendChild(info)
    c.appendChild(buy)
    c.className += 'course'
    c.onclick = () => {
        localStorage.setItem('currentCourse', course.id)
    }
    info.classList += 'course-info'
    return c;
}

let courses_f = JSON.parse(localStorage.getItem('courses'));
let continer_f = document.querySelector('.courses')

function filter() {
    continer_f.innerHTML = ''

    let filterButton = document.querySelectorAll('.filterButton input')
    for (let ch = 0; ch < 4; ch++) {
        if (filterButton[ch].checked === false) continue;
        for (let c = 0; c < 20; c++) {
            if (courses_f[c].category == filterButton[ch].id) {
                continer_f.appendChild(getCourse(courses_f[c]))
            }
        }
    }
}

for (let a = 0; a < 21; a++) {
    continer_f.appendChild(getCourse(courses_f[a]))
}


