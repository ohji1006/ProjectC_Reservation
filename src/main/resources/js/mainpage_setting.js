const PRODUCT_START_IDX = 0;
const TOTAL_LIST_CATEGORY_ID = 0;

function initMainPage() {
    clearCategoryList();
    setCategoryList();

    clearProductList();
    setProductListWithCategory(PRODUCT_START_IDX, TOTAL_LIST_CATEGORY_ID);

    setPromotionList();

    addEventListenerToCategoryTab();
    addEventListenerToAppendProductBtn();
}

function addEventListenerToCategoryTab() {
    var tabElement = document.querySelector(".event_tab_lst.tab_lst_min");
    console.log(tabElement);
    tabElement.addEventListener("click", initProductList);
}

function addEventListenerToAppendProductBtn() {
    var addProductButton = document.querySelector(".more .btn");
    addProductButton.addEventListener("click", appendProductItemList);
}

function initProductList(event) {
    clearProductList();
    clearProductCount();
    removeCategoryProperty();
    
    addCategoryProperty(event.target);
    setProductListWithEventTarget(event.target);
}

function addCategoryProperty(targetNode){
    if (targetNode.nodeName === 'LI') {
        targetNode.firstElementChild.classList.add('active');
        return;
    }

    if (targetNode.nodeName === 'A') {
        targetNode.classList.add('active');
        return;
    }
    
    if (targetNode.nodeName === 'SPAN') {
        targetNode.parentElement.classList.add('active');
        return;
    }
}

function setProductListWithEventTarget(targetNode){
    if (targetNode.nodeName === 'LI') {
        setProductListWithCategory(PRODUCT_START_IDX, parseInt(targetNode.dataset.categoryId));
        return;
    }

    if (targetNode.nodeName === 'A') {
        setProductListWithCategory(PRODUCT_START_IDX, parseInt(targetNode.parentElement.dataset.categoryId));
        return;
    }
    
    if (targetNode.nodeName === 'SPAN') {
        setProductListWithCategory(PRODUCT_START_IDX, parseInt(targetNode.parentElement.parentElement.dataset.categoryId));
        return;
    }
}

async function appendProductItemList() {
    var productList = await getProductList(getCurrentProductCount(), getCurrentCategoryId());
    var productHtml = makeProductHTML(productList['items']);

    setProductCountWithProduct(productList);
    appendProductItem(productHtml);

    removeAppendBtnIfNeeded();
}

function removeAppendBtnIfNeeded(){
    if (isPosibleToAppendProduct()) {
        return;
    }

    document.querySelector(".more .btn").remove();
}

function isPosibleToAppendProduct() {
    if (getCurrentProductCount() < getTotalProductCount()) {
        return true;
    }
    return false;
}

function getCurrentProductCount() {
    return parseInt(document.querySelector(".product_count").dataset.currentProductCount);
}

function getCurrentCategoryId() {
    var activeAnchor = document.querySelector(".active");
    return parseInt(activeAnchor.parentElement.dataset.categoryId);
}

function getTotalProductCount() {
    return parseInt(document.querySelector(".product_count").dataset.totalProductCount);
}

async function setCategoryList() {
    var categoryList = await getCategoryListJson();
    var categoryHtml = makeCategoryHTMLArray(categoryList['items']);

    setCategoryHTML(categoryHtml);
}

async function setPromotionList() {
    var promotion = await getPromotionListJson();
    var promotionHtml = makePromotionHTMLArray(promotion['items']);

    setPromotionHTML(promotionHtml);

    initSlidingPromotionAnimation();
    slidePromtionAnimation();
}

async function setProductListWithCategory(start, categoryId) {
    var productList = await getProductList(start, categoryId);
    var productHtml = makeProductHTML(productList['items']);

    setProductCountWithProduct(productList);
    appendProductItem(productHtml);
}


function setPromotionHTML(promotionHtml) {
    var slidingUL = document.querySelector(".visual_img");

    promotionHtml.forEach((promotionHTML) => {
        slidingUL.innerHTML += promotionHTML;
    });
}

function getPromotionListJson() {
    return new Promise((resolve) => {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", () => {
            resolve(JSON.parse(httpRequest.responseText));
        });
        httpRequest.open("GET", "/reservation/api/promotions");
        httpRequest.send();
    });
}

