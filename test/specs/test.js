import { expect } from 'chai'
import HomePage from '../../scr/selectors/home.page'
import Authentication from '../../scr/selectors/authentication.page'
import CreateAccount from '../../scr/selectors/createAccount.page'
import RandomValues from '../../scr/misc/generaterandomvalues'
import MyAccount from '../../scr/selectors/myAccount.page'
import Category from '../../scr/selectors/category.page'
import Product from '../../scr/selectors/product.page'
import ShoppingCartSummary from '../../scr/selectors/shoppingCartSummary.page'
import Address from '../../scr/selectors/address.page'
import SubmitBtn from '../../scr/misc/submit'
import Shipping from '../../scr/selectors/shipping.page'
import PaymentMethod from '../../scr/selectors/paymentMethod.page'
import CheckPayment from '../../scr/selectors/checkPayment.page'
import OrderConfirmation from '../../scr/selectors/orderConfirmation.page'

let emailAddress = RandomValues.makeEmail()


describe('My Store', () => {
    it('End To End Test of Checkout Flow', () => {
        HomePage.open()
        expect(HomePage.signin.getText()).to.contain('Sign in')
        SubmitBtn.submit(HomePage.signin)
        expect(Authentication.titleText.getText()).to.contain('AUTHENTICATION')

        Authentication.emailAddressTextbox.setValue(emailAddress)
        SubmitBtn.submit(Authentication.createAnAccountbtn)
        expect(CreateAccount.titleText.getText()).to.contain('YOUR PERSONAL INFORMATION')
       
        SubmitBtn.submit(CreateAccount.femalegender)
        CreateAccount.firstNameCustomer.setValue('Jhon')
        CreateAccount.lastNameCustomer.setValue('Snow')
        CreateAccount.email.setValue(emailAddress)
        CreateAccount.password.setValue('asdf1234!')
        CreateAccount.firstNameAddress.setValue('Jhon')
        CreateAccount.lastNameAddress.setValue('Snow')
        CreateAccount.address.setValue('777 Brockton Avenue')
        CreateAccount.city.setValue('Abington')
        SubmitBtn.submit(CreateAccount.statebtn)
        SubmitBtn.submit(CreateAccount.state)
        CreateAccount.zipCode.setValue('01001')
        CreateAccount.mobilePhone.setValue('879966554')
        CreateAccount.addressAlias.setValue('TestAddress')
        SubmitBtn.submit(CreateAccount.registerBtn)
        expect(MyAccount.signout.getText()).to.contain('Sign out')
        expect(MyAccount.name.getText()).to.contain('Jhon Snow')

        SubmitBtn.submit(MyAccount.category)
        expect(Category.navigationPage.getText()).to.contain('Women')
        
        SubmitBtn.submit(Category.product)
        expect(Product.breadcrum.getText()).to.contain('> Women')

        SubmitBtn.submit(Product.addToCartBtn)
        Product.wait()
        expect(Product.proceedToCheckOutBtn.getText()).to.contain('Proceed to checkout')

        SubmitBtn.submit(Product.proceedToCheckOutBtn)
        expect(ShoppingCartSummary.navigationPage.getText()).to.contain('Your shopping cart')
        expect(ShoppingCartSummary.totalPrice.getText()).to.be.equal('$29.00')

        SubmitBtn.submit(ShoppingCartSummary.proceedToCheckoutBtn)
        expect(Address.navigationPage.getText()).to.contain('Addresses')
        expect(Address.addressName.getText()).to.contain('Jhon Snow')
        expect(Address.addressAddress.getText()).to.contain('777 Brockton Avenue')
        expect(Address.addressCityStatePostcode.getText()).to.contain('Abington, Massachusetts 01001')
        expect(Address.addressPhone.getText()).to.contain('879966554')
        SubmitBtn.submit(Address.proceedToCheckoutBtn)
        expect(Shipping.navigationPage.getText()).to.contain('Shipping')

        SubmitBtn.submit(Shipping.checher)
        SubmitBtn.submit(Shipping.proceedToCheckoutBtn)
        expect(PaymentMethod.navigationPage.getText()).to.contain('Your payment method')
        expect(PaymentMethod.totalPrice.getText()).to.be.equal('$29.00')


        SubmitBtn.submit(PaymentMethod.paybycheck)
        expect(CheckPayment.navigationPage.getText()).to.contain('Check payment')
        
        SubmitBtn.submit(CheckPayment.confirmBtn)
        expect(OrderConfirmation.navigationPage.getText()).to.contain('Order confirmation')
        expect(OrderConfirmation.pageHeading.getText()).to.contain('ORDER CONFIRMATION')
        expect(OrderConfirmation.alertSuccess.getText()).to.contain('Your order on My Store is complete.')
        expect(OrderConfirmation.pageSubheading.getText()).to.contain('YOUR CHECK MUST INCLUDE:')
        expect(OrderConfirmation.price.getText()).to.be.equal('$29.00')
    });
});