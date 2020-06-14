var Product = {
    itemBoxList: null,
    countElement: null,
    totalCount: null,
    count : null,
    async init(){
        this.itemBoxList = document.querySelectorAll(".lst_event_box");
        this.countElement = document.querySelector(".product_count");

        this.clearProperty();

        await this.appendProductItemList();
    },
    setTotalCount(count){
        this.totalCount = count;
    },
    setCount(count){
        this.count = count;
    },
    getTotalCount(){
        return this.totalCount;
    },
    getCount(){
        return this.count;
    },
    addCount(count){
        this.count += count;
    },
    setTotalCountElement(productTotalCount){
        this.countElement.innerHTML = productTotalCount + "개";
    },
    clearProperty(){
        this.setTotalCount(0);
        this.setCount(0);
        this.removeProductList();
    },
    async setProductItemList() {
        this.clearProperty();

        await this.appendProductItemList();
    },
    async appendProductItemList() {
        var productsInfo = await getProductList(this.getCount(), Category.getCurrentCategoryId());

        this.setProductCount(productsInfo['totalCount'], productsInfo['items'].length);
        this.appendProductList( makeProductHTML(productsInfo['items']) );
    },
    setProductCount(productTotalCount, productCount){
        this.setTotalCount(productTotalCount);
        this.addCount(productCount);

        this.setTotalCountElement(productTotalCount);
    },
    removeProductList(){
        Array.from(this.itemBoxList).forEach((itemBox) => { clearElementHtml(itemBox) });
    },
    appendProductList(productHtml) {
        productHtml.forEach((productHtml, idx) => {
            if (idx % 2 === 0) {
                this.itemBoxList[0].innerHTML += productHtml;
            }
            else {
                this.itemBoxList[1].innerHTML += productHtml;
            }
        });
    }
}