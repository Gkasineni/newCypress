// Mocha framework  -> 'describe' and 'it'

import Login from '../PageObjects/Login'
import signup from '../PageObjects/signup'

const {generateUsername} = require('unique-username-generator')

const generator = require('generate-password')

let userName = generateUsername()
let password = generator.generate({
    length: 5, 
    numbers: true,
    uppercase: true,
})

const URL = "https://www.demoblaze.com/"

let loginPage = new Login()  //creating an object for the class Login
let signUpProcess = new signup()


describe("My first Test", function(){
    it("Navigate to DemoBlaze home page", function(){
         cy.visit("https://www.demoblaze.com/")

         loginPage.loginOption().should('be.visible').click()   
         cy.wait(2000)  //cy.wait() is used to sleep a thread
         loginPage.userName().type('test')
         cy.wait(2000)
         loginPage.password().type('test')
         cy.wait(2000)
         loginPage.loginButton().click()
         cy.wait(2000)
         cy.get('a[id="nameofuser"]').should('have.text', 'Welcome test')  //should -> Validtion or assertion. Here it asserts the text on a[id="nameofuser"] matches 'Welcome test'
    })


    it('Test to add a new user for Sign Up process', function(){
       cy.visit("https://www.demoblaze.com/")
       signUpProcess.signUpOption().click()
       cy.wait(2000)
       signUpProcess.signUpUsername().type(userName)
       cy.wait(2000)
       signUpProcess.signUpPassword().type(password)
       cy.wait(2000)
       signUpProcess.signUpButton().click()
       cy.wait(2000)
       cy.on('window:alert', function(alertText){
        expect(alertText).eql('Sign up successful.')
       })
       cy.reload()
    })

   it('Add an item to cart', ()=>{
       cy.visit(URL)
       cy.get('#login2').click()
       cy.wait(2000)
       cy.get('input[id="loginusername"]').type(userName)
       cy.wait(2000)
       cy.get('input[id="loginpassword"]').type(password)
       cy.wait(2000)
       cy.get('button[onclick="logIn()"]').click()
       cy.wait(2000)
       cy.get('a[href="prod.html?idp_=1"][class="hrefch"]').click()
       cy.wait(2000)
       cy.get('a[onclick="addToCart(1)"]').click()
       cy.wait(2000)
       cy.on('window:alert', function(addProduct){
        expect(addProduct).eql('Product added.')
       })
       cy.reload()
       cy.wait(2000)
       cy.get('#cartur').click()
       cy.wait(2000)
       cy.get('img[src="imgs/galaxy_s6.jpg"]').should('be.visible')
   })


it('Custom commands next & previous page navigation', ()=> {
    cy.visit(URL)
    cy.wait(2000)
    cy.NextPage()
    cy.wait(2000)
    cy.PreviousPage()
    cy.wait(2000)
})

})

