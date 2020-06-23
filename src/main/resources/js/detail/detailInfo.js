var DetailInfo = {
    detailItemElm: null,
    detailAreaElm: null,
    introduceDscElm: null,
    detailAreaWrapElm: null,
    detailLocationElm: null,
    storeMapElm: null,
    storeNameElm: null,
    storeAddrElm: null,
    storeOldAddrElm: null,
    storeDetailAddrElm: null,
    storeTelElm: null,
    bottomCommonPath: null,
    btnNavigationElm: null,
    init(productContent) {
        this.setElement();
        this.buildPage(productContent);
    },
    setElement() {
        this.setStoreNameElm();
        this.setDetailItemElm();
        this.setDetailAreaElm();
        this.setIntroduceDscElm();
        this.setDetailAreaWrapElm();
        this.setDetailLocationElm();
        this.setStoreMapElm();
        this.setStoreAddrElm();
        this.setStoreOldAddrElm();
        this.setStoreDetailAddrElm();
        this.setStoreTelElm();
        this.setBottomCommonPath();
        this.setBtnNavigationElm();
    },
    buildPage(productContent) {
        this.setProductContent(productContent['displayInfo']['productContent']);
        this.setStoreMapImg(productContent['displayInfoImage']['saveFileName']);
        this.setStoreName(productContent['displayInfo']['placeName']);
        this.setStoreAddr(productContent['displayInfo']['placeLot']);
        this.setStoreOldAddr(productContent['displayInfo']['placeStreet']);
        this.setStoreDetailAddr(productContent['displayInfo']['placeName']);
        this.setStoreTel(productContent['displayInfo']['telephone']);
        this.setBottomPathAndNavWithUserDevice();
    },
    setBottomCommonPath() {
        this.bottomCommonPath = document.querySelector(".bottom_common_path");
    },
    setBtnNavigationElm() {
        this.btnNavigationElm = document.querySelector(".bottom_common_path > .before");
    },
    setStoreNameElm() {
        this.storeNameElm = document.querySelector(".store_name");
    },
    setDetailItemElm() {
        this.detailItemElm = document.querySelector(".item._detail").firstElementChild;
    },
    setDetailAreaElm() {
        this.detailAreaElm = document.querySelector(".item._path").firstElementChild;
    },
    setIntroduceDscElm() {
        this.introduceDscElm = document.querySelector(".detail_info_lst > .in_dsc");
    },
    setDetailAreaWrapElm() {
        this.detailAreaWrapElm = document.querySelector(".detail_area_wrap");
    },
    setDetailLocationElm() {
        this.detailLocationElm = document.querySelector(".detail_location");
    },
    setStoreMapElm() {
        this.storeMapElm = document.querySelector(".store_map.img_thumb");
    },
    setStoreAddrElm() {
        this.storeAddrElm = document.querySelector(".store_addr.store_addr_bold");
    },
    setStoreOldAddrElm() {
        this.storeOldAddrElm = document.querySelector(".addr_old_detail");
    },
    setStoreDetailAddrElm() {
        this.storeDetailAddrElm = document.querySelector(".store_addr.addr_detail");
    },
    setStoreTelElm() {
        this.storeTelElm = document.querySelector(".store_tel");
    },
    setStoreName(productTitle) {
        this.storeNameElm.innerHTML = productTitle;
    },
    setProductContent(content) {
        this.introduceDscElm.innerHTML = content;
    },
    setStoreMapImg(mapImgSrc) {
        this.storeMapElm.setAttribute('src', `http://localhost:8080/reservation/${mapImgSrc}`);
    },
    setStoreAddr(addr) {
        this.storeAddrElm.innerHTML = addr;
    },
    setStoreOldAddr(addr) {
        this.storeOldAddrElm.innerHTML = addr;
    },
    setStoreDetailAddr(addr) {
        this.storeDetailAddrElm.innerHTML = addr;
    },
    setStoreTel(tel) {
        this.storeTelElm.innerHTML = tel;
        this.storeTelElm.setAttribute('href', `tel:${tel}`);
    },
    setBottomPathAndNavWithUserDevice(){
        if(this.isMobileUser()){
            this.bottomCommonPath.classList.add("column2");
            this.btnNavigationElm.classList.add("btn_navigation");
            return;
        }

        this.bottomCommonPath.classList.remove("column2");
        this.btnNavigationElm.classList.remove("btn_navigation");
    },
    isMobileUser() {
        if (navigator.userAgent.match(/Android/i) 
        || navigator.userAgent.match(/webOS/i) 
        || navigator.userAgent.match(/iPhone/i)  
        || navigator.userAgent.match(/iPad/i)  
        || navigator.userAgent.match(/iPod/i) 
        || navigator.userAgent.match(/BlackBerry/i) 
        || navigator.userAgent.match(/Windows Phone/i)) { 
            return true; 
        }
        return false;
    },
    showItem() {
        this.offDetailArea();
        this.hideDetailLocation();

        this.onDetailItem();
        this.showDetailAreaWrap();
    },
    showArea() {
        this.offDetailItem();
        this.hideDetailAreaWrap();

        this.onDetailArea();
        this.showDetailLocation();
    },
    showDetailAreaWrap() {
        this.detailAreaWrapElm.classList.remove('hide');
    },
    hideDetailAreaWrap() {
        this.detailAreaWrapElm.classList.add('hide');
    },
    showDetailLocation() {
        this.detailLocationElm.classList.remove('hide');
    },
    hideDetailLocation() {
        this.detailLocationElm.classList.add('hide');
    },
    onDetailItem() {
        this.detailItemElm.classList.add('active');
    },
    offDetailItem() {
        this.detailItemElm.classList.remove('active');
    },
    onDetailArea() {
        this.detailAreaElm.classList.add('active');
    },
    offDetailArea() {
        this.detailAreaElm.classList.remove('active');
    }
}