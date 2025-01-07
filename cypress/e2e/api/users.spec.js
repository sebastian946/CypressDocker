const URL = 'https://jsonplaceholder.typicode.com/users';

describe('User API testing', () => {
    it('should get all the users', () => {
        cy.request('GET', URL)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.be.greaterThan(0);
            });
    });

    it('should create a user', () => {
        cy.request('POST', URL, { name: 'Sebastian Duque', email: 'j@g.com' })
            .then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('name', 'Sebastian Duque');
                expect(response.body).to.have.property('email', 'j@g.com');
                cy.log(response.body)
            });
    });
});
