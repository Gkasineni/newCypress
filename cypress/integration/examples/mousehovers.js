describe("Mouse Hover Actions", ()=> {
    it('Verify selecting a checkbox on a page', ()=>{
        cy.visit('https://tutorialsninja.com/demo/index.php?route=product/search')
        cy.wait(2000)
        cy.get('#description').check().should('be.checked')
        cy.get('#description').uncheck().should('not.be.checked')
    })

    it('Verify selection of multiple checkboxes on a page', ()=>{
        cy.visit("https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42%27")
        cy.get("input[type='checkbox']").check(['10', '11']).should('be.checked')
        cy.get("input[type='checkbox']").uncheck(['10','11']).should('not.be.checked')
    })

    it('Verify selection of radio button on a page',()=>{
        cy.visit('https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42')
        cy.get('input[name="option[218]"]').check().should('be.checked')
        cy.get('input[name="option[218]"]').then(($radio) => {
                    $radio[0].checked = false
        }).should('not.be.checked')
    })

    it('Identify hidden elements on mouse hover', ()=>{
        cy.visit('https://tutorialsninja.com/demo/')
        cy.wait(2000)
        cy.get("a[href='https://tutorialsninja.com/demo/index.php?route=product/category&path=20'][class='dropdown-toggle']").invoke('show').click()
        cy.get('a[href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27"]').should('have.text', 'Mac (1)')
    })

})