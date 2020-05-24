const PRODUCT_START_IDX = 0;
const TOTAL_LIST_CATEGORY_ID = 0;

function initMainPage() {
    clearCategoryList();
    setCategoryList();

    clearProductList();
    setProductCountAndProductList(PRODUCT_START_IDX, TOTAL_LIST_CATEGORY_ID);

    setPromotionList();

    addEventListenerToCategoryTab();
    addEventListenerToAppendProductListButton();
}

async function setCategoryList() {
    var categoryListJSON = await getCategoryListJsonFromServer();
    var categoryHtmlArray = makeCategoryHTMLArray(categoryListJSON['items']);
    setCategoryHTML(categoryHtmlArray);
}

async function setProductCountAndProductList(start, categoryId) {
    var productListJson = await getProductListJsonFromServer(start, categoryId);
    var productHtmlArray = makeProductHTMLArray(productListJson['items']);

    setProductCountWithProductList(productListJson);
    appendProductItemListToItemBox(productHtmlArray);
}

async function setPromotionList() {
    var promotionJSON = await getPromotionListJsonFromServer();
    var promotionHtmlArray = makePromotionHTMLArray(promotionJSON['items']);

    setPromotionHTML(promotionHtmlArray);

    initSlidingPromotionAnimation();
    slidePromtionAnimation();
}

function addEventListenerToCategoryTab() {
    var tabElement = document.querySelector(".event_tab_lst.tab_lst_min");
    console.log(tabElement);
    tabElement.addEventListener("click", setNewProductList);
}

function addEventListenerToAppendProductListButton() {
    var addProductButton = document.querySelector(".more .btn");
    addProductButton.addEventListener("click", appendMoreProductItemList);
}

function setNewProductList(event) {
    var targetNode = event.target;
    var targetNodeName = event.target.nodeName;

    clearProductList();
    clearProductCount();
    removeSelectedCategoryHighlight();

    if (targetNodeName === 'LI') {
        setProductCountAndProductList(PRODUCT_START_IDX, parseInt(targetNode.dataset.categoryId));
        targetNode.firstElementChild.classList.add('active');
    }
    else if (targetNodeName === 'A') {
        setProductCountAndProductList(PRODUCT_START_IDX, parseInt(targetNode.parentElement.dataset.categoryId));
        targetNode.classList.add('active');
    }
    else {
        setProductCountAndProductList(PRODUCT_START_IDX, parseInt(targetNode.parentElement.parentElement.dataset.categoryId));
        targetNode.parentElement.classList.add('active');
    }
}

async function appendMoreProductItemList() {
    var productListJson = await getProductListJsonFromServer(getCurrentProductCount(), getCurrentSelectedCategoryId());
    var productHtmlArray = makeProductHTMLArray(productListJson['items']);

    setProductCountWithProductList(productListJson);
    appendProductItemListToItemBox(productHtmlArray);

    removeAppendButtonIfNeeded();
}

function removeAppendButtonIfNeeded(){
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

function getCurrentSelectedCategoryId() {
    var activeAnchor = document.querySelector(".active");
    return parseInt(activeAnchor.parentElement.dataset.categoryId);
}

function getTotalProductCount() {
    return parseInt(document.querySelector(".product_count").dataset.totalProductCount);
}


function setPromotionHTML(promotionHtmlArray) {
    var slidingUL = document.querySelector(".visual_img");

    promotionHtmlArray.forEach((promotionHTML) => {
        slidingUL.innerHTML += promotionHTML;
    });
}

function getPromotionListJsonFromServer() {
    return new Promise((resolve) => {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", () => {
            resolve(JSON.parse(httpRequest.responseText));
        });
        httpRequest.open("GET", "/reservation/api/promotions");
        httpRequest.send();
    });
}

function getCategoryListJsonFromServer() {
    return new Promise(function (resolve) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", () => {
            resolve(JSON.parse(httpRequest.responseText));
        });
        httpRequest.open("GET", "/reservation/api/categories");
        httpRequest.send();
    });
}

function setCategoryHTML(categoryHtmlArray) {
    var targetTab = document.querySelector(".event_tab_lst");

    clearElementHtml(targetTab);

    categoryHtmlArray.forEach((categoryHtml) => {
        targetTab.innerHTML += categoryHtml;
    });

    document.querySelector(".anchor").classList.add('active');
}

function getProductListJsonFromServer(start, categoryId) {
    var requestURL = makeProductListRequestURL(start, categoryId);

    return new Promise(function (resolve, reject) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", () => {
            resolve(JSON.parse(httpRequest.responseText));
        });
        httpRequest.open("GET", requestURL);
        httpRequest.send();
    });
}

function makeProductListRequestURL(start, categoryId) {
    if (categoryId == TOTAL_LIST_CATEGORY_ID) {
        return `/reservation/api/products?start=${start}`;
    }
    return `/reservation/api/products?categoryId=${categoryId}&start=${start}`;
}

function makeProductHTMLArray(items) {
    var templateHtml = document.querySelector("#itemList").innerHTML;
    var productHtmlArray = new Array();

    items.forEach((item, index) => {
        productHtmlArray[index] = templateHtml.replace("${productId}", item['productId'])
            .replace("${productDescription}", item['productDescription'])
            .replace("${productImageUrl}", item['productImageUrl'])
            .replace("${productDescription}", item['productDescription'])
            .replace("${placeName}", item['placeName'])
            .replace("${productContent}", item['productContent']);
    });

    return productHtmlArray;
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
    var categoryHtmlArray = new Array();
    var templateHtml = document.querySelector("#categoryItem").innerHTML;

    categoryHtmlArray[0] = templateHtml.replace("${category_id}", 0)
        .replace("${category_name}", "전체리스트");
    categoryItems.forEach((item) => {
        categoryHtmlArray.push(
            templateHtml.replace("${category_id}", item['id'])
                .replace("${category_name}", item['name'])
        );
    });

    return categoryHtmlArray;
}

function setProductCountWithProductList(productJson) {
    var productTotalCount = productJson['totalCount'];
    var productCount = productJson['items'].length;
    var productCountElement = document.querySelector(".product_count");

    productCountElement.innerHTML = productTotalCount + "개";
    productCountElement.dataset.totalProductCount = productTotalCount;
    productCountElement.dataset.currentProductCount = parseInt(productCountElement.dataset.currentProductCount) + productCount;
}

function appendProductItemListToItemBox(productHtmlArray) {
    var itemBoxList = document.querySelectorAll(".lst_event_box");

    productHtmlArray.forEach((productHtml, idx) => {
        if (idx % 2 === 0) {
            itemBoxList[0].innerHTML += productHtml;
        }
        else {
            itemBoxList[1].innerHTML += productHtml;
        }
    });

}

function removeSelectedCategoryHighlight() {
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
