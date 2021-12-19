const carts = JSON.parse(window.localStorage.getItem('cart'));
const checkout = document.getElementById('checkout-menu');
const totalPriceClass = document.getElementsByClassName('totalPrice');

let htmlInsert = '';
let totalPrice = 0;
if (carts) {
    for (let i = 0; i < carts.length; i++) {
        totalPrice += carts[i].cake.priceDiscount * carts[i].quantity;
        htmlInsert += `<tr id='${carts[i].cake._id}'>
                                        <td style="width: 60px;">
                                            <img class="pen_img" src="/image/checkout/pen.png" />
                                        </td>
                                        <td style="width: 550px;">
                                            <b>${carts[i].quantity} x ${carts[i].cake.name}</b>
                                            <br />
                                            Note: ${carts[i].note}
                                            <div><button value='${carts[i].cake._id}' class="btn_del">Xóa</button></div>
                                        </td>
                                        <td>
                                            ${carts[i].cake.priceDiscount * carts[i].quantity}đ
                                        </td>
                                    </tr>`;
    }
} else {
    totalPrice = 0;
}

checkout.innerHTML = htmlInsert;

for (let i = 0; i < totalPriceClass.length; i++) {
    totalPriceClass[i].innerHTML = `${totalPrice}đ`;
}

$('#btn-DatHang').click(() => {
    if (totalPrice == 0) {
        $('#alert').html(`<div class="alert alert-danger fade show" id='alertLog' role="alert">
                                    Đặt hàng không thành công
                            </div>`);
        setTimeout(() => {
            $('#alertLog').alert('close');
            window.localStorage.removeItem('cart');
        }, 4000);
    } else {
        $('#alert').html(`<div class="alert alert-success fade show" id='alertLog' role="alert">
                                    Đặt hàng thành công
                            </div>`);
        setTimeout(() => {
            $('#alertLog').alert('close');
            window.localStorage.removeItem('cart');
            totalPrice = 0;
            window.location.reload();
        }, 4000);
    }
});

const btnDeletes = document.getElementsByClassName('btn_del');

for (let i = 0; i < btnDeletes.length; i++) {
    btnDeletes[i].onclick = (event) => {
        const item = document.getElementById(btnDeletes[i].value);
        item.style.display = 'none';
        const foundIndexItem = carts.findIndex((item) => item.cake._id === btnDeletes[i].value);
        totalPrice = totalPrice - carts[foundIndexItem].cake.priceDiscount * carts[foundIndexItem].quantity;
        for (let i = 0; i < totalPriceClass.length; i++) {
            totalPriceClass[i].innerHTML = `${totalPrice} đ`;
        }
        carts.splice(foundIndexItem, 1);
        localStorage.setItem('cart', JSON.stringify(carts));
    };
}
