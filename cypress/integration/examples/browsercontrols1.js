// Browser controls and navigation scenarios 


describe('Browser Controls and navigation scenarios', ()=> {
    it('Browser back button test', ()=> {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.wait(2000)
        cy.get('#cartur').click()
        cy.url().should('include', 'https://www.demoblaze.com/cart.html')
        cy.wait(2000)
        cy.go('back')  //browser back should be selected 
        cy.wait(2000)
        cy.url().should('include', 'https://www.demoblaze.com/index.html')
    })

    // cy.go('forward')
    
     it('Browser forward button test', ()=> {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.wait(2000)
        cy.get('#cartur').click()
        cy.url().should('include', 'https://www.demoblaze.com/cart.html')
        cy.wait(2000)
        cy.go('back')  //browser back should be selected 
        cy.wait(2000)
        cy.url().should('include', 'https://www.demoblaze.com/index.html')
        cy.wait(2000)
        cy.go('forward')
        cy.url().should('include', 'https://www.demoblaze.com/cart.html')
        cy.wait(2000)
    })

    it('Browser navigation to footer and header section os a page', ()=>{
        cy.visit('https://www.demoblaze.com/index.html')
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get("p[class='m-0 text-center text-white']").should('have.text', 'Copyright © Product Store 2017') //footer element
        cy.wait(2000)
        cy.scrollTo('top')
        cy.wait(2000)
        cy.get('a[id="nava"]').should('be.visible') //header element 
    })
})