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

let tui = document.querySelector('.tui')
let sphientui = document.querySelector('.sphientui')
let sptuian = document.querySelector('.sptui')
sphientui.addEventListener('click', function () {
    tui.style.left = "0"
})
sptuian.addEventListener('click', function () {
    tui.style.left = "-100%"
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




sphien.addEventListener
let list = document.querySelector('.slide .imgslide')
let items = document.querySelectorAll('.slide .imgslide .items')
let dots = document.querySelectorAll('.slide .dots li')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

let active = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active += 1
    }
    reloadSlide();
}
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    }
    else {
        active -= 1;
    }
    reloadSlide()
}
let refreshSlide = setInterval(() => { next.click() }, 3000)
function reloadSlide() {
    let checkLeft = items[active].offsetLeft
    list.style.left = -checkLeft + 'px';
    let lastActiveDot = document.querySelector('.slide .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlide);
    refreshSlide = setInterval(() => { next.click() }, 3000)
}

dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlide()
    })
})

const carbtn = document.querySelector(".fa-xmark");
const carshow = document.querySelector(".fa-shopping-cart")
carshow.addEventListener("click", function () {
    document.querySelector(".shopping-cart").style.right = "0";
})
carbtn.addEventListener("click", function () {

    document.querySelector(".shopping-cart").style.right = "-100%";
})
const btn = document.querySelectorAll('.products button.product-btn')
btn.forEach(function (button, index) {
    button.addEventListener('click', function (event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement.parentElement.parentElement
            var productImg = product.querySelector('img').src
            var productName = product.querySelector('.product-name').innerText

            var productPrice = product.querySelector('.price-now').innerText
            var selectedSize = '';
            var sizeElement = product.querySelector('.select-size .chosen');
            if (sizeElement) {
                var SIZE = sizeElement.innerText;
                selectedSize = SIZE + "/";
            }



            var colors = product.querySelector('.select-color .chosen')
            var selectedColor = colors.querySelector('img').src



            addcart(productImg, productName, productPrice, selectedSize, selectedColor)

        }
    })
})


