const btnAddToCart = document.getElementById('button-add-to-cart');

btnAddToCart.onclick = function (event) {
    event.preventDefault();
    if (!window.getCookie('token')) {
        $('#loginBtn').click();
    } else {
        axios
            .get(`/api/cakes/${btnAddToCart.value}`)
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
                        quantity: Number($('#product-quantity').val()),
                        note: $('#product-note').val(),
                    };
                    carts.push(item);
                } else {
                    carts[foundIndexItem].quantity =
                        Number(carts[foundIndexItem].quantity) + Number($('#product-quantity').val());
                    carts[foundIndexItem].note = $('#product-note').val();
                }

                localStorage.setItem('cart', JSON.stringify(carts));
                $('#alert').html(`<div class="alert alert-success fade show" id='alertLog' role="alert">
                                    Thêm bánh  ${newCake.name} thành công
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
