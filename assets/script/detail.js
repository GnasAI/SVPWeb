let products = null
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data
        showDetails()
    })
function showDetails() {
    let productID = new URLSearchParams(window.location.search).get('id')
    let Product = products.filter(value => {
        return value.id == productID
    })[0]
    if (!Product) {
        window.location.href = "ListProduct.html"
    }
    let showImg = document.querySelector('.img-show')
    let select_img = document.querySelector('.select-img')

    Product.image.forEach(img => {
        img_show = document.createElement('img')
        img_show.src = `assets/img/Clothes/${img}`
        let select_img_item = document.createElement('div')
        select_img_item.classList.add('select-img-item')
        select_img_item.innerHTML = `<img src="assets/img/Clothes/${img}" alt="">`
        showImg.appendChild(img_show)
        select_img.appendChild(select_img_item)
    })
    let mirror_e = document.createElement('div')
    mirror_e.classList.add('hide')
    mirror_e.id = 'mirror'
    showImg.appendChild(mirror_e)
    select_img.childNodes[1].classList.add('activated')

    let content = document.querySelector('.details-content')
    let nameProduct = content.getElementsByTagName('h1')[0]
    nameProduct.innerText = Product.name
    let pro_price = document.querySelector('.pro-price')

    if (Product.price.length > 1) {
        pro_price.innerHTML = `
           <span class ="main-price">${Product.price[0]}</span><del>${Product.price[1]}</del>
        `
    }
    else {
        pro_price.innerHTML = ` <span class ="main-price">${Product.price[0]}</span>`
    }
    let pro_sizes = document.querySelector('.details-size')
    if (Product.size.length == 0) {
        pro_sizes.classList.add('hidden')
    }
    else {
        let sizeList = document.querySelector('.size-list')
        Product.size.forEach(size => {
            let size_item = document.createElement('div')
            size_item.classList.add('size-item')
            size_item.innerHTML = `
                <input type="radio" id="${size}" value="${size}" name="option-s">
                <label for="${size}">${size}</label>
            `
            sizeList.appendChild(size_item)
        })
        pro_sizes.appendChild(sizeList)
    }
    let pro_colors = document.querySelector('.color-list')

    Product.color.forEach((color, index) => {
        let color_item = document.createElement('div')
        color_item.classList.add('color-circle')
        if (index == 0) {
            color_item.classList.add('activated')
        }
        color_item.innerHTML = `
            <img src="assets/img/colors/${color}">
        `
        pro_colors.appendChild(color_item)
    })

}


