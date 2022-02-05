const preview = function () {
    function clearPreviewActive() {
        const items = document.querySelectorAll('.js-preview-item')
        items.forEach(item => item.classList.remove('active'));
    }

    const location = function () {
        const wrapper = document.querySelector('.js-location')
        const input = wrapper.getElementsByTagName('input')[0]
        const clearBtn = wrapper.querySelector('.clear-btn')

        const handleCloseMenu = (e) => {
            if (e.target === input) return;

            if (clearBtn.contains(e.target)) input.value = '';
            wrapper.classList.remove('active')
            document.removeEventListener('click', handleCloseMenu)
        }

        input.onkeyup = () => wrapper.classList.add('active')

        input.onfocus = () => document.addEventListener('click', handleCloseMenu)

    }()

    const traveler = function () {
        const wrapper = document.querySelector('.js-traveler')
        const head = wrapper.querySelector('.js-traveler-head')
        const counters = document.querySelectorAll('.js-traveler-counter')
        const countersResult = document.querySelector('.js-traveler-result')

        const handleCloseCounter = (e) => {
            if (!wrapper.contains(e.target)) {
                wrapper.classList.remove('active')
                document.removeEventListener('click', handleCloseCounter)
            }
        }

        head.onclick = () => {
            clearPreviewActive()
            wrapper.classList.toggle('active')
            document.addEventListener('click', handleCloseCounter)
        }

        counters.forEach(counter => {
            const result = counter.querySelector('.js-counter-result')
            const minusBtn = counter.querySelector('.js-minus-counter-btn')
            const plusBtn = counter.querySelector('.js-plus-counter-btn')
            let counts = 0

            minusBtn.onclick = () => {
                counts -= 1
                displayResult()
            }

            plusBtn.onclick = () => {
                counts += 1
                displayResult()
            }

            function displayResult() {
                result.innerHTML = counts
                if (counts === 0) {
                    minusBtn.classList.add('disabled')
                } else {
                    minusBtn.classList.remove('disabled')
                }
                displayTotalResult()
            }
            displayResult()
        })

        function displayTotalResult() {
            let totalResult = 0;
            const results = wrapper.querySelectorAll('.js-counter-result')

            results.forEach(element => {
                totalResult += Number(element.innerHTML)
            })

            countersResult.innerHTML = totalResult !== 0 ? `${totalResult} ${totalResult > 1 ? 'guests' : 'guest'}` : 'Travelers'
        }
    }()

    const link = function () {
        const link = document.querySelectorAll('.js-preview-link')

        link.forEach(element => {
            if (window.location.pathname === element.dataset.page) {
                element.classList.add('active')
            }
        })
    }()
}()
