// Header
const header = function () {
    const item = document.querySelectorAll('.js-header-item')
    const travelersLinks = document.querySelectorAll('.js-header-travelers-link')

    // Dropdown Handler
    item.forEach(element => {
        const head = element.querySelector('.js-header-head')
        const body = element.querySelector('.js-header-body')

        head.onclick = () => {
            toggleDropdown()
        }

        function toggleDropdown() {
            element.classList.toggle('active')

            if (element.classList.contains('active')) return document.addEventListener('click', handleCloseDropdown)
            document.removeEventListener('click', handleCloseDropdown)
        }

        function handleCloseDropdown(e) {
            if (!element.contains(e.target)) {
                toggleDropdown()
                document.removeEventListener('click', handleCloseDropdown)
            }
        }
    })

    // Add Tailwind Classes For Travelers' Links
    travelersLinks.forEach(element => {
        if (window.location.pathname === element.dataset.page) {
            element.classList.add('active')
        }
    })

    // Mobile Dropdown Menu
    const burger = document.querySelector('.js-header-burger')
    const user = document.querySelector('.js-header-user')
    const notification = document.querySelector('.js-header-notification')

    burger.onclick = (e) => {
        e.target.classList.toggle('active')
        user.classList.toggle('disable-hidden')
        notification.classList.toggle('disable-hidden')
    }
}()

// Theme Handler
const themeInput = document.querySelector('#theme-input')

themeInput.onchange = (e) => {
    if (e.target.checked) {
        localStorage.setItem('darkMode', 'on')
    } else {
        localStorage.setItem('darkMode', 'off')
    }
    toggleDarkMode()
}

function toggleDarkMode() {
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'on') {
        themeInput.checked = true;
        document.documentElement.classList.add('dark')
    } else {
        themeInput.checked = false;
        document.documentElement.classList.remove('dark')
    }
}
toggleDarkMode()