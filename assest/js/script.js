let profile = document.getElementById("profile");
let skills = document.getElementById("skills");
let qualification = document.getElementById("qualification");
let projects = document.getElementById("projects");
let profile_div = document.getElementById("profile_div");
let skills_div = document.getElementById("skills_div");
let qualification_div = document.getElementById("qualification_div");
let projects_div = document.getElementById("projects_div");

let buttons = [profile, skills, qualification, projects];
let contents = [profile_div, skills_div, qualification_div, projects_div];

let oldContent = null; // Initialize oldContent

function hideAllContents() {
    contents.forEach((content) => {
        if (!content.classList.contains('hide')) {
            content.classList.remove('slide-up-background');
            content.classList.add('slide-down-background');
            setTimeout(() => {
                content.classList.add('hide');
            }, 700); // Hide after animation
        }
    });
}

function showContent(contentToShow) {
    contentToShow.classList.remove('hide');
    contentToShow.classList.remove('slide-down-background');
    contentToShow.classList.add('slide-up-background');
}

function handleButtonClick(contentToShow) {
    if (oldContent !== contentToShow) {
        hideAllContents();
        setTimeout(() => {
            showContent(contentToShow);
        }, 700); // Delay showing to allow the slide effect
        oldContent = contentToShow;
    }
}

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        handleButtonClick(contents[index]);
        hoverRemove();
        btn.classList.add('hover-frozen');
    });
});

function hoverRemove() {
    buttons.forEach((btn) => {
        btn.classList.remove('hover-frozen');
    });
}

// Initialize sections with default content if needed
profile_div.innerHTML = `
    <h3 class="text-decoration-underline">Profile</h3>
    <p class="fs-5">I am Abdullah Ansari, I have completed my BSc IT from Maharashtra College (University of Mumbai) with a strong interest in full
    stack web development. Iʼve been interning at Herzsoft Technologies Pvt. Ltd. for the past 8 months, working 
    on real-world projects using technologies like PHP, MySQL, HTML, CSS, JavaScript, Bootstrap, and React. I 
    enjoy building responsive and user-friendly websites and applications. Iʼm now looking for a full-time 
    opportunity where I can grow my skills and contribute to a professional team.</p>
`;

qualification_div.innerHTML = `
    <h3 class="text-decoration-underline">Qualification</h3>
    <p class="fs-5">I have completed a Diploma in Computer Technology at Maratha Mandir's Babasaheb Gawde Institute Of Technology and and Bachelor of Science in Information Technology (BSc IT) at Maharashtra College of Arts, Science and Commerce (MU).
    Alongside my studies, I'm gaining
        practical experience as a Web Development Intern at Hertzsoft, where I have been working for the
        past two months. My role involves assisting in the development and maintenance of web
        applications, collaborating with the team to design and implement new features, and working with
        various web technologies like HTML, CSS, and JavaScript.</p>
`;

skills_div.innerHTML = `
    <h3 class="text-decoration-underline">Skills</h3>
    <p class="fs-5">I have a foundational understanding of web development, with proficiency in HTML, CSS, and JavaScript. I am also familiar with Bootstrap, which I use to create responsive and visually appealing layouts. My skills in these technologies allow me to develop user-friendly and functional web pages, and I am continuously working on improving my expertise in this field.</p>
`;

projects_div.innerHTML = `
    <h3 class="text-decoration-underline">Projects</h3>
    <ul class="fs-5">
        <li>Chatbot App: Created an AI-powered chatbot using the Gemini library to answer questions about my profile. Integrated with PHP and JavaScript.</li>
        <li>Inventory Management System: A system to manage product stock and sales, with admin and staff features (PHP, MySQL, JS).</li>
        <li>Chat Web App: Built a messaging app with user login and live chat using PHP, jQuery, and AJAX.</li>
        <li>Blog Website: A dynamic site with admin panel, blog posting/editing (PHP, MySQL, Bootstrap).</li>
        <li>Portfolio Website: Personal site showcasing projects and resume (HTML, CSS, JS).</li>
        <li>Mini Projects: To-Do App, Calculator, etc.</li>
    </ul>
`;
