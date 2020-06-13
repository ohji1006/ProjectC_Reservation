var CategoryTab = {
    tabElement: null,
    async init(){
        this.setTabElement();

        await this.setCategory();
    },
    setTabElement(){
        this.tabElement = document.querySelector(".event_tab_lst.tab_lst_min");
    },
    async setCategory(){
        this.setCategoryHTML( await htmlFactory.getCategoryHTMLArray());
    },
    setCategoryHTML(categoryHtml) {
        this.tabElement.innerHTML = categoryHtml;

        // categoryHtml.forEach((categoryHtml) => {
        //     this.tabElement.innerHTML += categoryHtml;
        // });

        document.querySelector(".anchor").classList.add('active');
    },
    addProperty(targetNode){
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
    },
    deleteProperty() {
        this.findSelectedCategory().classList.remove("active");
    },
    findSelectedCategory(){
        return this.tabElement.querySelector(".active");
    }
};