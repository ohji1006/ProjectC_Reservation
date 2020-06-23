var Category = {
    tabElement: null,
    async init() {
        this.setTabElement();
        await this.setCategory();
    },
    setTabElement() {
        this.tabElement = document.querySelector(".event_tab_lst.tab_lst_min");
    },
    async setCategory() {
        var categoryItemInfo = await Server.getCategoryList();
        this.setCategoryHTMLAndProperty(HtmlFactory.makeCategoryItemHTML(categoryItemInfo['items']));
    },
    movePropertyToTarget(targetNode) {
        this.deleteProperty();
        this.addProperty(targetNode);
    },
    setCategoryHTMLAndProperty(categoryHtml) {
        this.tabElement.innerHTML = categoryHtml;

        this.tabElement.querySelector(".anchor").classList.add('active');
    },
    deleteProperty() {
        var selectedCategory = this.tabElement.querySelector(".active");

        selectedCategory.classList.remove("active");
    },
    addProperty(targetNode) {
        if (targetNode.nodeName === 'LI') {
            return targetNode.firstElementChild.classList.add('active');
        }

        if (targetNode.nodeName === 'A') {
            return targetNode.classList.add('active');
        }

        if (targetNode.nodeName === 'SPAN') {
            return targetNode.parentElement.classList.add('active');
        }
    },
    getCurrentCategoryId() {
        return parseInt(this.tabElement.querySelector(".active").parentElement.dataset.categoryId);
    }
};