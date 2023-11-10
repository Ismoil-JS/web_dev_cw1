const sideBar = document.querySelector('.sidebar-menu');
const sideBarBtn = document.querySelector('.burger');

sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
});
