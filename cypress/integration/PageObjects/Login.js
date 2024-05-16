class Login{
    loginOption(){
        return cy.get('#login2')
    }

    userName(){
        return cy.get('#loginusername') 
    }

    password(){
       return cy.get('#loginpassword')
    }

    loginButton(){
        return cy.get('button[onclick="logIn()"]')
    }
}

export default Login