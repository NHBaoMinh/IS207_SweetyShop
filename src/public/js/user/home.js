const btnAddCakeToCart = document.getElementsByClassName('btnAddCakeToCart');

for (let i = 0; i < btnAddCakeToCart.length; i++) {
    btnAddCakeToCart[i].onclick = function (event) {
        event.preventDefault();
        if (!window.getCookie('token')) {
            console.log('object');
            $('#loginBtn').click();
        } else {
            axios
                .get(`/api/cakes/${btnAddCakeToCart[i].value}`)
                .then((response) => {
                    let carts = [];
                    const newCake = response.data.cake;
                    if (localStorage.getItem('cart')) {
                        carts = JSON.parse(localStorage.getItem('cart'));
                    }

                    // Check da add cake
                    const foundIndexItem = carts.findIndex((item) => item.cake._id === newCake._id);
                    let item = {};
                    if (foundIndexItem == '-1') {
                        item = {
                            cake: newCake,
                            quantity: 1,
                            note: '',
                        };
                        carts.push(item);
                    } else {
                        carts[foundIndexItem].quantity++;
                    }

                    localStorage.setItem('cart', JSON.stringify(carts));
                    $('#alert').html(`<div class="alert alert-success fade show" id='alertLog' role="alert">
                                    Thêm bánh ${newCake.name} thành công
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
        }
    };
}
