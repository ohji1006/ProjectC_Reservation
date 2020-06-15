var HtmlFactory = {
    makeCategoryItemHTML(categoryItemList) {
        var templateHtml = document.querySelector("#categoryItem").innerHTML;
        var catrgoryTemplate = Handlebars.compile(templateHtml);

        categoryItemList.unshift({ id: 0, name: "전체리스트" });
        var categoryHtml = categoryItemList.reduce((prevHTML, item) => {
            return prevHTML + catrgoryTemplate(item);
        }, "");

        return categoryHtml;
    },
    makeProductHTML(productsItemList) {
        var productHtml = new Array();
        var templateHtml = document.querySelector("#itemList").innerHTML;
        var productTemplate = Handlebars.compile(templateHtml);

        productsItemList.forEach((item, index) => {
            productHtml[index] = productTemplate(item);
        });

        return productHtml;
    },
    makePromotionHTML(promotionItemList) {
        var templateHtml = document.querySelector("#promotionItem").innerHTML;
        var promotionTemplate = Handlebars.compile(templateHtml);

        var promotionHtml = promotionItemList.reduce((prevHTML, item) => {
            return prevHTML + promotionTemplate(item);
        }, "");

        return promotionHtml;
    }
}

var Server = {
    getCategoryList() {
        return new Promise(function (resolve) {
            var httpRequest = new XMLHttpRequest();
            httpRequest.addEventListener("load", () => {
                resolve(JSON.parse(httpRequest.responseText));
            });
            httpRequest.open("GET", "/reservation/api/categories");
            httpRequest.send();
        });
    },
    getProductList(start, categoryId) {
        var requestURL = this.makeProductRequestURL(start, categoryId);

        return new Promise(function (resolve, reject) {
            var httpRequest = new XMLHttpRequest();
            httpRequest.addEventListener("load", () => {
                resolve(JSON.parse(httpRequest.responseText));
            });
            httpRequest.open("GET", requestURL);
            httpRequest.send();
        });
    },
    getPromotionList() {
        return new Promise((resolve) => {
            var httpRequest = new XMLHttpRequest();
            httpRequest.addEventListener("load", () => {
                resolve(JSON.parse(httpRequest.responseText));
            });
            httpRequest.open("GET", "/reservation/api/promotions");
            httpRequest.send();
        });
    },
    makeProductRequestURL(start, categoryId) {
        if (categoryId == TOTAL_LIST_CATEGORY_ID) {
            return `/reservation/api/products?start=${start}`;
        }
        return `/reservation/api/products?categoryId=${categoryId}&start=${start}`;
    }
}