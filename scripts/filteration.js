
/*  every course object will have   
    -photo path this just will be the name and like (java.png) and path will be edit later (for github)
    - name
    -description for course page
    - category  [ Web , Ai , IT , Design   ]
    -price
    -id
    -buyed -> for dashbord 
*/

let courses = [
    { photopath: "/Resources/14230944_5437683.jpg", name: "JavaScript Basics", description: "In this course, you will learn the fundamentals of JavaScript, including variables, data types, loops, functions, and how to interact with web pages. Perfect for beginners!", category: "Web", price: "$49", id: "course1", buyed: "no" },
    { photopath: "/Resources/ai-generated-8273245_1280.jpg", name: "Advanced Python", description: "This advanced Python course takes you beyond the basics, covering topics such as decorators, context managers, multi-threading, and working with large datasets. Ideal for those who are comfortable with Python basics.", category: "IT", price: "$79", id: "course2", buyed: "no" },
    { photopath: "/Resources/ai-generated-8531013_1280.jpg", name: "HTML & CSS for Beginners", description: "Start building websites with HTML and CSS. This course covers everything from basic webpage structure to styling with CSS, and introduces you to responsive web design techniques.", category: "Web", price: "$39", id: "course3", buyed: "no" },
    { photopath: "/Resources/c-622435_1280.jpg", name: "React JS", description: "Learn how to build interactive user interfaces with React. From components and state management to hooks and routing, this course will prepare you to build modern web applications.", category: "Web", price: "$99", id: "course4", buyed: "no" },
    { photopath: "", name: "Machine Learning 101", description: "This course introduces you to the concepts of machine learning, including supervised and unsupervised learning, neural networks, and model evaluation techniques. Learn how to use Python libraries like Scikit-Learn and TensorFlow.", category: "AI", price: "$89", id: "course5", buyed: "no" },
    { photopath: "", name: "Introduction to Algorithms", description: "Master the core concepts of algorithms and data structures such as sorting, searching, dynamic programming, and graph theory. Understand their real-world applications and optimize your code.", category: "IT", price: "$59", id: "course6", buyed: "no" },
    { photopath: "", name: "Django Framework", description: "Learn to build powerful web applications with Django, a Python-based web framework. This course covers everything from model-view-template architecture to working with databases, user authentication, and deployment.", category: "Web", price: "$79", id: "course7", buyed: "no" },
    { photopath: "", name: "C++ Programming", description: "This course covers everything you need to know about C++, from the basics to advanced topics like object-oriented programming, memory management, and multi-threading. Learn to write efficient and powerful C++ code.", category: "IT", price: "$69", id: "course8", buyed: "no" },
    { photopath: "", name: "Data Science with Python", description: "Analyze and visualize data using Python libraries such as Pandas, NumPy, and Matplotlib. Learn to clean, explore, and visualize data to derive insights and make data-driven decisions.", category: "AI", price: "$99", id: "course9", buyed: "no" },
    { photopath: "", name: "Full Stack Web Development", description: "Learn how to develop full-stack web applications using HTML, CSS, JavaScript, Node.js, and MongoDB. This course covers both frontend and backend development, equipping you with all the skills to build and deploy a web app.", category: "Web", price: "$129", id: "course10", buyed: "no" },
    { photopath: "", name: "AI & Deep Learning", description: "Delve into the world of deep learning with this course. Learn about neural networks, backpropagation, and optimization techniques. Explore the implementation of models using frameworks like TensorFlow and PyTorch.", category: "AI", price: "$149", id: "course11", buyed: "no" },
    { photopath: "", name: "PHP for Web Development", description: "This course teaches you how to use PHP to build dynamic, data-driven websites. Learn how to connect to databases, manage sessions, and build secure, scalable applications.", category: "Web", price: "$59", id: "course12", buyed: "no" },
    { photopath: "", name: "Java Programming", description: "Learn Java from scratch! This course covers all the essentials, from variables and loops to object-oriented programming, exceptions, and file handling. You'll also get familiar with Java libraries and frameworks for real-world applications.", category: "IT", price: "$69", id: "course13", buyed: "no" },
    { photopath: "", name: "Git & GitHub", description: "Learn how to manage your code with Git and collaborate using GitHub. This course covers version control, branching, merging, and resolving conflicts, and introduces you to collaborative workflows.", category: "IT", price: "$29", id: "course14", buyed: "no" },
    { photopath: "", name: "Node.js for Beginners", description: "Build server-side applications with Node.js in this beginner-friendly course. Learn about the event-driven model, REST APIs, and connecting Node.js to databases. Perfect for JavaScript developers who want to expand into backend development.", category: "Web", price: "$79", id: "course15", buyed: "no" },
    { photopath: "", name: "Introduction to Cloud Computing", description: "Understand the fundamentals of cloud computing and its various deployment models (IaaS, PaaS, SaaS). Learn how to set up and manage cloud-based resources using services like AWS, Azure, and Google Cloud.", category: "IT", price: "$49", id: "course16", buyed: "no" },
    { photopath: "", name: "Blockchain & Cryptocurrency", description: "Learn the fundamentals of blockchain technology, how it works, and its applications. Explore the world of cryptocurrencies like Bitcoin and Ethereum and understand how decentralized networks are changing the financial landscape.", category: "IT", price: "$99", id: "course17", buyed: "no" },
    { photopath: "", name: "Web Design Basics", description: "This course is a great starting point for aspiring web designers. Learn about typography, layout, color theory, and other essential design principles to create visually appealing and user-friendly websites.", category: "Design", price: "$39", id: "course18", buyed: "no" },
    { photopath: "", name: "Digital Marketing", description: "This comprehensive course covers all aspects of digital marketing, including SEO, social media marketing, email campaigns, content marketing, and data analytics. Learn how to develop effective marketing strategies in the digital age.", category: "Web", price: "$89", id: "course19", buyed: "no" },
    { photopath: "", name: "Mobile App Development with Flutter", description: "Learn how to build beautiful, native mobile apps for iOS and Android using Flutter. This course covers widgets, state management, navigation, and much more, enabling you to create mobile apps from scratch.", category: "Web", price: "$109", id: "course20", buyed: "no" }
]

function getCourse(course){
    let c = document.createElement('a');
    let name = document.createElement('h1')
    let photo = document.createElement(`img`)
    let price = document.createElement(`p`)
    let cat = document.createElement('p')
    let info  = document.createElement('div')
    photo.src = course.photopath
    price.innerText = course.price
    cat.innerText = course.category 
    name.innerHTML = course.name

    
    info.appendChild(cat)
    info.appendChild(price)
    c.appendChild(photo)
    c.appendChild(name)
    c.appendChild(info)
    c.className+='course'
    info.classList+='course-info'
    return c;
}


let container = document.querySelector('.courses')
container.appendChild(getCourse(courses[1]))
container.appendChild(getCourse(courses[2]))
container.appendChild(getCourse(courses[3]))
container.appendChild(getCourse(courses[4]))
container.appendChild(getCourse(courses[5]))

// localStorage.setItem()