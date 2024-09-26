const showSidebar = (toggleId, sidebarId, mainId) =>{
    const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId)


    if(toggle && sidebar){
        toggle.addEventListener('click', ()=>{
            sidebar.classList.toggle('show-sidebar') 
        })
    }
}
showSidebar('header-toggle','sidebar')

const sidebarLink = document.querySelectorAll('.sidebar__list a')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))
