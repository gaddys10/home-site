

describe("Test Suite with Timer", () => {


  describe('Verify Resume info in view', () => {
    it('Topmost and bottommost element should be in view via scroll', () => {
      // cy.viewport(1280, 800);
      cy.viewport('macbook-13');
      cy.visit('localhost:3000')
      cy.get('.name-position').should('contain', "Syrus Gaddy").should('be.visible');
      cy.get('.home-wrapper').scrollTo('bottom');
      cy.get('#fidelity-title').should('be.visible');
    })
  })

  describe("Verify LinkedIn link works", () => {
    it('should open a new page to Syrus\'s LinkedIn page', () =>{
      cy.viewport(1280, 800);
      cy.viewport('macbook-13');
      cy.visit('localhost:3000')
      cy.get('.ribbon').click();
      // cy.url().should('contain', 'linkedin');
      cy.origin('https://www.linkedin.com', () => {
        cy.url().should('contain', 'linkedin');
        // cy.get(".qJTHM").click();
        // cy.get("#email-or-phone").type('gaddys10@gmail.com');
        // cy.get("#password").type('Yayo2030?');
        // cy.get("#join-form-submit").click();
        // cy.get('h2').contains('Syrus');

      })
    })
  })

  describe("Verify Github link works", () => {
    it('should open a new page to Syrus\'s Github page', () => {
      cy.viewport(1280, 800);
      cy.viewport('macbook-13');
      cy.visit('localhost:3000');
      cy.get('.ribbon1').click();
      cy.origin('https://github.com', () => {
        cy.get('.vcard-fullname').should('contain', 'Syrus Gaddy');
        cy.url().should('contain', 'github');
      })
    })
  })

  describe("verify portfolio works", () => {
    it('should open portfolio', () => {
      cy.viewport(1280, 800);
      cy.viewport('macbook-13');

      cy.visit('localhost:3000');
      cy.get('.ribbon2').click();
      cy.get('.portfolioTitle').should('be.visible').should("have.text", "Portfolio");
      cy.get('.art-box-title').should('be.visible').should('have.text', 'Art');
      cy.get('.prototype-box-title').should('be.visible').should('have.text', 'Prototypes');
      cy.get('.graphics-box-title').should('be.visible').should('have.text', 'Graphics');
      cy.get('.mock-box-title').should('be.visible').should('have.text', 'Mock Websites');

      cy.log("Opening Art Section")
      cy.get('.art-box').click();
      cy.get('.art-1').should('be.visible')
      cy.get('.art-2').should('be.visible')
      cy.get('.art-3').should('be.visible')

      cy.get('.art-1').click();
      cy.get('img').should('be.visible');
      cy.go("back");


      cy.get('.ribbon2').click();
      cy.get('.art-box').click();
      cy.get('.art-2').click();
      cy.get('img').should('be.visible');
      cy.go("back");

      cy.get('.ribbon2').click();
      cy.get('.art-box').click();
      cy.get('.art-3').click();
      cy.get('img').should('be.visible');
      cy.go("back");

      cy.get('.ribbon2').click();
      cy.get('.art-box').click();
      cy.get('.back-arrow').click();

      cy.get('.prototype-box').click();
      cy.get('.back-arrow').click();

      cy.log("Opening prototype section")
      cy.get('.prototype-box').click();
      cy.get('.prototype-title-1').should('be.visible').should('have.text', 'Responsive Mobile Login');
      cy.get('.prototype-title-2').should('be.visible').should('have.text', 'iPad Feature Walkthrough');
      cy.get('.prototype-title-3').should('be.visible').should('have.text', 'Initial Prototypes');

      cy.get('.prototype-title-1').click();
      cy.get('.back-arrow').click();
      cy.get('.prototype-title-1').should('be.visible').should('have.text', 'Responsive Mobile Login');
      cy.get('.prototype-title-2').should('be.visible').should('have.text', 'iPad Feature Walkthrough');
      cy.get('.prototype-title-3').should('be.visible').should('have.text', 'Initial Prototypes');

      cy.get('.prototype-title-1').click();
      cy.get('.responsive-1').should('be.visible')
      cy.get('.responsive-2').should('be.visible')
      cy.get('.responsive-3').should('be.visible')
      cy.get('.responsive-4').should('be.visible')
      cy.get('.responsive-5').should('be.visible')

      cy.get('.responsive-1').click();
      cy.get('img').should('be.visible');
      cy.go('back');

      cy.get('.ribbon2').click();
      cy.get('.prototype-box').click();
      cy.get('.prototype-title-1').click();
      cy.get('.responsive-1').click();
      cy.get('img').should('be.visible');
      cy.go('back');

      cy.get('.ribbon2').click();
      cy.get('.prototype-box').click();
      cy.get('.prototype-title-1').click();
      cy.get('.responsive-2').click();
      cy.get('img').should('be.visible');
      cy.go('back');

      cy.get('.ribbon2').click();
      cy.get('.prototype-box').click();
      cy.get('.prototype-title-1').click();
      cy.get('.responsive-3').click();
      cy.get('img').should('be.visible');
      cy.go('back');

      cy.get('.ribbon2').click();
      cy.get('.prototype-box').click();
      cy.get('.prototype-title-1').click();
      cy.get('.responsive-4').click();
      cy.get('img').should('be.visible');
      cy.go('back');

      cy.get('.ribbon2').click();
      cy.get('.prototype-box').click();
      cy.get('.prototype-title-1').click();
      cy.get('.responsive-5').click();
      cy.get('img').should('be.visible');
      cy.go('back');

      cy.get('.ribbon2').click();
      cy.get('.prototype-box').click();
      cy.get('.prototype-title-2').click();
      cy.get('.ipad-1').should('be.visible');
    })
  })

  describe("Go through mock sites", () => {
    it('should open mock sites for navigation', () => {
      cy.viewport('macbook-13');
      cy.visit('localhost:3000');
      cy.get('.ribbon2').click();
      cy.get('.mock-box').click();
      cy.get('.mock-1 .mock-img').should('be.visible');
      cy.get('.mock-2 .mock-img').should('be.visible');
      cy.get('.mock-3 .mock-img').should('be.visible');

      cy.get('.mock-1').click();
      cy.get('.intro').should('be.visible')
      cy.get('.name').should('be.visible')

    })
  })
})