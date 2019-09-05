// home.page.js
import Page from '../page/page';

class HomePage extends Page {

    get signin() { return $('.login') }

    open() {
        super.open('/')
    }

}

export default new HomePage();