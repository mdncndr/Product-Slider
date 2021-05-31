
//Next 
document.querySelector('#next').addEventListener('click', getJSON);
let itemId = 10;

//Fetch JSON for Next
function getJSON() {

    fetch("products.json").then(response => response.json()).then(products => {

        let itemsNumber = itemId;

        if (itemsNumber <= 20 && itemsNumber >= 5) {
            const div = document.querySelector('.content');
            while (div.firstChild) div.firstChild.remove();
            for (let i = itemsNumber; i < itemsNumber + 5; i++) {

                if (i < products.length) {

                    node = `
                        <div class="item">
                            <div class="product-item">
                                <div class="product-card card-image" data-ordernumber="  ${products[i].productId} " >
                                    <div class="card-content ">
                                        <div class="product-info">
                                               <span class="sale" > -% </span>
                                                <span class="like" > <i class=" far fa-heart"></i> ${products[i].params.likeCount}</span>
                                                <span class="man-logo">
                                                    <img  src="${products[i].params.manLogo}" alt="" ></span>
                                                    <div class="product-image">
                                            <a href="${products[i].url}" title="${products[i].name}" >
                                                <span class="image-element">
                                                <span class="image-media">
                                                    <img  src="${products[i].imageS}">
                                                </span>
                                                </span>
                                            </a> </div>
                                            <div  class="product-title">
                                            <a href="${products[i].url}" title="${products[i].name}">${products[i].name} </a> </div>
                                            <div class="params">
                                                <span class="land">${products[i].params.land} </span>
                                                <span class="region"> | ${products[i].params.region}</span>
                                                <span class="art"> | ${products[i].params.art}</span>
                                                <span class="rebsorte">| ${products[i].params.rebsorte}</span>
                                            </div>
                                            <div class="price-info"  >
                                                <div class="product-price">
                                                    <span class="price-text">
                                                        <strong>${products[i].price}  € * </strong>
                                                    </span >
                                                    <span class="old-price" >${products[i].oldPriceText} </span>
                                                <div class="price-unit">
                                                    <span class="base-price"> ${products[i].params.basePrice} </span>
                                                    <span><br>
                                                        <a title="${products[i].params.taxText}" style="text-decoration:underline;font-size: 11px;color:#999;">${products[i].params.taxText}</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;



                    document.querySelector('.content').innerHTML += node;

                }
            }

            itemId += 5;
        } else {
            itemId = 10;
        }
    });

};



//Previous 
document.querySelector('#prev').addEventListener('click', getJSON_prev);

//Fetch JSON for Previous
function getJSON_prev() {

    fetch("products.json").then(response => response.json()).then(products => {


        let itemsNumber = itemId;

        if (itemsNumber >= 5 && itemsNumber <= 20) {
            const div = document.querySelector('.content');
            while (div.firstChild) div.firstChild.remove();

            for (let i = itemsNumber; i < itemsNumber + 5; i++) {


                if (i < products.length) {

                    node = `
                        <div class="item">
                            <div class="product-item">
                                <div class="product-card card-image" data-ordernumber="  ${products[i].productId} " >
                                    <div class="card-content ">
                                        <div class="product-info">
                                                <span class="sale">  -%</span>
                                                <span class="like" ><i class=" far fa-heart"></i>  ${(products[i].params.likeCount)}  </span>
                                                <span class="man-logo">
                                                    <img  src="${products[i].params.manLogo}" alt=""  ></span>
                                                    <div  class="product-image">
                                            <a href="${products[i].url}" title="${products[i].name}" >
                                                <span class="image-element">
                                                <span class="image-media">
                                                    <img  src="${products[i].imageS}">
                                                </span>
                                                </span>
                                            </a> </div>
                                            <div class="product-title">
                                            <a  href="${products[i].url}" title="${products[i].name}" >${products[i].name} </a> </div>
                                            <div class="params">
                                                <span class="land">${products[i].params.land} </span>
                                                <span class="region"> | ${products[i].params.region}</span>
                                                <span class="art"> | ${products[i].params.art}</span>
                                                <span class="rebsorte">| ${products[i].params.rebsorte}</span>
                                            </div>
                                            <div class="price-info" >
                                                <div class="product-price">
                                                    <span class="price-text">
                                                        <strong>${products[i].price}  € * </strong>
                                                    </span >
                                                    <span class="old-price">${products[i].oldPriceText} </span>
                                                <div class="price-unit">
                                                    <span class="base-price"> ${products[i].params.basePrice} </span>
                                                    <span><br>
                                                        <a title="${products[i].params.taxText}" style="text-decoration:underline;font-size: 11px;color:#999;">${products[i].params.taxText}</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    document.querySelector('.content').innerHTML += node;

                }
            }

            itemId -= 5;
        } else {
            itemId = 10;
        }
    });

};



