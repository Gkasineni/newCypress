class signup {

    signUpOption(){
        return cy.get('#signin2')
    }

      signUpUsername(){
        return cy.get('#sign-username')
      }

      signUpPassword(){
        return cy.get('#sign-password')
      }

     signUpButton(){
        return cy.get('button[onclick="register()"]')
     }

}

export default signup