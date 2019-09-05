// CreateAccount.page.js
import Page from '../page/page';

class CreateAccount extends Page {

    get titleText() { return $('#account-creation_form .account_creation:nth-of-type(1) .page-subheading') }
    get malegender() { return $('#id_gender1') }
    get femalegender() { return $('#id_gender2') }
    get firstNameCustomer() { return $('#customer_firstname') }
    get lastNameCustomer() { return $('#customer_lastname') }
    get email() { return $('#email') }
    get password() { return $('#passwd') }
    get firstNameAddress() { return $('#firstname') }
    get lastNameAddress() { return $('#lastname') }
    get address() { return $('#address1') }
    get city() { return $('#city') }
    get statebtn() { return $('#id_state') }
    get state() { return $(`#id_state [value='21']`) }
    get zipCode() { return $('#postcode')}
    get mobilePhone() { return $('#phone_mobile')}
    get addressAlias() { return $('#alias')}
    get registerBtn() { return $('#submitAccount')}
}

export default new CreateAccount();