function Animation() {
    const listImg = document.querySelector('.img-show')
    const imgs = document.querySelectorAll('.img-show img')
    const select_imgs = document.querySelectorAll('.select-img .select-img-item')
    let index = 0
    const len = imgs.length - 1
    let pre = document.getElementById('pre-btn')
    let nxt = document.getElementById('nxt-btn')
    let mirror = document.getElementById('mirror')
    listImg.style.left = '0px'

    //pre btn
    pre.onclick = function () {
        index--
        if (index < 0) {
            index = len
        }
        changeImg()
    }
    //nxt btn
    nxt.onclick = function () {
        index++
        if (index > len) {
            index = 0
        }
        changeImg()
    }
    //auto change img
    let autoChange = setInterval(() => { nxt.click() }, 5000)
    //change img
    function changeImg() {
        let checkLeft = imgs[index].offsetLeft;
        listImg.style.left = -checkLeft + 'px'
        let lastActive = document.querySelector('.select-img-item.activated')
        lastActive.classList.remove('activated')
        select_imgs[index].classList.add('activated')
        clearInterval(autoChange)
        autoChange = setInterval(() => { nxt.click() }, 5000)
    }
    select_imgs.forEach((div, key) => {
        div.addEventListener('click', function () {
            index = key
            changeImg()
        })
    })
    //zoom img
    imgs.forEach(function (img) {
        img.addEventListener('mousemove', function (e) {
            mirror.classList.remove('hide')
            var imgSrc = e.target.getAttribute('src')
            mirror.style.backgroundImage = `url(${imgSrc})`
            var perMouseOfW = (e.offsetX / this.offsetWidth) * 100
            var perMouseOfH = (e.offsetY / this.offsetHeight) * 100
            mirror.style.top = `${e.clientY}px`
            mirror.style.left = `${e.clientX}px`
            mirror.style.backgroundSize = `900px 900px`
            mirror.style.backgroundPosition = `${perMouseOfW}% ${perMouseOfH}%`
            clearInterval(autoChange)
        })
        img.addEventListener('mouseleave', function (e) {
            mirror.classList.add('hide')
            autoChange = setInterval(() => { nxt.click() }, 5000)
        })
    })

    const colorBTNs = document.querySelectorAll('.details-color .color-list .color-circle')
    colorBTNs.forEach(color => {
        color.addEventListener('click', () => {
            let colorActive = document.querySelector('.color-circle.activated')
            colorActive.classList.remove('activated')
            color.classList.add('activated')
            let getColorImg = color.getElementsByTagName('img')[0]
            let getsrc = getColorImg.src
            let start = getsrc.indexOf('colors/') + 7
            let end = getsrc.indexOf('.webp')
            let ColorSrc = getsrc.slice(start, end)

            imgs.forEach(img => {
                let a = img.src
                img.src = a.slice(0, a.indexOf('-')) + `-${ColorSrc}.webp`

            })

            select_imgs.forEach(select_img => {
                let select_img_child = select_img.getElementsByTagName('img')[0]
                let a = select_img_child.src
                select_img_child.src = a.slice(0, a.indexOf('-')) + `-${ColorSrc}.webp`
            })
        })
    })
    size_items = document.querySelectorAll('.size-item')
    if (size_items) {
        size_items.forEach(item => {
            item.addEventListener('click', () => {
                size_item_active = document.querySelector('.size-item.active')
                if (size_item_active) {
                    size_item_active.classList.remove('active')
                }
                item.classList.add('active')
            })
        })
    }
    const quantity = document.querySelector('.box-num')
    const maxQ = Number(quantity.getAttribute('max'))
    const minQ = Number(quantity.getAttribute('min'))
    const stepQ = Number(quantity.getAttribute('step'))
    const valueInput = quantity.querySelector('input')
    let valueQ = Number(valueInput.value)

    let Pbtn = document.querySelector('#plus')
    let Mbtn = document.querySelector('#minus')

    Pbtn.addEventListener('click', () => {

        if (valueQ < maxQ && valueQ >= minQ) {
            valueQ += stepQ
            valueInput.value = valueQ
            Mbtn.classList.remove('ban')
        }
        if (valueQ == maxQ) { Pbtn.classList.add('ban') }


    })
    Mbtn.addEventListener('click', () => {
        if (valueQ <= maxQ && valueQ > minQ) {
            valueQ -= stepQ
            valueInput.value = valueQ
            Pbtn.classList.remove('ban')
        }
        if (valueQ == minQ) { Mbtn.classList.add('ban') }
    })


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
    let color_btns = document.querySelectorAll('.product .color-circle')
    console.log(color_btns)
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
            let Imgs = divParent.parentElement.parentElement.previousElementSibling.querySelectorAll('img')

            Imgs.forEach(img => {
                let a = img.src
                img.src = a.slice(0, a.indexOf('-')) + `-${Color}.webp`
            })
        })
    })
    let hearts_btn = document.querySelectorAll('.hearted')
    hearts_btn.forEach(heart => {
        heart.addEventListener('click', () => {
            if (heart.style.color != 'red') {
                heart.style.color = 'red'
            }
            else
                heart.style.color = 'unset'
        })

    })

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
    const btn = document.querySelectorAll('.ProductDetails button.cart-btn')
    const Buybtns = document.querySelectorAll('.ProductDetails button.buy-btn')
    Buybtns.forEach(function (button, index) {
        button.addEventListener('click', function (event) {
            {
                var btnItem = event.target
                var product = btnItem.parentElement.parentElement.parentElement
                console.log(product)

                var productImg = product.querySelector('img').src
                console.log(productImg)

                var productName = product.querySelector('.details-content h1').innerText
                console.log(productName)
                var productPrice = product.querySelector('.pro-price .main-price').innerText    
                console.log(productPrice)       
                 console.log(selectsize)
                var selectedSize = '';
                var sizeElement = product.querySelector('.size-item.chosen');
                if (sizeElement) {
                    var SIZE = sizeElement.innerText;
                    selectedSize = SIZE + " /";
                }
                console.log(selectedSize)



                var colors = product.querySelector('.color-circle.activated')
                var selectedColor = colors.querySelector('img').src
                console.log(selectedColor)
                var quantiti = product.querySelector('.box-num input').value;
                console.log(quantiti)   


                addcarts(productImg, productName, productPrice, selectedSize, selectedColor, quantiti)

            }
        })
    })
    function addcarts(productImg, productName, productPrice, selectedSize, selectedColor, quantiti) {
        var cartbody = document.querySelector(".shopping-body");
        var cartItems = cartbody.querySelectorAll('.shoppingdetail');

        var itemId = productName.replace(" ", '-') + '-' + selectedSize.replace(" ", '-') + '-' + selectedColor.replace(" ", '-'); // Generate unique ID
        prices = parseInt(productPrice.replace(/\D/g, ''));
        soluong = parseInt(quantiti)
        tong1sp = prices * quantiti;
        cuoicung = tong1sp.toLocaleString('de-DE')
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
            quantity += soluong;
            quantityElement.value = quantity;
            Update(quantityElement, productPrice, quantity);
        } else {
            var addshoppingdetail = document.createElement("div");
            addshoppingdetail.setAttribute('data-id', itemId);
            var cont = '<div class="shoppingdetail" data-id="' + itemId + '"><div class="cart-view"><div class="left"><img src="' + productImg + '" alt=""></div><div class="right"><div class="right1"><span style="margin-left:0">' + productName + '</span><i class="fa-solid fa-xmark" style="margin-right:0"></i></div><div class="right2"><span>' + selectedSize + '</span> <img src="' + selectedColor + '" alt="" class = "shc"> </div><div class="right3"><div class="right3-left" style="margin-left:0"><div class="update"><div class="giam"><button class="_1"><i class="fa-solid fa-minus"></i></button><div class="_2"><input type="text" name="" id="" value=' + quantiti + '></div><button class="_3"><i class="fa-solid fa-plus"></i></button></div></div></div><div class="right3-right" style="margin-right:0"><span>' + cuoicung + '</span></div></div></div></div></div>';
            addshoppingdetail.innerHTML = cont;
            cartbody.append(addshoppingdetail);
           
            

            var quantityElement = addshoppingdetail.querySelector("._2 input");
            var decreaseBtn = addshoppingdetail.querySelector("button._1");
            var increaseBtn = addshoppingdetail.querySelector("button._3");

            let quantity = quantiti;


            decreaseBtn.addEventListener('click', function () {
                if (quantity > 1) {
                    quantity--;
                    quantityElement.value = quantity;
                }
                Update(quantityElement, productPrice, quantity);
                updateTotalQuantity();
                total();
            });

            increaseBtn.addEventListener('click', function () {
                quantity++;
                quantityElement.value = quantity;
                Update(quantityElement, productPrice, quantity);
                updateTotalQuantity();
                total();
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
                cart[existingProductIndex].quanti = quantity; // Ghi đè số lượng hiện tại bằng số lượng mới
            } else {
                cart.push({ id: itemId, img: productImg, name: productName, price: productPrice, size: selectedSize, color: selectedColor, quanti: quantity });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        }      

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingProductIndex = cart.findIndex(item => item.id === itemId);
        if (existingProductIndex !== -1) {
            
        } else {
            cart.push({ id: itemId, img: productImg, name: productName, price: productPrice, size: selectedSize, color: selectedColor, quanti: quantiti });
        }
        localStorage.setItem('cart', JSON.stringify(cart));

        total();
        updateTotalQuantity();
        deletaCart();
        window.location.href = "cart.html";
    }
    let selectsize = document.querySelectorAll('.size-item')
    selectsize.forEach(item => {
        item.addEventListener('click', function () {
            selectsize.forEach(element => {
                element.classList.remove('chosen');
            });

            this.classList.add('chosen');
        });
    });
    btn.forEach(function (button, index) {
        button.addEventListener('click', function (event) {
            {
                var btnItem = event.target
                var product = btnItem.parentElement.parentElement.parentElement
                console.log(product)

                var productImg = product.querySelector('img').src
                console.log(productImg)

                var productName = product.querySelector('.details-content h1').innerText
                console.log(productName)
                var productPrice = product.querySelector('.pro-price .main-price').innerText    
                console.log(productPrice)       
                 console.log(selectsize)
                var selectedSize = '';
                var sizeElement = product.querySelector('.size-item.chosen');
                if (sizeElement) {
                    var SIZE = sizeElement.innerText;
                    selectedSize = SIZE + " /";
                }
                console.log(selectedSize)



                var colors = product.querySelector('.color-circle.activated')
                var selectedColor = colors.querySelector('img').src
                console.log(selectedColor)
                var quantiti = product.querySelector('.box-num input').value;
                console.log(quantiti)   


                addcart(productImg, productName, productPrice, selectedSize, selectedColor, quantiti)

            }
        })
    })
    function addcart(productImg, productName, productPrice, selectedSize, selectedColor, quantiti) {
        var cartbody = document.querySelector(".shopping-body");
        var cartItems = cartbody.querySelectorAll('.shoppingdetail');

        var itemId = productName.replace(" ", '-') + '-' + selectedSize.replace(" ", '-') + '-' + selectedColor.replace(" ", '-'); // Generate unique ID
        prices = parseInt(productPrice.replace(/\D/g, ''));
        soluong = parseInt(quantiti)
        tong1sp = prices * quantiti;
        cuoicung = tong1sp.toLocaleString('de-DE')
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
            quantity += soluong;
            quantityElement.value = quantity;
            Update(quantityElement, productPrice, quantity);
        } else {
            var addshoppingdetail = document.createElement("div");
            addshoppingdetail.setAttribute('data-id', itemId);
            var cont = '<div class="shoppingdetail" data-id="' + itemId + '"><div class="cart-view"><div class="left"><img src="' + productImg + '" alt=""></div><div class="right"><div class="right1"><span style="margin-left:0">' + productName + '</span><i class="fa-solid fa-xmark" style="margin-right:0"></i></div><div class="right2"><span>' + selectedSize + '</span> <img src="' + selectedColor + '" alt="" class = "shc"> </div><div class="right3"><div class="right3-left" style="margin-left:0"><div class="update"><div class="giam"><button class="_1"><i class="fa-solid fa-minus"></i></button><div class="_2"><input type="text" name="" id="" value=' + quantiti + '></div><button class="_3"><i class="fa-solid fa-plus"></i></button></div></div></div><div class="right3-right" style="margin-right:0"><span>' + cuoicung + '</span></div></div></div></div></div>';
            addshoppingdetail.innerHTML = cont;
            cartbody.append(addshoppingdetail);
           
            

            var quantityElement = addshoppingdetail.querySelector("._2 input");
            var decreaseBtn = addshoppingdetail.querySelector("button._1");
            var increaseBtn = addshoppingdetail.querySelector("button._3");

            let quantity = quantiti;


            decreaseBtn.addEventListener('click', function () {
                if (quantity > 1) {
                    quantity--;
                    quantityElement.value = quantity;
                }
                Update(quantityElement, productPrice, quantity);
                updateTotalQuantity();
                total();
            });

            increaseBtn.addEventListener('click', function () {
                quantity++;
                quantityElement.value = quantity;
                Update(quantityElement, productPrice, quantity);
                updateTotalQuantity();
                total();
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
                cart[existingProductIndex].quanti = quantity; // Ghi đè số lượng hiện tại bằng số lượng mới
            } else {
                cart.push({ id: itemId, img: productImg, name: productName, price: productPrice, size: selectedSize, color: selectedColor, quanti: quantity });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        }      

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let existingProductIndex = cart.findIndex(item => item.id === itemId);
        if (existingProductIndex !== -1) {
            
        } else {
            cart.push({ id: itemId, img: productImg, name: productName, price: productPrice, size: selectedSize, color: selectedColor, quanti: quantiti });
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
}
const carbtn = document.querySelector(".fa-xmark");
const carshow = document.querySelector(".fa-shopping-cart")
carshow.addEventListener("click", function () {
    document.querySelector(".shopping-cart").style.right = "0";
})
carbtn.addEventListener("click", function () {

    document.querySelector(".shopping-cart").style.right = "-100%";
})



setTimeout(Animation, 1000)