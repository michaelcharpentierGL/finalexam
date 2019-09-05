// Authentication.page.js
import Page from '../page/page';

class Authentication extends Page {

    get titleText() { return $('#center_column .page-heading') }
    get emailAddressTextbox() { return $('#email_create')}
    get createAnAccountbtn() { return $('#SubmitCreate')}
}

export default new Authentication();