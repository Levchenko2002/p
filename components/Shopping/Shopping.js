class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💥 Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
                
                <div class="row">
                <div class="col-sm-4">
                    <form action="mail.php" method="POST">
                        <legend>Заголовок формы</legend>
      
                        <div class="form-group">
                            <label for="">Введите ваше имя</label>
                            <input type="text" class="form-control" id="" name="user_name" placeholder="Например, Иван">
                        </div>
                    
                        <div class="form-group">
                            <label for="">Введите номер телефона</label>
                            <input type="text" class="form-control" id="" name="user_phone" placeholder="+7 (999) 99 99 999">
                        </div>
                    
                        <div class="form-group">
                            <label for="">Введите email</label>
                            <input type="text" class="form-control" id="" name="user_email" placeholder="mail@mail.ru">
                        </div>
                    
                        <button type="submit" class="btn btn-primary">Отправить форму</button>
                    </form>
                </div><!-- .col-sm-4 -->
            </div> <!-- .row -->
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