function getCategoryListJson() {
    return new Promise(function (resolve) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", () => {
            resolve(JSON.parse(httpRequest.responseText));
        });
        httpRequest.open("GET", "/reservation/api/categories");
        httpRequest.send();
    });
}


function setCategoryHTML(categoryHtml) {
    var targetTab = document.querySelector(".event_tab_lst");

    clearElementHtml(targetTab);

    categoryHtml.forEach((categoryHtml) => {
        targetTab.innerHTML += categoryHtml;
    });

    document.querySelector(".anchor").classList.add('active');
}

function getProductList(start, categoryId) {
    var requestURL = makeProductRequestURL(start, categoryId);

    return new Promise(function (resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", () => {
            resolve(JSON.parse(httpRequest.responseText));
        });
        httpRequest.open("GET", requestURL);
        httpRequest.send();
    });
}

function makeProductRequestURL(start, categoryId) {
    if (categoryId == TOTAL_LIST_CATEGORY_ID) {
        return `/reservation/api/products?start=${start}`;
    }
    return `/reservation/api/products?categoryId=${categoryId}&start=${start}`;
}

function makeProductHTML(items) {
    var templateHtml = document.querySelector("#itemList").innerHTML;
    var productHtml = new Array();

    items.forEach((item, index) => {
        productHtml[index] = templateHtml.replace("${productId}", item['productId'])
            .replace("${productDescription}", item['productDescription'])
            .replace("${productImageUrl}", item['productImageUrl'])
            .replace("${productDescription}", item['productDescription'])
            .replace("${placeName}", item['placeName'])
            .replace("${productContent}", item['productContent']);
    });

    return productHtml;
}

function makePromotionHTMLArray(items) {
    var pmHtmlArray = new Array();
    var templateHtml = document.querySelector("#promotionItem").innerHTML;

    items.forEach((promotionItem) => {
        pmHtmlArray.push(
            templateHtml.replace('${productId}', promotionItem['productId'])
                .replace('${productImageUrl}', promotionItem['productImageUrl'])
        );
    });

    return pmHtmlArray;
}

function makeCategoryHTMLArray(categoryItems) {
    var categoryHtml = new Array();
    var templateHtml = document.querySelector("#categoryItem").innerHTML;

    categoryHtml[0] = templateHtml.replace("${category_id}", 0)
        .replace("${category_name}", "전체리스트");
    categoryItems.forEach((item) => {
        categoryHtml.push(
            templateHtml.replace("${category_id}", item['id'])
                .replace("${category_name}", item['name'])
        );
    });

    return categoryHtml;
}

function setProductCountWithProduct(productJson) {
    var productTotalCount = productJson['totalCount'];
    var productCount = productJson['items'].length;
    var productCountElement = document.querySelector(".product_count");

    productCountElement.innerHTML = productTotalCount + "개";
    productCountElement.dataset.totalProductCount = productTotalCount;
    productCountElement.dataset.currentProductCount = parseInt(productCountElement.dataset.currentProductCount) + productCount;
}

function appendProductItem(productHtml) {
    var itemBoxList = document.querySelectorAll(".lst_event_box");

    productHtml.forEach((productHtml, idx) => {
        if (idx % 2 === 0) {
            itemBoxList[0].innerHTML += productHtml;
        }
        else {
            itemBoxList[1].innerHTML += productHtml;
        }
    });

}

function removeCategoryProperty() {
    var selectedCategoryAnchor = document.querySelector(".active");

    selectedCategoryAnchor.classList.remove("active");
}

function clearProductCount() {
    var productCountElement = document.querySelector(".product_count");

    productCountElement.dataset.totalProductCount = 0;
    productCountElement.dataset.currentProductCount = 0;
}

function clearCategoryList() {
    var category = document.querySelectorAll(".event_tab_lst");

    clearElementHtml(category);
}
function clearProductList() {
    var itemBoxList = document.querySelectorAll(".lst_event_box");

    Array.from(itemBoxList).forEach((itemBox) => { clearElementHtml(itemBox) });
}

function clearElementHtml(targetElement) {
    targetElement.innerHTML = "";
}