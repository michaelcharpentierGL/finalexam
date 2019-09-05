// orderConfirmation.page.js
import Page from '../page/page'

class OrderConfirmation extends Page {

    get navigationPage() { return $('.navigation_page') }
    get pageHeading() { return $('.page-heading') }
    get alertSuccess() { return $('.alert-success') }
    get pageSubheading() { return $('.page-subheading') }
    get price() { return $('.price strong') }
}

export default new OrderConfirmation()