function addcart(productImg, productName, productPrice, selectedSize, selectedColor) {
    var cartbody = document.querySelector(".shopping-body");
    var cartItems = cartbody.querySelectorAll('.shoppingdetail');

    var itemId = productName.replace(" ", '-') + '-' + selectedSize.replace(" ", '-') + '-' + selectedColor.replace(" ", '-'); // Generate unique ID

    var existingItem = null;
    cartItems.forEach(function (item) {
        var itemID = item.getAttribute('data-id');
        if (itemID === itemId) {
            existingItem = item;
        }
    });

    if (existingItem) {
        var quantityElement = existingItem.querySelector('._2 input');
        var quantity = parseInt(quantityElement.value);
        quantity++;
        quantityElement.value = quantity;
        Update(quantityElement, productPrice, quantity);
    } else {
        var addshoppingdetail = document.createElement("div");
        addshoppingdetail.setAttribute('data-id', itemId);
        var cont = '<div class="shoppingdetail" data-id="' + itemId + '"><div class="cart-view"><div class="left"><img src="' + productImg + '" alt=""></div><div class="right"><div class="right1"><span style="margin-left:0">' + productName + '</span><i class="fa-solid fa-xmark" style="margin-right:0"></i></div><div class="right2"><span>' + selectedSize + '</span>   <img src="' + selectedColor + '" alt="" class = "shc"> </div><div class="right3"><div class="right3-left" style="margin-left:0"><div class="update"><div class="giam"><button class="_1"><i class="fa-solid fa-minus"></i></button><div class="_2"><input type="text" name="" id="" value=1></div><button class="_3"><i class="fa-solid fa-plus"></i></button></div></div></div><div class="right3-right" style="margin-right:0"><span>' + productPrice + '</span></div></div></div></div></div>';
        addshoppingdetail.innerHTML = cont;
        cartbody.append(addshoppingdetail);

        var quantityElement = addshoppingdetail.querySelector("._2 input");
        var decreaseBtn = addshoppingdetail.querySelector("button._1");
        var increaseBtn = addshoppingdetail.querySelector("button._3");

        var quantity = parseInt(quantityElement.value);
        decreaseBtn.addEventListener('click', function () {
            if (quantity > 1) {
                quantity--;
                quantityElement.value = quantity;
            }
            Update(quantityElement, productPrice, quantity);
            updateTotalQuantity();
            total();
            updateLocalStorage(itemId, quantity);

        });

        increaseBtn.addEventListener('click', function () {
            quantity++;
            quantityElement.value = quantity;
            Update(quantityElement, productPrice, quantity);
            updateTotalQuantity();
            total();
            updateLocalStorage(itemId, quantity);

        });
    }

    function Update(quantityElement, productPrice, quantity) {
        var quanti = parseInt(quantity); // Parse the quantity to integer
        var totalprices = quantityElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        var totalPriceElement = totalprices.querySelector('.right3-right span');
        var tongc = parseInt(productPrice) * quanti * 1000;
        totalPriceElement.innerText = tongc.toLocaleString('de-DE');

        // Lưu lại số lượng mới vào localStorage
        updateLocalStorage(itemId, quantity);
    }

    // Cập nhật số lượng mới vào localStorage
    function updateLocalStorage(itemId, quantity) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingProductIndex = cart.findIndex(item => item.id === itemId);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quanti = quantity; // Cập nhật số lượng
        } else {
            cart.push({ id: itemId, img: productImg, name: productName, price: productPrice, size: selectedSize, color: selectedColor, quanti: quantity });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProductIndex = cart.findIndex(item => item.id === itemId);
    if (existingProductIndex !== -1) {
        
    } else {
        
        cart.push({ id: itemId, img: productImg, name: productName, price: productPrice, size: selectedSize, color: selectedColor, quanti: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    total();
    updateTotalQuantity();
    deletaCart();
}

// -----------totalprice-----------------
function total() {
    var carItem = document.querySelectorAll(".shopping-body .shoppingdetail")
    var sum = 0
    for (var i = 0; i < carItem.length; i++) {
        var inputValue = carItem[i].querySelector('div._2 input').value
        var price = carItem[i].querySelector('.right3-right span').innerText
        pricenumber = parseInt(price.replace(/\D/g, ''));
        sum = sum + parseInt(pricenumber)
    }
    // if(sum > 1000000){
    //     sum = sum - sum*0.1;
    // }
    var tongTien = document.querySelector('.money b')
    tongTien.innerText = sum.toLocaleString('de-DE')

}
function calculateTotalQuantity() {
    var cartbody = document.querySelector(".shopping-body");
    var cartItems = cartbody.querySelectorAll('.shoppingdetail');
    var totalQuantity = 0;

    cartItems.forEach(function (item) {
        var quantityElement = item.querySelector('._2 input');
        var quantity = parseInt(quantityElement.value);
        totalQuantity += quantity;
    });

    return totalQuantity;
}
function updateTotalQuantity() {
    var totalQuantity = calculateTotalQuantity();
    var totalQuantitySpan = document.querySelector('.soluongm span');

    if (totalQuantitySpan) {
        totalQuantitySpan.textContent = totalQuantity.toString();
    }
}
//---------delete--------------
function deletaCart() {
    var carItem = document.querySelectorAll(".shopping-body .shoppingdetail")
    for (var i = 0; i < carItem.length; i++) {
        var productT = document.querySelectorAll('.right1 .fa-xmark')
        productT[i].addEventListener('click', function (event) {
            var btnItem = event.target
            var carItemR = btnItem.parentElement.parentElement.parentElement.parentElement
            carItemR.remove();
            total();
            updateTotalQuantity();

        })
    }
}


let size_btns = document.querySelectorAll('.size-square')
size_btns.forEach(size => {
    size.addEventListener('click', () => {
        let divParent = size.parentElement
        let sizes = divParent.querySelectorAll('.size-square')
        let temp = size.textContent
        size.textContent = sizes[0].textContent
        sizes[0].textContent = temp
    })
})
let color_btns = document.querySelectorAll('.color-circle')
color_btns.forEach(color => {
    color.addEventListener('click', () => {
        let getSrc = color.getElementsByTagName('img')[0]
        let divParent = color.parentElement        
        let colors = divParent.querySelectorAll('.color-circle img')
        let temp = getSrc.src
        getSrc.src = colors[0].src
        colors[0].src = temp
        let SrcColor = colors[0].src
        let start = SrcColor.indexOf('colors/') + 7
        let end = SrcColor.indexOf('.webp')
        let Color = SrcColor.slice(start, end)
        let Imgs = divParent.parentElement.parentElement.previousSibling.previousSibling.querySelectorAll('img')
        
        Imgs.forEach(img => {
            let a = img.src
            img.src = a.slice(0, a.indexOf('-')) + `-${Color}.webp`
        })
    })
})



const tt = document.querySelector(".bd")
console.log(tt)
