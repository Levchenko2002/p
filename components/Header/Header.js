class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
        <div class="intro-text">
            <div class="nav__link">
                <div class="topnav">
                </div>
            </div>
        </div>
                <div class="header-container">
                    <div class="topnav">                    
                        <a class="active" href="#home">example@inbox.ru</a>
                        <a href="#news">8-800-555-55-55</a>
                        <a href="#contact">г.Москва ул.Красноармейская 80/103</a>
                        <a href="#about">О сайте</a></div>
                        <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                        🔥 ${count}

                    </div>
                </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);
