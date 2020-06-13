
var htmlFactory = {
    async getCategoryHTMLArray() {
        var categoryItemList = await server.getCategoryList();

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

        // categoryHtml[0] = templateHtml.replace("${category_id}", 0)
        //     .replace("${category_name}", "전체리스트");

        // categoryItemList['items'].forEach((item) => {
        //     categoryHtml.push(
        //         templateHtml.replace("${category_id}", item['id'])
        //             .replace("${category_name}", item['name'])
        //     );
        // });
        console.log(categoryHtml);
        return categoryHtml;
    }
}

var server = {
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