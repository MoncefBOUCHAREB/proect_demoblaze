///<reference types="cypress"/>
class LoginPage{
    elements={
        SignIn :()=>cy.get("#signin2"),
        username :()=>cy.get("#sign-username"),
        password :()=>cy.get("#sign-password"),
        SignUp :()=>cy.get(".btn.btn-primary").eq(1),
        PageSignUp : ()=> cy.get("#signInModal"),
        //signupsubtitue : ()=> cy.get('#).find()
        logIn2 :()=>cy.get("#login2"),
        username2 :()=>cy.get("#loginusername"),
        password2 :()=>cy.get("#loginpassword"),
        Pagechamps :()=>cy.get("#logInModal"),
        LogINbtn : ()=> cy.get('#logInModal').find('button[onclick="logIn()"]'),
        Welcome : ()=>cy.get('#nameofuser'),
        phone :()=> cy.get('#itemc'),
        Galaxy :()=>cy.get(".hrefch").eq(0)
    }
ButtonSignIn(){
    this.elements.SignIn().click()
}
SetUsername(u){
    this.elements.username().type(u,{force:true})
}
SetPassword(p){
    this.elements.password().type(p,{force:true})
}
CliqueSignUp(){
    this.elements.SignUp().click()
}
PageSignUpp(){
    this.elements.PageSignUp().should("be.visible")
}
CliqueLogin2(){
    this.elements.logIn2().click()
}
SetUsername2(u){
    this.elements.username2().type(u,{force:true})
}
SetPassword2(p){
    this.elements.password2().type(p,{force:true})
}
CliqueLoginIN(){
    this.elements.LogINbtn().click()
}
welcomeAff(){
    this.elements.Welcome().should("be.visible")
}
CliquePhone(){
    this.elements.phone().click()
}
CliqueGalaxy(){
    this.elements.Galaxy().click()
}
}
export default new LoginPage();