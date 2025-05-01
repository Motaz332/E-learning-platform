window.onload = ()=>{
    let currentCourse = localStorage.getItem('currentCourse');
    let course = JSON.parse(localStorage.getItem('courses'));
    course = course.filter((e)=>{
        if(e['id'] == currentCourse){
            return true;
        }
        return false;

    })
    course = course[0];
    console.log(course)
    let page = document.querySelector('.course-page')
    page.children[0].children[0].src = course['photopath']
    page.children[0].children[1].children[0].innerText = course['name']
    page.children[0].children[1].children[1].innerText = `Category: ${course['category']}`
    page.children[0].children[1].children[2].innerText = course['price']
    page.children[1].children[1].innerText = course['description']
    if(localStorage.getItem('signed') == 'no'){
        page.children[0].children[1].children[3].href = '/Templets/SignUp.html'
    }

}