let menu = document.querySelector(".menu")
let menubtn = document.querySelector(".fa-circle-xmark")
menu.addEventListener('click', function () {
    document.querySelector(".slidebar").style.left = '0';
})
menubtn.addEventListener('click', function () {
    document.querySelector(".slidebar").style.left = '-100%';
})


let sphien = document.querySelector('.sphien')
let span = document.querySelector('.span')
let menusp = document.querySelector('.menuList3')
sphien.addEventListener('click', function () {
    menusp.style.left = "0"

})
span.addEventListener('click', function () {
    menusp.style.left = "-100%"
})

let ao = document.querySelector('.ao')
let spaohien = document.querySelector('.sphienao')
let spaoan = document.querySelector('.spao')
spaohien.addEventListener('click', function () {
    ao.style.left = "0"
})
spaoan.addEventListener('click', function () {
    ao.style.left = "-100%"
})

let vay = document.querySelector('.vay')
let spvayhien = document.querySelector('.sphienvay')
let spvayan = document.querySelector('.spvay')
spvayhien.addEventListener('click', function () {
    vay.style.left = "0"
})
spvayan.addEventListener('click', function () {
    vay.style.left = "-100%"
})

let dam = document.querySelector('.dam')
let spdamhien = document.querySelector('.sphiendam')
let spdaman = document.querySelector('.spdam')
spdamhien.addEventListener('click', function () {
    dam.style.left = "0"
})
spdaman.addEventListener('click', function () {
    dam.style.left = "-100%"
})

let foothien = document.querySelector('.xuongg')
let foothien1 = document.querySelector('.xuongg1')
let foothien2 = document.querySelector('.xuongg2')
let hienra = document.querySelector(".hienra")
let hienra1 = document.querySelector(".hienra1")
let hienra2 = document.querySelector(".hienra2")
let d = document.querySelector('i.downnn')
let d1 = document.querySelector('i.downnn1')
let d2 = document.querySelector('i.downnn2')

let h = true
foothien.addEventListener('click', function () {
    if (h) {
        hienra.style.display = 'block';
        d.style.transform = "rotate(180deg)"
        h = false;
    }
    else {
        hienra.style.display = 'none';
        d.style.transform = "rotate(0deg)"

        h = true;
    }
})
foothien1.addEventListener('click', function () {
    if (h) {
        hienra1.style.display = 'block';
        d1.style.transform = "rotate(180deg)"

        h = false;
    }
    else {
        hienra1.style.display = 'none';
        d1.style.transform = "rotate(0deg)"


        h = true;
    }
})
foothien2.addEventListener('click', function () {
    if (h) {
        hienra2.style.display = 'block';
        d2.style.transform = "rotate(180deg)"

        h = false;
    }
    else {
        hienra2.style.display = 'none';
        d2.style.transform = "rotate(0deg)"

        h = true;
    }
})

