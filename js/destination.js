const destination = function () {
    const wrapper = document.querySelector('.js-destinations-wrapper')
    const loadMoreBtn = document.querySelector('.js-destinations-button')

    const loadMoreDestinations = [
        {
            imageUrl: './assets/images/live-pic-2.png',
            name: 'Enjoy the great cold',
            content: '10,191 properties'
        },
        {
            imageUrl: './assets/images/live-pic-1.png',
            name: 'Pick up the earliest sunrise',
            content: '6,129 properties'
        },
        {
            imageUrl: './assets/images/live-pic-3.png',
            name: 'Unique stay',
            content: '9,126 properties'
        },
    ]

    loadMoreBtn.onclick = (e) => {
        e.target.innerHTML = '<div class="loader" style="width: 1em; height: 1em; font-size: 4px"></div>'
        e.target.classList.remove('shadow-[0_0_0_2px_#e6e8ec_inset]', 'hover:shadow-[0_0_0_2px_#23262f_inset]', 'hover:bg-normal', 'dark:shadow-[0_0_0_2px_#777e90_inset]', 'dark:hover:bg-lightBlack', 'dark:hover:shadow-[0_0_0_2px_#353945_inset]')
        e.target.style = "cursor: wait;"

        setTimeout(() => {
            e.target.remove()
            const html = loadMoreDestinations.map(des => `
                <a href="/"
                    class="group mx-4 mt-12 text-center flex-[0_0_calc(33.333%_-_32px)] w-[calc(33.333%_-_32px)] hover:text-blue transition-colors duration-200 ease-[ease]">
                    <div class="mb-6 overflow-hidden rounded-2xl">
                        <img src="${des.imageUrl}" alt="Live Pic"
                            class="transition-transform ease-[ease] duration-1000 group-hover:scale-105">
                    </div>
                    <div class="mb-2 text-base font-semibold">${des.name}</div>
                    <div class="text-sm text-grey">${des.content}</div>
                </a>
            `).join('')

            wrapper.innerHTML += html
        }, 600)
    }
}()