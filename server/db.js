const Sequelize = require('sequelize');

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/ohmmmm';
const sequelize = new Sequelize(connectionString, {
  define: { timestamps: false },
  operatorsAliases: false
});

sequelize
  .sync({ force: false })
  .then(() => {
    return 'Sequelize updated database schema';
  })
  .catch(error => error);

module.exports = sequelize;