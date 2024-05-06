let products = null
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data
        addDataToHTML()
    })
let listProduct = document.querySelector('.product-grid')
function addDataToHTML() {

    products.forEach(product => {
        if (product.sale > 0) {
            //create product
            let newProduct = document.createElement('div')
            newProduct.classList.add('product')
            var data_name = product.name
            newProduct.setAttribute('data-name', data_name)
            var data_price = product.price[0]
            data_price = Number(data_price.substring(0, data_price.length - 1).replace(',', ''))
            newProduct.setAttribute("data-price", data_price)
            //create img product
            let imgProduct = document.createElement('a')
            imgProduct.href = 'ProductDetails.html?id=' + product.id
            imgProduct.classList.add('product-img')
            imgProduct.innerHTML = `
                <img src="assets/img/Clothes/${product.image[0]}">
                <img class="rear-img" src="assets/img/Clothes/${product.image[1]}">
            `;
            //add img in product
            newProduct.appendChild(imgProduct)

            //create infoproduct
            let infoProduct = document.createElement('div')
            infoProduct.classList.add('product-info')
            let ProductName = ""
            if (product.name.length > 30) {
                ProductName = product.name.slice(0, 27)
                ProductName += '...'
            }
            else {
                ProductName = product.name
            }
            infoProduct.innerHTML = `
                <a class="product-name" href="ProductDetails.html?id=${product.id}">
                    ${ProductName}
                </a>                   
            `
            //add infoproduct in product
            newProduct.appendChild(infoProduct)

            //create price
            let priceProduct = document.createElement('div')
            priceProduct.classList.add('product-price')
            if (product.price.length > 1) {
                priceProduct.innerHTML = `
                <span class="price-now onsale">${product.price[0]}</span>
                <span class="price-before"><del>${product.price[1]}</del></span>
                `
            }
            else {
                priceProduct.innerHTML = `
                <span class="price-now">${product.price[0]}</span>
                `
            }
            //add price in product
            infoProduct.appendChild(priceProduct)


            //create button buynow
            let addcart = document.createElement('a')
            addcart.innerHTML = `
                <button class="product-btn">THÊM VÀO GIỎ</button>
            `
            //add button buynow in info
            infoProduct.appendChild(addcart)


            //create panel
            let panelproduct = document.createElement('div')
            panelproduct.classList.add('product-panel')
            //add heart in panel
            panelproduct.innerHTML = `
                <i class="fa-solid fa-heart hearted"></i>
            `
            //create list-color
            let listcolor = document.createElement('i')
            listcolor.classList.add('select-color')
            product.color.forEach(x => {
                let color = document.createElement('div')
                color.classList.add('color-circle')
                color.innerHTML = `
                <img src="assets/img/colors/${x}" alt="">
                `
                listcolor.appendChild(color)
            })
            let colors = listcolor.getElementsByTagName('div')
            colors[0].classList.add('chosen')

            //add list-color in panel
            panelproduct.appendChild(listcolor)

            if (product.size.length != 0) {
                let listsize = document.createElement('i')
                listsize.classList.add('select-size')
                product.size.forEach(x => {
                    let size = document.createElement('span')
                    size.classList.add('size-square')
                    size.innerHTML = `${x}`
                    listsize.appendChild(size)
                })
                let sizes = listsize.getElementsByTagName('span')
                sizes[0].classList.add('chosen')


                //add list-size in panel
                panelproduct.appendChild(listsize)
            }
            //create list-size


            //add panel in info
            infoProduct.appendChild(panelproduct)

            //if sale add sale in product
            if (product.sale > 0) {
                let sale = document.createElement('span')
                sale.classList.add('sale')
                sale.innerHTML = `-${product.sale}%`
                newProduct.appendChild(sale)
            }

            //add product in class product-grid
            listProduct.append(newProduct)
        }



    })

}
function Animation() {
    size_btns = document.querySelectorAll('.size-square')
    size_btns.forEach(size => {
        size.addEventListener('click', () => {
            let divParent = size.parentElement
            let sizes = divParent.querySelectorAll('.size-square')
            let temp = size.textContent
            size.textContent = sizes[0].textContent
            sizes[0].textContent = temp
        })
    })
    color_btns = document.querySelectorAll('.color-circle')
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
            let Imgs = divParent.parentElement.parentElement.previousSibling.querySelectorAll('img')

            Imgs.forEach(img => {
                let a = img.src
                img.src = a.slice(0, a.indexOf('-')) + `-${Color}.webp`
            })
        })
    })
    //rename product card
    ProductGrid = document.querySelector('.product-grid')
    ProductItem = document.querySelectorAll('.product')
    let widthProductGrid = ProductGrid.offsetWidth
    widthProductGrid = ProductGrid.offsetWidth
    if (widthProductGrid < 330) {
        ProductItem.forEach(product => {

            let namepro = product.querySelector('.product-name')
            let nameContent = namepro.textContent.trim()
            let lenContent = nameContent.length
            if (lenContent > 16) {
                let data_name = product.getAttribute('data-name')
                namepro.textContent = data_name.slice(0, 13) + '...'
            }
        })

    }
    else {
        if (widthProductGrid < 380) {
            ProductItem.forEach(product => {

                let namepro = product.querySelector('.product-name')
                let nameContent = namepro.textContent.trim()
                let lenContent = nameContent.length
                if (lenContent > 20) {
                    let data_name = product.getAttribute('data-name')
                    namepro.textContent = data_name.slice(0, 17) + '...'
                }
            })
        }
        else {
            if (widthProductGrid < 580) {
                ProductItem.forEach(product => {

                    let namepro = product.querySelector('.product-name')
                    let nameContent = namepro.textContent.trim()
                    let lenContent = nameContent.length
                    if (lenContent > 23) {
                        let data_name = product.getAttribute('data-name')
                        namepro.textContent = data_name.slice(0, 20) + '...'
                    }

                })

            }

            else {
                if (widthProductGrid < 912) {
                    ProductItem.forEach(product => {
                        let namepro = product.querySelector('.product-name')
                        let data_name = product.getAttribute('data-name')
                        namepro.textContent = data_name
                    })

                }
                else {
                    ProductItem.forEach(product => {
                        let namepro = product.querySelector('.product-name')

                        let data_name = product.getAttribute('data-name')
                        namepro.textContent = data_name
                        if (data_name.length > 30)
                            namepro.textContent = data_name.slice(0, 27) + '...'
                    })
                }
            }
        }
    }

    window.addEventListener('resize', () => {
        widthProductGrid = ProductGrid.offsetWidth
        if (widthProductGrid < 330) {
            ProductItem.forEach(product => {

                let namepro = product.querySelector('.product-name')
                let nameContent = namepro.textContent.trim()
                let lenContent = nameContent.length
                if (lenContent > 16) {
                    let data_name = product.getAttribute('data-name')
                    namepro.textContent = data_name.slice(0, 13) + '...'
                }
            })

        }
        else {
            if (widthProductGrid < 380) {
                ProductItem.forEach(product => {

                    let namepro = product.querySelector('.product-name')
                    let nameContent = namepro.textContent.trim()
                    let lenContent = nameContent.length
                    if (lenContent > 20) {
                        let data_name = product.getAttribute('data-name')
                        namepro.textContent = data_name.slice(0, 17) + '...'
                    }
                })
            }
            else {
                if (widthProductGrid < 580) {
                    ProductItem.forEach(product => {

                        let namepro = product.querySelector('.product-name')
                        let nameContent = namepro.textContent.trim()
                        let lenContent = nameContent.length
                        if (lenContent > 23) {
                            let data_name = product.getAttribute('data-name')
                            namepro.textContent = data_name.slice(0, 20) + '...'
                        }

                    })

                }

                else {
                    if (widthProductGrid < 912) {
                        ProductItem.forEach(product => {
                            let namepro = product.querySelector('.product-name')
                            let data_name = product.getAttribute('data-name')
                            namepro.textContent = data_name
                        })

                    }
                    else {
                        ProductItem.forEach(product => {
                            let namepro = product.querySelector('.product-name')

                            let data_name = product.getAttribute('data-name')
                            namepro.textContent = data_name
                            if (data_name.length > 30)
                                namepro.textContent = data_name.slice(0, 27) + '...'
                        })
                    }
                }
            }
        }
    })
    //sort
    let product_cards_container = document.querySelector('.product-grid')
    let product_cards = document.querySelectorAll('.product')
    const defaultt = Array.from(product_cards)
    let select_condition = document.querySelector('select')
    let arr_products = []
    arr_products.push(...defaultt)
    select_condition.onchange = function () {
        let condition = select_condition.value
        if (condition == "Default") {
            while (product_cards_container.firstChild) {
                product_cards_container.removeChild(product_cards_container.firstChild)
            }
            product_cards_container.append(...defaultt)
        }
        if (condition == "LowToHigh") {
            SortProduct(product_cards_container, arr_products, true)
        }
        if (condition == "HighToLow") {
            SortProduct(product_cards_container, arr_products, false)
        }


    }
    function SortProduct(container, defaultt, asc) {
        let dm, sortli;
        dm = asc ? 1 : -1;
        sortli = defaultt.sort((a, b) => {
            const a_price = Number(a.getAttribute('data-price'));
            const b_price = Number(b.getAttribute('data-price'));

            return a_price > b_price ? (1 * dm) : (-1 * dm);
        });
        while (container.firstChild) { container.removeChild(container.firstChild); }
        container.append(...sortli);
    }
    //header
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
    //footer
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
    const btn = document.querySelectorAll('.product button.product-btn')
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
                    selectedSize = SIZE + " /";
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
            var cont = '<div class="shoppingdetail" data-id="' + itemId + '"><div class="cart-view"><div class="left"><img src="' + productImg + '" alt=""></div><div class="right"><div class="right1"><span style="margin-left:0">' + productName + '</span><i class="fa-solid fa-xmark" style="margin-right:0"></i></div><div class="right2"><span>' + selectedSize + '</span>  <img src="' + selectedColor + '" alt="" class = "shc"> </div><div class="right3"><div class="right3-left" style="margin-left:0"><div class="update"><div class="giam"><button class="_1"><i class="fa-solid fa-minus"></i></button><div class="_2"><input type="text" name="" id="" value=1></div><button class="_3"><i class="fa-solid fa-plus"></i></button></div></div></div><div class="right3-right" style="margin-right:0"><span>' + productPrice + '</span></div></div></div></div></div>';
            addshoppingdetail.innerHTML = cont;
            cartbody.append(addshoppingdetail);

            var quantityElement = addshoppingdetail.querySelector("._2 input");
            var decreaseBtn = addshoppingdetail.querySelector("button._1");
            var increaseBtn = addshoppingdetail.querySelector("button._3");

            let quantity = 1;


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
}
const carbtn = document.querySelector(".fa-xmark");
const carshow = document.querySelector(".fa-shopping-cart")
carshow.addEventListener("click", function () {
    document.querySelector(".shopping-cart").style.right = "0";
})
carbtn.addEventListener("click", function () {

    document.querySelector(".shopping-cart").style.right = "-100%";
})
setTimeout(Animation, 500);