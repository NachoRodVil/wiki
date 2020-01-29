const Sequelize = require('sequelize')
const db= require("./db.js")
class Page extends Sequelize.Model {}
Page.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {sequelize: db, modelName: 'page' });
module.exports = {
  Page: Page
};