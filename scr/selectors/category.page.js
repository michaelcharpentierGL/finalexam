// Category.page.js
import Page from '../page/page';

class Category extends Page {

    get navigationPage() { return $('.navigation_page') }
    get product() { return $(`li[class='ajax_block_product col-xs-12 col-sm-6 col-md-4 last-item-of-tablet-line']`)}
}

export default new Category();