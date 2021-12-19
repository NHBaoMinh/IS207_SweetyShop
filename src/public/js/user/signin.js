const formLogin = document.getElementById('formLogin');

// Login
if (formLogin) {
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();
        const infoLogin = {
            email: event.target.email.value,
            password: event.target.password.value,
        };
        axios
            .post('/auth/login', infoLogin)
            .then((response) => {
                window.location = response.data.user.role === 'USER' ? '/' : '/admin/user/info';
            })
            .catch((error) => {
                console.log(error.response.data.message);
                $('#alert').html(`<div class="alert alert-danger fade show" id='alertLog' role="alert">
                                    ${error.response.data.message}
                            </div>`);
                setTimeout(() => {
                    $('#alertLog').alert('close');
                }, 4000);
            });
    });
}
