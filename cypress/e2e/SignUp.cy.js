///<reference types="cypress"/>
import LoginPage from "../Pages/Home.js"
import ProduitPage from "../Pages/Produit.js"
import CartPage from "../Pages/Cart.js"

describe("Sign Up",{tags :"@smokee"},()=>{
   const username = `M_${Math.floor(Math.random()*10000)}`
     beforeEach('setup',()=>{
        cy.visit("https://www.demoblaze.com/")
     }) 
     it("Sign Up seccessfull",()=>{


      cy.intercept("POST","**/signup").as('signup')

        cy.on('window:alert', (text) => expect(text).to.contain('Sign up successful'))    
        LoginPage.ButtonSignIn()
        LoginPage.PageSignUpp()
        LoginPage.SetUsername(username)
        LoginPage.SetPassword("Moncef")
        LoginPage.CliqueSignUp()
        cy.wait("@signup")//temps d'attente fixe 
        })
        //cy.on('window:alert', (text) => expect(text).to.contain('Sign up successful')) 
      it("Connexion",()=>{
        LoginPage.CliqueLogin2()
        LoginPage.SetUsername2(username)
        LoginPage.SetPassword2("Moncef")
        LoginPage.CliqueLoginIN()
        LoginPage.welcomeAff()
        LoginPage.CliquePhone()
        LoginPage.CliqueGalaxy()
        cy.url().should('include','/prod.html?idp_=1')
        ProduitPage.GetProduitPhone()
        ProduitPage.CliqueAddtocart()
        cy.on('window:alert', (text) => expect(text).to.contain('Product added.'))   
        ProduitPage.Cliquecart() 
        CartPage.cliquePlaceorder()
        CartPage.SetName(username)
        CartPage.SetCountry("France")
        CartPage.SetCity("Paris")
        CartPage.SetCreditCard("12345678912345")
        CartPage.SetMouth("12")
        CartPage.SetYear("2026")
        CartPage.CliquePurchase()
        CartPage.Thankuu()
  })
})