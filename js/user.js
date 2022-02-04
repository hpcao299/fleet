const user = function () {
    // Check if user has logged in
    const profile = JSON.parse(localStorage.getItem('user'))

    if (profile) {
        headerUser.innerHTML = `<img src="${profile.avatar}" alt="${profile.username}" >`
        return;
    }

    // Authentication Popup
    const headerUser = document.querySelector('.js-header-user')
    let currentPage = 'sign-up'
    const pages = [
        {
            page: 'sign-up',
            html: `
                <div class="popup-outline outline-container">
                    <div class="popup-container js-popup-container">
                        <h3 class="popup-heading">Sign up on Fleet</h3>
                        <p class="popup-subheading">Use Your OpenID to Sign up</p>
                        <div class="popup-login-btns">
                            <button class="google-login-btn social-login-btn">
                                <svg class="icon icon-google">
                                    <use xlink:href="#icon-google"></use>
                                </svg>
                                <span>Google</span>
                            </button>
                            <button class="apple-login-btn social-login-btn">
                                <svg class="icon icon-apple">
                                    <use xlink:href="#icon-apple"></use>
                                </svg>
                                <span>Apple</span>
                            </button>
                        </div>
                        <p class="popup-note">Or continue with email</p>
                        <form class="popup-form js-email-login-form">
                            <input type="email" required name="email" placeholder="Enter your email" class="text-input">
                            <button type="submit" class="submit-button">
                                <svg class="icon icon-arrow-next">
                                    <use xlink:href="#icon-arrow-next"></use>
                                </svg>
                            </button>
                        </form>
                        <p class="popup-foot">Already have an account? <a href="#" class="popup-link js-login-link">Login</a>
                        </p>
                        <button type="submit" class="popup-close-btn js-popup-close-btn"></button>
                    </div>
                </div>
            `
        },
        {
            page: 'sign-in',
            html: `
                <div class="popup-outline outline-container">
                    <div class="popup-container js-popup-container">
                    <h3 class="popup-heading">Sign in</h3>
                    <form class="popup-form">
                    <div class="relative">
                        <input type="password" class="text-input js-password-input" name="password"
                            placeholder="Password" required minlength="6" autofocus>
                        <button type="button" class="password-eye-btn js-password-eye-btn">
                            <i class="fas fa-eye-slash"></i>
                        </button>
                    </div>
                    <button type="submit" class="btn login-btn">
                            Login
                        </button>
                    </form>
                    <button class="popup-close-btn js-popup-close-btn"></button>
                    <p class="login-foot js-login-foot"><a href="#">Forgot password?</a></p>
                    </div>
                </div>
            `
        },
        {
            page: 'forgot-password',
            html: `
                <div class="popup-outline outline-container">
                    <div class="popup-container js-popup-container">
                        <h3 class="popup-heading">Let’s confirm it’s really you</h3>
                        <p class="popup-subheading">Help us secure your account. Please complete the verifications below</p>
                        <form class="popup-form js-forgot-password-form">
                            <div class="radio-variants js-radio-variants">
                                <label class="radio js-radio">
                                    <input type="radio" name="login" checked hidden class="radio-input">
                                    <div class="radio-inner">
                                        <span class="radio-tick"></span>
                                        <span class="radio-text">
                                            Get the code by text message (SM) at +1 234 567 890
                                        </span>
                                    </div>
                                </label>
                                <label class="radio js-radio">
                                    <input type="radio" name="login" hidden class="radio-input">
                                    <div class="radio-inner">
                                        <span class="radio-tick"></span>
                                        <span class="radio-text">
                                            Get the code by email at tranm••••••••••••@gm•••.com
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <button type="submit" class="btn">Continue</button>
                        </form>
                    </div>
                </div>
            `
        },
        {
            page: 'security-code',
            html: `
                <div class="popup-outline outline-container">
                    <div class="popup-container js-popup-container">
                        <h3 class="popup-heading">Enter your <br> security code</h3>
                        <p class="popup-subheading">We texted your code to +1 234 567 890</p>
                        <div class="popup-form">
                            <div class="security-code">
                                <div class="security-number js-security-number">
                                    <input type="tel" name="code" maxlength="1">
                                </div>
                                <div class="security-number js-security-number">
                                    <input type="tel" name="code" maxlength="1">
                                </div>
                                <div class="security-number js-security-number">
                                    <input type="tel" name="code" maxlength="1">
                                </div>
                                <div class="security-number js-security-number">
                                    <input type="tel" name="code" maxlength="1">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    ]


    headerUser.onclick = () => {
        renderPopup()
    }

    function renderPopup() {
        const recentPopup = document.querySelector('.js-popup')

        const { html } = pages.find(detail => {
            return currentPage === detail.page;
        })

        if (recentPopup) {
            recentPopup.innerHTML = html
        } else {
            const popup = document.createElement('div');
            popup.classList = 'popup js-popup'

            popup.innerHTML = html;

            document.querySelector('.app').appendChild(popup)
            setTimeout(() => popup.classList.add('active'), 50)
        }

        handlePopupEvents()
        if (currentPage === 'sign-up') {
            handleSignUpEvents()
        } else if (currentPage === 'sign-in') {
            handleSignInEvents()
        } else if (currentPage === 'forgot-password') {
            handleForgotPasswordEvents()
        }
    }

    // Close popup event
    const handleClosePopup = (e) => {
        const popup = document.querySelector('.js-popup')
        const popupContainer = document.querySelector('.js-popup-container')
        const popupCloseBtn = document.querySelector('.js-popup-close-btn')
        if (!popupContainer.contains(e.target) || e.target === popupCloseBtn) {
            popup.classList.remove('active')

            document.removeEventListener('click', handleClosePopup)
            setTimeout(() => {
                popup.remove()
            }, 200)
        }
    }

    function handlePopupEvents() {
        setTimeout(() => document.addEventListener('click', handleClosePopup), 200)
    }

    function deletePopupEvents() {
        document.removeEventListener('click', handleClosePopup)
    }

    function handleSignUpEvents() {
        const emailForm = document.querySelector('.js-email-login-form')
        const loginLink = document.querySelector('.js-login-link')

        const navigateToSignInPage = () => {
            currentPage = 'sign-in'
            deletePopupEvents()
            renderPopup()
        }

        emailForm.onsubmit = navigateToSignInPage

        loginLink.onclick = navigateToSignInPage
    }

    function handleSignInEvents() {
        const passwordEyeBtn = document.querySelector('.js-password-eye-btn')
        const passwordInput = document.querySelector('.js-password-input')
        const forgotPasswordLink = document.querySelector('.js-login-foot')
        let isSeePassword = false;

        passwordEyeBtn.onclick = () => {
            const eyeIcon = passwordEyeBtn.querySelector('i')

            if (isSeePassword) {
                eyeIcon.classList = 'fas fa-eye-slash'
                passwordInput.type = 'password'
            } else {
                eyeIcon.classList = 'fas fa-eye'
                passwordInput.type = 'text'
            }

            isSeePassword = !isSeePassword;
        }

        forgotPasswordLink.onclick = () => {
            currentPage = 'forgot-password';
            deletePopupEvents()
            renderPopup()
        }
    }

    function handleForgotPasswordEvents() {
        const form = document.querySelector('.js-forgot-password-form')

        form.onsubmit = () => {
            currentPage = 'security-code';
            deletePopupEvents()
            renderPopup()
        }
    }
}()