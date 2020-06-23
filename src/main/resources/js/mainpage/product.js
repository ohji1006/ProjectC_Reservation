var Product = {
    itemBoxElementList: null,
    countElement: null,
    totalCount: null,
    count: null,
    async init() {
        this.setItemBoxElementList();
        this.setCountElement();

        this.initProperty();
        this.initProductList();

        await this.appendProductItemList();
    },
    setItemBoxElementList() {
        this.itemBoxElementList = document.querySelectorAll(".lst_event_box");
    },
    setCountElement() {
        this.countElement = document.querySelector(".product_count");
    },
    setTotalCount(count) {
        this.totalCount = count;
    },
    setCount(count) {
        this.count = count;
    },
    getTotalCount() {
        return this.totalCount;
    },
    getCount() {
        return this.count;
    },
    addCount(count) {
        this.count += count;
    },
    setTotalCountElement(productTotalCount) {
        this.countElement.innerHTML = productTotalCount + "개";
    },
    initProperty() {
        this.setTotalCount(0);
        this.setCount(0);
    },
    initProductList() {
        Array.from(this.itemBoxElementList).forEach((itemBox) => { itemBox.innerHTML = ""; });
    },
    async setProductItemList() {
        this.initProperty();
        this.initProductList();

        await this.appendProductItemList();
    },
    async appendProductItemList() {
        var productsInfo = await Server.getProductList(this.getCount(), Category.getCurrentCategoryId());

        this.setProductCount(productsInfo['totalCount'], productsInfo['items'].length);
        this.appendProductList(HtmlFactory.makeProductHTML(productsInfo['items']));
    },
    setProductCount(productTotalCount, productCount) {
        this.setTotalCount(productTotalCount);
        this.addCount(productCount);

        this.setTotalCountElement(productTotalCount);
    },
    appendProductList(productHtml) {
        productHtml.forEach((productHtml, idx) => {
            if (idx % 2 === 0) {
                this.itemBoxElementList[0].innerHTML += productHtml;
            }
            else {
                this.itemBoxElementList[1].innerHTML += productHtml;
            }
        });
    },
    isPosibleToAppendProduct() {
        if (this.getCount() < this.getTotalCount()) {
            return true;
        }

        return false;
    }
}