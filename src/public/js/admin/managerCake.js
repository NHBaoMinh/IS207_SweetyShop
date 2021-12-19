const selectAddTypeCake = document.getElementById('addTypeCake');
const selectEditTypeCake = document.getElementById('editTypeCake');
const selectTypeCakeDrop = document.getElementById('typeCakeDrop');
const formChangeInfo = document.getElementById('form-change-info');
const btnAddNewCake = document.getElementById('btn-add-new-cake');
const formAddNewCake = document.getElementById('form-add-cake');
const image = document.getElementById('imageTypeCake');

const toBase64 = (file) =>
new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});

console.log(image)

formAddNewCake.addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(formAddNewCake);
    let imageBase64 = await toBase64(image.files[0]);
    console.log(formData.get('addTypeCake'));
    axios
    .post('/api/cakes', { 
        name: formData.get('name'),
        price: formData.get('price'),
        discount: formData.get('discount'),
        image: imageBase64,
        description: formData.get('description'),
        typeCake: {
            _id: formData.get('addTypeCake'),
            name: document.getElementById('addTypeCake').options[document.getElementById('addTypeCake').selectedIndex].text,
            image: "/image/type-cake/type-banh-bong-lan.jpg",
            createdAt: "2021-12-06T16:52:51.379Z",
            updatedAt: "2021-12-06T16:52:51.379Z"
        },
    }, {
        headers: {
        authorization: `Bearer ${window.getCookie('token')}`,
    }}
    )
    .then(() => { window.location.reload()})
    .catch((error) => {
        console.log(error);
    })
    
});

btnAddNewCake.onclick = () =>{   
    document.getElementById('btn-submit-add').click();
}




axios
    .get('/api/type-cakes')
    .then((response) => {
        response.data.typeCakes.forEach((typecake) => {
            const option = document.createElement('option');
            option.setAttribute('value', typecake._id);
            option.innerHTML = typecake.name;
            selectAddTypeCake.appendChild(option);
        });
    })
    .catch((error) => {
        console.log(error);
    });
axios
    .get('/api/type-cakes')
    .then((response) => {
        response.data.typeCakes.forEach((typecake) => {
            const option = document.createElement('option');
            option.setAttribute('value', typecake._id);
            option.innerHTML = typecake.name;
            selectEditTypeCake.appendChild(option);
        });
    })
    .catch((error) => {
        console.log(error);
    });
axios
    .get('/api/type-cakes')
    .then((response) => {
        response.data.typeCakes.forEach((typecake) => {
            const option = document.createElement('option');
            option.setAttribute('value', typecake._id);
            option.innerHTML = typecake.name;
            selectTypeCakeDrop.appendChild(option);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// formChangeInfo.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const user = {
//         email: event.target.email.value,
//         fullName: event.target.fullName.value,
//         birthday: event.target.birthday.value,
//     };
//     axios
//         .put(`/users/${window.getCookie('userID')}`, user)
//         .then((response) => {
//             $('#alert').html(`<div class="alert alert-success fade show" id='test123' role="alert">
//                                     Thay đổi thông tin thành công
//                             </div>`);
//             setTimeout(() => {
//                 $('#test123').alert('close');
//             }, 4000);
//         })
//         .catch((error) => {
//             $('#alert').html(`<div class="alert alert-danger fade show" id='test123' role="alert">
//                                     ${error.response.data.message}
//                             </div>`);
//             setTimeout(() => {
//                 $('#test123').alert('close');
//             }, 4000);
//         });
// });

