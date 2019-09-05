// shoppingCartSummary.page.js
import Page from '../page/page'

class ShoppingCartSummary extends Page {

    get navigationPage() { return $('.navigation_page') }
    get totalPrice() { return $('#total_price')}
    get proceedToCheckoutBtn() { return $('.button.btn.btn-default.standard-checkout.button-medium')}
}

export default new ShoppingCartSummary()