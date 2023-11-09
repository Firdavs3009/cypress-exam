import Registration from "../../PageObject/registration";


// -----------Verables-----------//
const User_PhoneNumber = '93 385 00 46';
const User_Name = 'firdavs';



describe('UZD+', () => {

    const registration = new Registration();

    //------------Registration---------------//


    it('Registration', () => {

       // cy.viewport(1400, 800); 

        cy.visit("https://uzdplus.uz/registration");
        cy.location('protocol').should('eq', 'https:');
        cy.wait(2000);
        registration.phone_Number_Field().type(User_PhoneNumber);
        registration.login_Btn();
        cy.wait(2000);
        registration.check_Btn();
        cy.wait(2000);
        registration.login_Btn();
        cy.wait(2000);

        cy.get('#field-0').type("0");   
        cy.get('#field-1').type("0");   
        cy.get('#field-2').type("0");   
        cy.get('#field-3').type("0");  
        cy.get('#field-4').type("0");  
        cy.get('#field-5').type("0");
        cy.wait(2000);

        registration.user_Name().type(User_Name);
        registration.login_Button();
        registration.select_Category();
        registration.login_Confirm_Btn();

    });
       

});

       



        
        


    

    // it("Sign in", () => {
    //     cy.visit("https://uzdplus.uz")
    //     cy.get('.w-6 > .absolute').click()
    //     cy.get('.Index_input__U5hFk').type('         ')
    //     cy.get('#loginButton').click()
    // })

    // it("Sign in", () => {
    //     cy.visit("https://uzdplus.uz")
    //     cy.get('.w-6 > .absolute').click()
    //     cy.get('.Index_input__U5hFk').type('933850046') 
    //     cy.get('#loginButton').click()
    //     cy.get('#field-0').type("0");   
    //     cy.get('#field-1').type("0");   
    //     cy.get('#field-2').type("0");   
    //     cy.get('#field-3').type("0");  
    //     cy.get('#field-4').type("0");  
    //     cy.get('#field-5').type("0");

    // })


    // it("Sign in", () => {
    //     cy.visit("https://uzdplus.uz")
    //     cy.get('.w-6 > .absolute').click()
    //     cy.get('.Index_input__U5hFk').type('933850046')
    //     cy.get('#loginButton').click()
    //     cy.get('#field-0').type("0");   
    //     cy.get('#field-1').type("0");   
    //     cy.get('#field-2').type("0");   
    //     cy.get('#field-3').type("0");  
    //     cy.get('#field-4').type("0");  
    //     cy.get('#field-5').type("0");
    //     cy.get('.Index_buttonsubmit__2rE0S').type(firdavs);

    // })


