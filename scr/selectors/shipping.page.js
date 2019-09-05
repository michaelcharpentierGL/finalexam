// shipping.page.js
import Page from '../page/page'

class Shipping extends Page {

    get navigationPage() { return $('.navigation_page') }
    get checher() { return $('#uniform-cgv')}
    get proceedToCheckoutBtn() { return $(`[action] .button-medium`) }
}

export default new Shipping()