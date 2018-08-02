'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    Example:
    */

    return queryInterface.bulkInsert('Users', [{
      firstName:'John Doe',
      lastName: 'Doe',
      email: 'johndoe@icloud.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName:'Michael',
      lastName: 'Jackson',
      email: 'mj@icloud.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
