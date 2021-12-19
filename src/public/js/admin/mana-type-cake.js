const formAddTypecake = document.getElementById('form-add-typecake');
const formEditTypecake = document.getElementById('form-edit-typecake');
const btnChange = document.getElementById('btn-change-password');
const btnSaveChange = document.getElementById('btn-save-change');
const image = document.getElementById('imageTypeCake');
const imageEdit = document.getElementById('imageTypeCakeEdit');
const btnEdit = document.getElementById('btn-edit');
const btnEditsClass = document.getElementsByClassName('btn-edit');

console.log(btnEditsClass)

var id;

for (let i = 0; i < btnEditsClass.length; i++) {
    btnEditsClass[i].onclick = function () {
        id = btnEditsClass[i].value;
    };
}

formAddTypecake.addEventListener('submit', async function (e) {
    e.preventDefault();
    let imageBase64 = await toBase64(image.files[0]);

    let formData = new FormData(this);

    axios
        .post(
            '/api/type-cakes',
            {
                name: formData.get('name'),
                image: imageBase64,
            },
            {
                headers: {
                    authorization: `Bearer ${window.getCookie('token')}`,
                },
            },
        )
        .then(() => {
            window.location.reload();
        });
});

formEditTypecake.addEventListener('submit', async function (e) {
    e.preventDefault();
    let imageBase64 = await toBase64(imageEdit.files[0]);

    let formData = new FormData(this);

    axios
        .put(
            '/api/type-cakes/' + id,
            {
                name: formData.get('name'),
                image: imageBase64,
            },
            {
                headers: {
                    authorization: `Bearer ${window.getCookie('token')}`,
                },
            },
        )
        .then(() => {
            window.location.reload();
        });
});
btnChange.onclick = () => {
    document.getElementById('btn-submit').click();
};
btnSaveChange.onclick = () => {
    document.getElementById('btn-submit-save-change').click();
};
const toBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
