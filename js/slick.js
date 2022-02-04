$(document).ready(function () {
    slickElements.forEach(slick => {
        $(`.${slick.class}`).slick(slick.options);
    })
})