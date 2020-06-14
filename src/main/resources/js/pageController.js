const PRODUCT_START_IDX = 0;
const TOTAL_LIST_CATEGORY_ID = 0;

var PageController = {
    tabElement: null,
    productAddButton: null,
    init(){
        this.setTabElement();
        this.setproductAddButton();
        
        this.addEventListenerToTab();
        this.addEventListenerToProductAddBtn();
    },
    setTabElement(){
        this.tabElement = document.querySelector(".event_tab_lst.tab_lst_min");
    },
    setproductAddButton(){
        this.productAddButton = document.querySelector(".more .btn");
    },
    addEventListenerToTab(){
        this.tabElement.addEventListener("click", this.propagateTabEvent);
    },
    addEventListenerToProductAddBtn(){
        this.productAddButton.addEventListener("click", this.appendProductItemList);
    },
    propagateTabEvent(event) {
        clearProductList();
        clearProductCount();
        showAppendBtn();
        
        CategoryTab.change(event);
        setProductListWithEventTarget(event.target);
    },
    async appendProductItemList() {
        var productList = await getProductList(getCurrentProductCount(), getCurrentCategoryId());
        var productHtml = makeProductHTML(productList['items']);
    
        setProductCountWithProduct(productList);
        appendProductItem(productHtml);
    
        hideAppendBtnIfNeeded();
    }
}

// #######################################################################
// #######################################################################

function setProductListWithEventTarget(targetNode) {
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

function hideAppendBtnIfNeeded() {
    if (isPosibleToAppendProduct()) {
        return;
    }

    document.querySelector(".more .btn").style.display = 'none';
}

function showAppendBtn() {
    document.querySelector(".more .btn").style.display = 'block';
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