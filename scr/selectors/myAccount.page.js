// myAccount.page.js
import Page from '../page/page';

class MyAccount extends Page {

    get signout() { return $('.logout') }
    get name() { return $('.account')}
    get category() { return $('.sf-with-ul')}
}

export default new MyAccount();