const formChangeInfo = document.getElementById('form-change-info');

formChangeInfo.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
        email: event.target.email.value,
        fullName: event.target.fullName.value,
        birthday: event.target.birthday.value,
        address: event.target.address.value,
    };
    axios
        .put(`/users/${window.getCookie('userID')}`, user)
        .then((response) => {
            $('#alert').html(`<div class="alert alert-success fade show" id='test123' role="alert">
                                    Thay đổi thông tin thành công
                            </div>`);
            setTimeout(() => {
                $('#test123').alert('close');
            }, 4000);
        })
        .catch((error) => {
            $('#alert').html(`<div class="alert alert-danger fade show" id='test123' role="alert">
                                    ${error.response.data.message}
                            </div>`);
            setTimeout(() => {
                $('#test123').alert('close');
            }, 4000);
        });
});
