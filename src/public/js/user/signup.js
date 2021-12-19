const btnRegister = document.getElementById('btnRegister');
const formRegister = document.getElementById('formRegister');

formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
        email: event.target.email.value,
        password: event.target.password.value,
        rePassword: event.target.rePassword.value,
        fullName: event.target.fullName.value,
        birthday: event.target.birthday.value,
        address: event.target.address.value,
    };
    axios
        .post('/auth/register', user)
        .then((response) => {
            location.reload();
        })
        .catch((error) => console.error(error));
});
