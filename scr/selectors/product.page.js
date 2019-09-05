// product.page.js
import Page from '../page/page';

class Product extends Page {

    get breadcrum() { return $('.breadcrumb.clearfix') }
    get addToCartBtn() { return $('#add_to_cart') }
    get layerCart() { return $('#layer_cart') }
    get proceedToCheckOutBtn() { return $('.btn.btn-default.button.button-medium') }

    wait(){
        this.layerCart.waitForDisplayed()
    }
}

export default new Product();