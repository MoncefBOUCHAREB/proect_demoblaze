///<reference types="cypress"/>
class CartPage{
    elements={
        Placeorder:()=>cy.contains("Place Order "),
        UserName :()=>cy.get("#name"),
        Country :()=>cy.get("#country"),
        City :()=>cy.get("#city"),
        CreditCard :()=>cy.get("#card"),
        Mouth :()=>cy.get("#month"),
        Year :()=>cy.get("#year"),
        Purshase :()=>cy.contains("Purchase"),
        ThankU :()=>cy.contains("Thank you for your purchase!")

    }
    cliquePlaceorder(){
        this.elements.Placeorder().click()
    }
    SetName(u){
        this.elements.UserName().type(u,{force:true})
    }
    SetCountry(C){
        this.elements.Country().type(C,{force:true})
    }
    SetCity(t){
        this.elements.City().type(t,{force:true})
    }
    SetCreditCard(d){
        this.elements.CreditCard().type(d,{force:true})
    }
    SetMouth(h){
        this.elements.Mouth().type(h,{force:true})
    }
    SetYear(b){
        this.elements.Year().type(b,{force:true})
    }
    CliquePurchase(){
        this.elements.Purshase().click()
    }
    Thankuu(){
        this.elements.ThankU().should("be.visible")
    }
    Formulaire(name,Country,City,CreditCard,Mouth,Year){
        this.SetName(name)
        this.SetCountry(Country)
        this.SetCity(City)
        this.SetCreditCard(CreditCard)
        this.SetMouth(Mouth)
        this.SetYear(Year)
    }
}
export default new CartPage();