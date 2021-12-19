const btnChangePassword = document.getElementById('btn-change-password');
const formChangePassword = document.getElementById('form-change-password');

formChangePassword.addEventListener('submit', (event) => {
    event.preventDefault();
    $('#modal-confirm-change-password').modal('hide');
    const dataChangePassword = {
        passwordPre: event.target.passwordPre.value,
        passwordNew: event.target.passwordNew.value,
        rePasswordNew: event.target.rePasswordNew.value,
    };
    axios
        .post('/auth/change-password', dataChangePassword, {
            headers: {
                authorization: `Bearer ${window.getCookie('token')}`,
            },
        })
        .then((response) => {
            $('#alert').html(`<div class="alert alert-success fade show" id='alertLog' role="alert">
                                    Thay đổi mật khẩu thành công
                            </div>`);
            setTimeout(() => {
                $('#alertLog').alert('close');
            }, 4000);
        })
        .catch((error) => {
            $('#alert').html(`<div class="alert alert-danger fade show" id='alertLog' role="alert">
                                    ${error.response.data.message}
                            </div>`);
            setTimeout(() => {
                $('#alertLog').alert('close');
            }, 4000);
        });
});

btnChangePassword.onclick = () => {
    document.getElementById('btn-submit').click();
};
