const toggleBtn = document.querySelector('#toggle-btn');
const sideBar = document.querySelector('.side-bar');


function show(){
    sideBar.classList.toggle('active');
}

toggleBtn.addEventListener('click', show);


// remove sidebar if click on the main content
const content = document.querySelector('.content');

content.addEventListener('click', () => {
    sideBar.classList.remove('active');
})