function calculateTotalPrice() {
    let totalPrice = 0;
    let productDetails = document.querySelectorAll('.shoppingdetail');

    productDetails.forEach(function (productDetail) {
        let quantity = parseInt(productDetail.querySelector('.right3-left input').value);
        let pricePerUnit = parseFloat(productDetail.querySelector('.price').getAttribute('data-price')); // Lấy giá tiền từ thuộc tính dữ liệu
        let totalPricePerProduct = quantity * pricePerUnit * 1000;
        totalPrice += totalPricePerProduct;

        productDetail.querySelector('.right3-right span').innerText = totalPricePerProduct.toLocaleString('de-DE');
    });

    let totalPriceSpan = document.querySelector('.tongtienn');
    totalPriceSpan.innerText = totalPrice.toLocaleString('de-DE');
    let totalPriceSpan4 = document.querySelector('.r-4 .tongtienn');
    totalPriceSpan4.innerText = totalPrice.toLocaleString('de-DE');
}
function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
window.onload = function () {
    // Lấy dữ liệu giỏ hàng từ localStorage khi trang được tải
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Hiển thị thông tin sản phẩm trên trang shopping
    let cartContainer = document.getElementById('dt');
    cart.forEach(function (product) {
        let productElement = document.createElement('div');
        productElement.innerHTML = `
            <div class="shoppingdetail" data-id="${product.id}">
                <div class="cart-view">
                    <div class="left"><img src="${product.img}" alt=""></div>
                    <div class="right" style="margin:0">
                        <div class="right1"><p style="margin:0">${product.name}</p><i class="fa-solid fa-xmark" style="margin-right:0"></i></div>
                        <div class="right2"><span style="margin:0">${product.size}</span><img src="${product.color}" alt="" class = "shc"></div>
                        <div class="right3">
                            <div class="right3-left" style="margin:0">
                                <div class="update" >
                                    <div class="giam">
                                        <button class="_1"><i class="fa-solid fa-minus"></i></button>
                                        <div class="_2"><input type="text" name="" id="" value="${product.quanti}"></div>
                                        <button class="_3"><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="right3-right" style="margin-right:0;diplay:flex;align-items: center;"><span class="price" data-price="${product.price}">${product.price}</span></div>
                        </div>
                    </div>
                </div>
            </div>`;

        cartContainer.appendChild(productElement);
        deleteCartItem()
        calculateTotalPrice();

    });

    var decreaseButtons = document.querySelectorAll('button._1');
    decreaseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var quantityElement = button.parentElement.querySelector('input');
            var quantity = parseInt(quantityElement.value);
            if (quantity > 1) {
                quantity--;
                quantityElement.value = quantity;
                calculateTotalPrice();
                var productId = button.closest('.shoppingdetail').getAttribute('data-id');
                updateCartInLocalStorage(productId, quantity);
                updateShopInfo();
            }
        });
    });
    
    var increaseButtons = document.querySelectorAll('button._3');
    increaseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var quantityElement = button.parentElement.querySelector('input');
            var quantity = parseInt(quantityElement.value);
            quantity++;
            quantityElement.value = quantity;
            calculateTotalPrice();
            var productId = button.closest('.shoppingdetail').getAttribute('data-id');
            updateCartInLocalStorage(productId, quantity);
            updateShopInfo();
        });
    });
        function deleteCartItem() {
            var productDeleteButtons = document.querySelectorAll('.right1 .fa-xmark');
            productDeleteButtons.forEach(function (deleteButton) {
                deleteButton.addEventListener('click', function (event) {
                    var clickedButton = event.target;
                    var cartItem = clickedButton.closest('.shoppingdetail');
                    var productId = cartItem.getAttribute('data-id');
                    cartItem.remove();
                    var cart = JSON.parse(localStorage.getItem('cart')) || [];
                    var updatedCart = cart.filter(function (item) {
                        return item.id !== productId;
                    });
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                    calculateTotalPrice();

                });
            });
        }
        function updateCartInLocalStorage(productId, newQuantity) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let updatedCart = cart.map(function(item) {
                if (item.id === productId) {
                    item.quanti = newQuantity;
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }

        function updateShopInfo() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.forEach(function (product) {
                let detail = document.querySelector(`.shoppingdetail[data-id="${product.id}"]`);
                if (detail) {
                    let quantity = product.quanti;
                    let pricePerItem = parseFloat(product.price.replace(/[^\d.-]/g, '')); // Lấy giá tiền từ dữ liệu
                    let totalPricePerItem = quantity * pricePerItem; // Tính giá tiền cho từng sản phẩm
                    detail.querySelector('input').value = quantity; // Cập nhật số lượng
                    detail.querySelector('.right3-right span').textContent = totalPricePerItem.toLocaleString('de-DE'); // Cập nhật giá tiền
                }
            });
            calculateTotalPrice(); // Cập nhật tổng giá tiền sau khi cập nhật giá từng sản phẩm
        }

}
let quanti = document.querySelectorAll('.giam ._2')
console.log(quanti)
const slider_recommend_container = document.querySelector('.recommend-slider-container')
const slider_recommend = document.querySelector('.slide-products')
let re_products = document.querySelectorAll('.slide-products .product')
let productsPerPage = 4
let len_Re = re_products.length - productsPerPage
let index_re = 0
slider_recommend.style.left = '0px'
const re_preBTN = document.getElementById('pre-btn-recommend')
const re_nxtBTN = document.getElementById('nxt-btn-recommend')
let WidSlideRe = slider_recommend_container.offsetWidth
if (WidSlideRe < 740)
    productsPerPage = 2
else
    if (WidSlideRe < 1200)
        productsPerPage = 3
    else
        productsPerPage = 4
len_Re = re_products.length - productsPerPage
window.addEventListener('resize', () => {
    WidSlideRe = slider_recommend_container.offsetWidth
    if (WidSlideRe < 740)
        productsPerPage = 2
    else
        if (WidSlideRe < 1200)
            productsPerPage = 3
        else
            productsPerPage = 4
    len_Re = re_products.length - productsPerPage
})


re_preBTN.onclick = function () {
    if (index_re == 0)
        index_re = len_Re
    else
        index_re--
    changeProduct()
}
re_nxtBTN.onclick = function () {
    if (index_re == len_Re)
        index_re = 0
    else
        index_re++
    changeProduct()
}
function changeProduct() {
    let checkLeft_re = re_products[index_re].offsetLeft
    slider_recommend.style.left = -checkLeft_re + 'px'
}