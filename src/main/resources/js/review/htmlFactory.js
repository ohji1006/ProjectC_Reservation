var PageBuilder = {
    displayInfo: null,
    async build(categoryId) {
        this.displayInfo = await Server.getDisplayInfo(categoryId);

        UserComment.init(this.displayInfo);
    }
}

var HtmlFactory = {
    makeCommentList(displayInfo) {
        let templateHtml = document.querySelector("#reviewCommentList").innerHTML;
        let commentListTemplate = Handlebars.compile(templateHtml);

        return commentListTemplate(displayInfo);
    }
}

var Server = {
    getDisplayInfo(displayInfoId) {
        return new Promise(function (resolve) {
            var httpRequest = new XMLHttpRequest();
            httpRequest.addEventListener("load", () => {
                resolve(JSON.parse(httpRequest.responseText));
            });
            httpRequest.open("GET", `/reservation/api/products/${displayInfoId}`);
            httpRequest.send();
        });
    }
}

Handlebars.registerHelper('Score', (score) => {
    return `<span class='grade'> ${score}.0 </span>`;
});

Handlebars.registerHelper('Name', (name) => {
    return '<span class="name">' + name.substring(0, 1) + '****</span>';
});

Handlebars.registerHelper('Date', (date) => {
    let year = Number(date.substring(0, 4));
    let mounth = Number(date.substring(5, 7));
    let day = Number(date.substring(8, 10));

    return `<span class="date">${year}.${mounth}.${day}. 방문</span>`;
});