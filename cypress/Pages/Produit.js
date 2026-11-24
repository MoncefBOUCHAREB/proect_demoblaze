///<reference types="cypress"/>
class ProduitPage{
    elements={
        ProduitPhone : ()=>cy.get('.name'),
        addtocart : ()=>cy.contains("Add to cart"),
        /*pageproduit :()=>cy.get('.product-content product-wrap clearfix product-deatil'),
        btnaddtocart :()=>cy.get('.product-content product-wrap clearfix product-deatil').find('[onclick="addToCart(1)"]')*/
        cart :()=>cy.get('#cartur')
    }

    GetProduitPhone(){
        this.elements.ProduitPhone().should("be.visible")
    }
    /*CliqueAddtocart(){
        this.elements.btnaddtocart().click
    }*/
   CliqueAddtocart(){
    this.elements.addtocart().click()
   }
   Cliquecart(){
    this.elements.cart().click()
   }
}
export default new ProduitPage();