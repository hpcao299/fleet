const destination = function () {
    const wrapper = document.querySelector('.js-destinations-wrapper')
    const links = wrapper.querySelectorAll('a')
    const loadMoreBtn = document.querySelector('.js-destinations-button')

    loadMoreBtn.onclick = (e) => {
        e.target.innerHTML = '<div class="loader" style="width: 1em; height: 1em; font-size: 4px"></div>'
        e.target.classList.remove('shadow-[0_0_0_2px_#e6e8ec_inset]', 'hover:shadow-[0_0_0_2px_#23262f_inset]', 'hover:bg-normal', 'dark:shadow-[0_0_0_2px_#777e90_inset]', 'dark:hover:bg-lightBlack', 'dark:hover:shadow-[0_0_0_2px_#353945_inset]')
        e.target.style = "cursor: wait;"

        setTimeout(() => {
            e.target.remove()

            links.forEach(element => element.style.display = "block")
        }, 600)
    }
}()