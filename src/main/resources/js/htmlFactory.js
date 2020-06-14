
var HtmlFactory = {
    async getCategoryHTML() {
        var categoryItemList = await Server.getCategoryList();

        console.log(categoryItemList);

        return this.makeCategoryItemHTML(categoryItemList);
    },
    makeCategoryItemHTML(categoryItemList) {
        var templateHtml = document.querySelector("#categoryItem").innerHTML;
        var catrgoryTemplate = Handlebars.compile(templateHtml);

        categoryItemList['items'].unshift({id:0, name:"전체리스트"});
        var categoryHtml = categoryItemList['items'].reduce((prevHTML, item)=>{
            console.log(item);
            console.log(prevHTML);
            return prevHTML + catrgoryTemplate(item);

        },"");

        console.log(categoryHtml);
        return categoryHtml;
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
    }
}

var util = {}