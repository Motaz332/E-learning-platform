/**
 * color are static variables*
 * varables in local storage:-
 *           signed -> if sign 'yes'   -    else 'no' or 'null'
 *           accounts is array holds the signed accouts
 *           currentUser -> tell which user is signed
 *           currentCourse the id for course that apper in the course page rn 
 *  
 * 
 * 
 * 
 * 
 * 
*/



/*  every course object will have   
    -photo path this just will be the name and like (java.png) and path will be edit later (for github)
    -name
    -description for course page
    -category  [ Web , Ai , IT , Design   ]
    -price
    -id
    -buyed -> for dashbord 
*/

let courses = [
    { photopath: "/Resources/ai-generated-8273245_1280.jpg", name: "JavaScript Basics", description: "In this course, you will learn the fundamentals of JavaScript, including variables, data types, loops, functions, and how to interact with web pages. Perfect for beginners!", category: "Web", price: "$49", id: "course1", buyed: "no" },
    { photopath: "/Resources/coding-1841550_1280.jpg", name: "Advanced Python", description: "This advanced Python course takes you beyond the basics, covering topics such as decorators, context managers, multi-threading, and working with large datasets. Ideal for those who are comfortable with Python basics.", category: "It", price: "$79", id: "course2", buyed: "no" },
    { photopath: "/Resources/close-up-hand-writing-notebook-top-view.jpg", name: "HTML & CSS for Beginners", description: "Start building websites with HTML and CSS. This course covers everything from basic webpage structure to styling with CSS, and introduces you to responsive web design techniques.", category: "Web", price: "$39", id: "course3", buyed: "no" },
    { photopath: "/Resources/code-1076536_1280.jpg", name: "React JS", description: "Learn how to build interactive user interfaces with React. From components and state management to hooks and routing, this course will prepare you to build modern web applications.", category: "Web", price: "$99", id: "course4", buyed: "no" },
    { photopath: "/Resources/laptop-2557468_1280.jpg", name: "Machine Learning 101", description: "This course introduces you to the concepts of machine learning, including supervised and unsupervised learning, neural networks, and model evaluation techniques. Learn how to use Python libraries like Scikit-Learn and TensorFlow.", category: "Ai", price: "$89", id: "course5", buyed: "no" },
    { photopath: "/Resources/14230944_5437683.jpg", name: "Introduction to Algorithms", description: "Master the core concepts of algorithms and data structures such as sorting, searching, dynamic programming, and graph theory. Understand their real-world applications and optimize your code.", category: "It", price: "$59", id: "course6", buyed: "no" },
    { photopath: "/Resources/learning-education-ideas-insight-intelligence-study-concept.jpg", name: "Django Framework", description: "Learn to build powerful web applications with Django, a Python-based web framework. This course covers everything from model-view-template architecture to working with databases, user authentication, and deployment.", category: "Web", price: "$79", id: "course7", buyed: "no" },
    { photopath: "/Resources/c-622435_1280.jpg", name: "C++ Programming", description: "This course covers everything you need to know about C++, from the basics to advanced topics like object-oriented programming, memory management, and multi-threading. Learn to write efficient and powerful C++ code.", category: "It", price: "$69", id: "course8", buyed: "no" },
    { photopath: "/Resources/lego-6895159_1280.jpg", name: "Data Science with Python", description: "Analyze and visualize data using Python libraries such as Pandas, NumPy, and Matplotlib. Learn to clean, explore, and visualize data to derive insights and make data-driven decisions.", category: "Ai", price: "$99", id: "course9", buyed: "no" },
    { photopath: "/Resources/office-4628592_1280.jpg", name: "Full Stack Web Development", description: "Learn how to develop full-stack web applications using HTML, CSS, JavaScript, Node.js, and MongoDB. This course covers both frontend and backend development, equipping you with all the skills to build and deploy a web app.", category: "Web", price: "$129", id: "course10", buyed: "no" },
    { photopath: "/Resources/ai-generated-8531013_1280.jpg", name: "AI & Deep Learning", description: "Delve into the world of deep learning with this course. Learn about neural networks, backpropagation, and optimization techniques. Explore the implementation of models using frameworks like TensorFlow and PyTorch.", category: "Ai", price: "$149", id: "course11", buyed: "no" },
    { photopath: "/Resources/particles-7104407_1280.jpg", name: "PHP for Web Development", description: "This course teaches you how to use PHP to build dynamic, data-driven websites. Learn how to connect to databases, manage sessions, and build secure, scalable applications.", category: "Web", price: "$59", id: "course12", buyed: "no" },
    { photopath: "/Resources/alvin-vergara-4loyAC1pWJo-unsplash.jpg", name: "Java Programming", description: "Learn Java from scratch! This course covers all the essentials, from variables and loops to object-oriented programming, exceptions, and file handling. You'll also get familiar with Java libraries and frameworks for real-world applications.", category: "It", price: "$69", id: "course13", buyed: "no" },
    { photopath: "/Resources/boitumelo-A2g9OiXTW6k-unsplash.jpg", name: "Git & GitHub", description: "Learn how to manage your code with Git and collaborate using GitHub. This course covers version control, branching, merging, and resolving conflicts, and introduces you to collaborative workflows.", category: "It", price: "$29", id: "course14", buyed: "no" },
    { photopath: "/Resources/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg", name: "Node.js for Beginners", description: "Build server-side applications with Node.js in this beginner-friendly course. Learn about the event-driven model, REST APIs, and connecting Node.js to databases. Perfect for JavaScript developers who want to expand into backend development.", category: "Web", price: "$79", id: "course15", buyed: "no" },
    { photopath: "/Resources/next-academy-G6k_uEjXygE-unsplash.jpg", name: "Introduction to Cloud Computing", description: "Understand the fundamentals of cloud computing and its various deployment models (IaaS, PaaS, SaaS). Learn how to set up and manage cloud-based resources using services like AWS, Azure, and Google Cloud.", category: "It", price: "$49", id: "course16", buyed: "no" },
    { photopath: "/Resources/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg", name: "Blockchain & Cryptocurrency", description: "Learn the fundamentals of blockchain technology, how it works, and its applications. Explore the world of cryptocurrencies like Bitcoin and Ethereum and understand how decentralized networks are changing the financial landscape.", category: "It", price: "$99", id: "course17", buyed: "no" },
    { photopath: "/Resources/web-1668931_1280.jpg", name: "Web Design Basics", description: "This course is a great starting point for aspiring web designers. Learn about typography, layout, color theory, and other essential design principles to create visually appealing and user-friendly websites.", category: "Design", price: "$39", id: "course18", buyed: "no" },
    { photopath: "/Resources/volodymyr-dobrovolskyy-KrYbarbAx5s-unsplash.jpg", name: "Digital Marketing", description: "This comprehensive course covers all aspects of digital marketing, including SEO, social media marketing, email campaigns, content marketing, and data analytics. Learn how to develop effective marketing strategies in the digital age.", category: "Web", price: "$89", id: "course19", buyed: "no" },
    { photopath: "/Resources/premkumar-masilamani-Qi2bsCwx-gM-unsplash.jpg", name: "Mobile App Development with Flutter", description: "Learn how to build beautiful, native mobile apps for iOS and Android using Flutter. This course covers widgets, state management, navigation, and much more, enabling you to create mobile apps from scratch.", category: "Web", price: "$109", id: "course20", buyed: "no" }
]


window.onload = function () {

    localStorage.setItem('courses',JSON.stringify(courses))

    
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
        logout.href = '../index.html'
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
        Register.href = '../Templets/SignUp.html'
        let sidebar = document.querySelector('#sidebar')
        sidebar.children[1].children[1].style.display = 'none'
        sidebar.children[2].style.marginTop = '40px'
    } 

    //store default account
    if(localStorage.getItem('accounts') == null){
        localStorage.setItem('accounts',JSON.stringify([['Moataz','Moataz1#',""]]))
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
        document.documentElement.style.setProperty("--button-color2","#2828a2")
        document.documentElement.style.setProperty("--background-c1","#050f18")
        document.documentElement.style.setProperty("--background-c2","#050f18")
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
        document.documentElement.style.setProperty("--button-color2","#0276e3")
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

