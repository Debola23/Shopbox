function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    sidebar.classList.toggle('open');
    content.classList.toggle('shift');
}

// Close sidebar when any link is clicked
const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleSidebar();
    });
});


document.getElementById('myText').addEventListener('touchstart', function() {
    this.style.color = 'black';
});





