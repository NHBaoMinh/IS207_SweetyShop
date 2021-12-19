document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.querySelector('.user-container-nav-item');
    const userNav = document.querySelector('.user-nav');
    let mouseInside;

    userContainer.onclick = function () {
        userNav.style.display = 'block';
    };

    userNav.onmouseover = function () {
        mouseInside = true;
    };

    userNav.onmouseout = function () {
        mouseInside = false;
    };

    document.querySelector('body').onmouseup = function () {
        if (!mouseInside) {
            userNav.style.display = 'none';
        }
    };

    // logout
    if (document.querySelector('.btnLogout')) {
        document.querySelector('.btnLogout').onclick = (event) => {
            event.preventDefault();
            axios
                .post('/auth/logout')
                .then((response) => {
                    location.reload();
                })
                .catch((error) => {
                    console.error(error);
                });
        };
    }
});
