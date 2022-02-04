const video = function () {
    const wrapper = document.querySelector('.js-video-wrapper')

    wrapper.onclick = () => {
        const videoLink = wrapper.dataset.video_link

        wrapper.innerHTML = `
            <iframe 
                class="js-embed-video"
                style="width: 100%; height: 100%; position: absolute;"
                src="${videoLink + '?rel=0&autoplay=1'}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            >
            </iframe>
        `

        // const video = wrapper.querySelector('.js-embed-video')
        // video.play()
    }
}()