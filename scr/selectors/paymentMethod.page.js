// paymentMethod.page.js
import Page from '../page/page'

class PaymentMethod extends Page {

    get navigationPage() { return $('.navigation_page') }
    get totalPrice() { return $('#total_price')}
    get paybycheck() { return $(`a[title='Pay by check\.']`) }
}

export default new PaymentMethod()