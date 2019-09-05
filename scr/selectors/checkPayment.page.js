// checkPayment.page.js
import Page from '../page/page'

class CheckPayment extends Page {

    get navigationPage() { return $('.navigation_page') }
    get confirmBtn() { return $(`[action] .button-medium`) }
}

export default new CheckPayment()