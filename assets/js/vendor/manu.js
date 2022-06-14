const showMenu = document.getElementById('nav-toggle'),
    sidebar = document.getElementById('sidebar')

if (sidebar && showMenu) {
    showMenu.addEventListener('click', () => {
        alert("heloooo")
        sidebar.classList.toggle('show')
        sidebar.classList.toggle('rotate')
    })
}