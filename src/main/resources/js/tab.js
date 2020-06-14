var CategoryTab = {
    tabElement: null,
    async init() {
        this.setTabElement();

        await this.setCategory();
    },
    setTabElement() {
        this.tabElement = document.querySelector(".event_tab_lst.tab_lst_min");
    },
    async setCategory() {
        this.setCategoryHTML(await HtmlFactory.getCategoryHTML());
    },
    change(event) {
        if (this.isNotEventFromTabElementInside(event.target)) {
            return;
        }

        this.changePropertySetting();
    },
    changePropertySetting() {
        this.deleteProperty();
        this.addProperty(event.target);
    },
    setCategoryHTML(categoryHtml) {
        this.tabElement.innerHTML = categoryHtml;

        this.tabElement.querySelector(".anchor").classList.add('active');
    },
    deleteProperty() {
        this.findSelectedCategory().classList.remove("active");
    },
    findSelectedCategory() {
        return this.tabElement.querySelector(".active");
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
    }
};