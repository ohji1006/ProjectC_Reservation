class Reservation {
    constructor() {
        this.ticketBody = document.querySelector('.ticket_body');
        this.productId = document.location.search.split('=')[1];
        this.productInfo = null;
    }

    static async create() {
        const obj = new Reservation();
        await obj.setTiketElm();
        obj.addEventClb();
        return obj;
    }

    static get PRODUCTINFOURL() {
        return `/reservation/api/products/`;
    }

    static get RSVURL() {
        return `/reservation/api/reservations`;
    }

    async setTiketElm() {
        this.productInfo = await this.getProductInfo(this.productId);

        this.ticketBody.innerHTML = this.makeRsvTicketList(this.productInfo);
    }

    getProductInfo(displayInfoId) {
        return new Promise((resolve) => {
            var httpRequest = new XMLHttpRequest();
            httpRequest.addEventListener("load", () => {
                resolve(JSON.parse(httpRequest.responseText));
            });
            httpRequest.open("GET", Reservation.PRODUCTINFOURL + displayInfoId)
            httpRequest.send();
        });
    }

    makeRsvTicketList(displayInfo) {
        let template = document.querySelector("#reservationItem").innerHTML;
        let rsvElmFactory = Handlebars.compile(template);

        return rsvElmFactory(displayInfo);
    }

    makeProductDsc(displayInfo) {
        let template = document.querySelector("#productDscItem").innerHTML;
        let dscElmFactory = Handlebars.compile(template);

        return dscElmFactory(displayInfo);
    }

    addEventClb() {
        this.setNameFormatClb();
        this.setTelFormatClb();
        this.setEmailFormatClb();
        this.setAllAgreementClb();
        this.setCollectInformClb();
        this.setOfferInformClb();
        this.setBKButClb();
        this.addTicketClb();
    }

    setNameFormatClb() {
        let nameDiv = document.querySelector('#name');
        nameDiv.addEventListener('change', (evt) => {
            if (nameDiv.length == 0) {
                return false;
            }

            this.toggleReserveBtn();
        });
    }

    setTelFormatClb() {
        let telDiv = document.querySelector('#tel');
        telDiv.addEventListener('change', this.checkTelFormat.bind(this));
    }

    setEmailFormatClb() {
        let emailDiv = document.querySelector('#email');
        emailDiv.addEventListener('change', this.checkEmailFormat.bind(this));
    }

    setAllAgreementClb() {
        let allAgreementChk = document.querySelector("#chk3");
        allAgreementChk.addEventListener('click', () => {
            this.toggleReserveBtn();
        })
    }

    setCollectInformClb() {
        let collectInformAnc = document.querySelector('.btn_agreement.collectInform');
        collectInformAnc.addEventListener('click', (evt) => {
            let colInformDiv = document.querySelector('.agreement.collectInform');
            colInformDiv.classList.add('open');
        });
    }

    setOfferInformClb() {
        let offerInformAnc = document.querySelector('.btn_agreement.offerInform');
        offerInformAnc.addEventListener('click', (evt) => {
            let offerDiv = document.querySelector('.agreement.offerInform');
            offerDiv.classList.add('open');
        });
    }

    setBKButClb() {
        let bkBtn = document.querySelector('.bk_btn');
        bkBtn.addEventListener('click', this.sendRsvRequest.bind(this));
    }

    addTicketClb() {
        this.addTicketDecClb();
        this.addTicketIncClb();
    }

    addTicketIncClb() {
        let minusBtnList = document.querySelectorAll(".btn_plus")

        Array.from(minusBtnList).forEach((minusBtn) => {
            minusBtn.addEventListener('click', this.incTicketProcess.bind(this));
        });
    }

    addTicketDecClb() {
        let minusBtnList = document.querySelectorAll(".btn_minus")

        Array.from(minusBtnList).forEach((minusBtn) => {
            minusBtn.addEventListener('click', this.decTicketProcess.bind(this));
        });
    }

    incTicketProcess(event) {
        event.preventDefault();

        let ticketDiv = this.findTicketDivById(parseInt(event.target.id));

        let ticketInput = ticketDiv.querySelector('.count_control_input');
        let totalPriceDiv = ticketDiv.querySelector('.total_price');

        this.incTicketCount(ticketInput);
        this.setTicketSum(ticketInput, totalPriceDiv);

        this.incTotlaCount();

        this.togglePriceColor(ticketDiv);
        this.toggleDcsBtn(ticketDiv);
        this.toggleReserveBtn();
    }

    incTicketCount(ticketInput) {
        ticketInput.value = parseInt(ticketInput.value) + 1;
    }

    incTicketSum(ticketInput, totalPriceDiv) {
        let ticketPrice = parseInt(totalPriceDiv.dataset.price);

        let totalPrice = ticketPrice * ticketInput.value;
        totalPriceDiv.innerHTML = totalPrice.toLocaleString();
    }

    incTotlaCount() {
        let totalCount = document.querySelector('#totalCount');
        totalCount.innerHTML = parseInt(totalCount.innerHTML) + 1;
    }

    decTicketProcess(event) {
        event.preventDefault();

        let ticketDiv = this.findTicketDivById(parseInt(event.target.id));

        let ticketInput = ticketDiv.querySelector('.count_control_input');
        let totalPriceDiv = ticketDiv.querySelector('.total_price');

        if (!this.isInputQuntityLeft(ticketInput)) {
            return;
        }

        this.decTicketCount(ticketInput);
        this.setTicketSum(ticketInput, totalPriceDiv);
        this.decTotalCount();

        this.togglePriceColor(ticketDiv);
        this.toggleDcsBtn(ticketDiv);
        this.toggleReserveBtn();
    }

    decTicketCount(ticketInput) {
        ticketInput.value = parseInt(ticketInput.value) - 1;
    }

    setTicketSum(ticketInput, totalPriceDiv) {
        let ticketPrice = parseInt(totalPriceDiv.dataset.price);

        let totalPrice = ticketPrice * ticketInput.value;
        totalPriceDiv.innerHTML = totalPrice.toLocaleString();
    }

    decTotalCount() {
        let totalCount = document.querySelector('#totalCount');
        totalCount.innerHTML = parseInt(totalCount.innerHTML) - 1;
    }

    togglePriceColor(ticketDiv) {
        let ticketInput = ticketDiv.querySelector('.count_control_input');
        let priceDiv = ticketDiv.querySelector('.individual_price');

        if (this.isInputQuntityLeft(ticketInput)) {
            priceDiv.classList.add('on_color');
            return;
        }

        priceDiv.classList.remove('on_color');
    }

    toggleDcsBtn(ticketDiv) {
        let minusBtn = ticketDiv.querySelector('.btn_minus');
        let countInput = ticketDiv.querySelector('.count_control_input');

        if (this.isInputQuntityLeft(countInput)) {
            minusBtn.classList.remove('disabled');
            countInput.classList.remove('disabled');
            return;
        }

        minusBtn.classList.add('disabled');
        countInput.classList.add('disabled');
    }

    findTicketDivById(ticketId) {
        return document.querySelector('#qty_' + ticketId);
    }

    toggleReserveBtn() {
        if (this.checkAllInputFulfill()) {
            return document.querySelector(".bk_btn_wrap").classList.remove('disable');
        }
        document.querySelector(".bk_btn_wrap").classList.add('disable');
    }

    checkTelFormat(evt) {
        if (this.isTelFormat(evt)) {
            document.querySelector(".warning_tel").style.display = "none";
            return this.toggleReserveBtn();
        }
        document.querySelector(".warning_tel").style.display = "block";

        let telDiv = document.querySelector('.tel');
        telDiv.value = '';
    }

    checkEmailFormat(evt) {
        if (this.isEmailFormat(evt)) {
            document.querySelector(".warning_email").style.display = "none";
            return this.toggleReserveBtn();
        }

        document.querySelector(".warning_email").style.display = "block";

        let emailDiv = document.querySelector('.email');
        emailDiv.value = '';
    }

    checkAllInputFulfill() {
        if (this.isTicketValueEmpty()) {
            return false;
        }

        if (!this.isBookerInformFulfilled()) {
            return false;
        }

        if (!this.isAgreementChecked()) {
            return false;
        }
        return true;
    }

    isInputQuntityLeft(countInput) {
        if (parseInt(countInput.value) === 0) {
            return false;
        }
        return true;
    }

    isTelFormat(evt) {
        const telReg = /01[01789]-\d{3,4}-\d{4}/;
        return telReg.test(evt.target.value);
    }

    isEmailFormat(evt) {
        const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        return emailReg.test(evt.target.value);
    }

    isTicketValueEmpty() {
        let emptyCount = 0;
        let ticketList = document.querySelectorAll(".count_control_input")
        for (let ticket of ticketList) {
            if (ticket.value == 0) {
                emptyCount += 1
            }
        }

        if (emptyCount == ticketList.length)
            return true;
        return false;
    }

    isBookerInformFulfilled() {
        if (document.querySelector('#name').value.length == 0) {
            return false;
        }

        if (document.querySelector('#tel').value.length == 0) {
            return false;
        }

        if (document.querySelector('#email').value.length == 0) {
            return false;
        }

        return true;
    }

    isAgreementChecked() {
        return document.querySelector("#chk3").checked;
    }

    sendRsvRequest(evt) {
        evt.preventDefault();

        if (!this.checkAllInputFulfill()) {
            return;
        }

        var httpRequest = new XMLHttpRequest();
        httpRequest.addEventListener("load", () => {
            console.log(httpRequest.responseText);
        });
        httpRequest.open('POST', Reservation.RSVURL);
        httpRequest.setRequestHeader('Content-type', 'application/json');
        httpRequest.send(JSON.stringify(this.createData()));
    }

    createData() {
        let data = {};
        data['displayInfoId'] = this.productInfo['displayInfo']['displayInfoId'];
        data['prices'] = this.getTicketData();
        data['productId'] = this.productInfo['displayInfo']['productId'];
        data['reservationName'] = document.querySelector('#name').value;
        data['reservationTel'] = document.querySelector('#tel').value;
        data['reservationEmail'] = document.querySelector('#email').value;
        data['reservationYearMonthDay'] = this.getMonthData();

        return data;
    }

    getTicketData() {
        let ticketData = new Array();;
        let qtyDivList = document.querySelectorAll('.qty');
        Array.from(qtyDivList).forEach((qtyDiv) => {
            let qty = parseInt(qtyDiv.querySelector('.count_control_input').value);
            let productPriceId = parseInt(qtyDiv.querySelector('.count_control_input').dataset.productPriceId);

            if (qty === 0) {
                return;
            }

            ticketData.push({
                "count": qty,
                "productPriceId": productPriceId,
                "reservationInfoId": 0,
                "reservationInfoPriceId": 0
            });
        });

        return ticketData;
    }

    getMonthData() {
        let dateIns = new Date();
        let dateString = null;
        let year = dateIns.getFullYear();
        let month = (dateIns.getMonth() + 1);
        let day = dateIns.getDate();

        dateString = year.toString();
        if (month.toString().length < 2) {
            dateString += ".0" + month.toString();
        } else {
            dateString += "." + month.toString();
        }
        dateString += "." + day.toString();

        return dateString;
    }
}