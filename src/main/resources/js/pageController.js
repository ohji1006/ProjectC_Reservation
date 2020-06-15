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
        this.tabElement.addEventListener("click", this.handleTabSelection);
    },
    async addEventListenerToProductAddBtn() {
        this.productAddButton.addEventListener("click", this.handleAddBtnSelection);
    },
    async handleTabSelection(event) {
        if (PageController.isNotEventFromTabElementInside(event.target)) {
            return;
        }

        AppendBtn.show();
        Category.movePropertyToTarget(event.target);
        await Product.setProductItemList();
    },
    async handleAddBtnSelection() {
        await Product.appendProductItemList();
        PageController.hideAppendBtnIfNeeded();
    },
    hideAppendBtnIfNeeded() {
        if (Product.isPosibleToAppendProduct()) {
            return;
        }

        AppendBtn.hide();
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

var AppendBtn = {
    appendBtnElement: null,
    init() {
        this.setBtnElement();
    },
    setBtnElement() {
        this.appendBtnElement = document.querySelector(".more .btn");
    },
    show() {
        this.appendBtnElement.style.display = 'block';
    },
    hide() {
        this.appendBtnElement.style.display = 'none';
    }
}