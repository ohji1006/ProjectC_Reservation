const PRODUCT_START_IDX = 0;
const TOTAL_LIST_CATEGORY_ID = 0;

var PageController = {
    tabElement: null,
    productAddButton: null,
    async init() {
        this.setTabElement();
        this.setproductAddButton();

        this.addEventListenerToTab();
        this.addEventListenerToProductAddBtn();
    },
    setTabElement() {
        this.tabElement = document.querySelector(".event_tab_lst.tab_lst_min");
    },
    setproductAddButton() {
        this.productAddButton = document.querySelector(".more .btn");
    },
    async addEventListenerToTab() {
        this.tabElement.addEventListener("click", await this.handleTabSelection);
    },
    async addEventListenerToProductAddBtn() {
        this.productAddButton.addEventListener("click", await this.handleAddBtnSelection);
    },
    async handleTabSelection(event) {
        if (PageController.isNotEventFromTabElementInside(event.target) ) {
            return;
        }
        showAppendBtn();

        Category.moveProperty(event);
        await Product.setProductItemList();
    },
    async handleAddBtnSelection() {
        await Product.appendProductItemList();
        hideAppendBtnIfNeeded();
    },
    isNotEventFromTabElementInside(targetNode) {
        for (var liIndex = 0; liIndex < this.tabElement.children.length; liIndex++) {
            var liElement = this.tabElement.children[liIndex];
            var aElement = liElement.firstElementChild;
            var spanElement = aElement.firstElementChild;

            if (liElement === targetNode) {
                return false;
            }

            if (aElement === targetNode) {
                return false;
            }

            if (spanElement === targetNode) {
                return false;
            }
        }

        return true;
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
    if (Product.getCount() < Product.getTotalCount()) {
        return true;
    }

    return false;
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

function clearElementHtml(targetElement) {
    targetElement.innerHTML = "";
}