// address.page.js
import Page from '../page/page';

class Address extends Page {

    get navigationPage() { return $('.navigation_page') }
    get addressName() { return $('#address_delivery .address_firstname.address_lastname') }
    get addressAddress() { return $('#address_delivery .address_address1.address_address2') }
    get addressCityStatePostcode() { return $('#address_delivery .address_city.address_state_name.address_postcode') }
    get addressCountry() { return $('#address_delivery .address_country_name') }
    get addressPhone() {return $('#address_delivery .address_phone_mobile') }
    get proceedToCheckoutBtn() { return $(`[action] .button-medium`) }
}

export default new Address();