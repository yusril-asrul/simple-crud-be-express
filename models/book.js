const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Definisi model Book
const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtitle: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true, // createdAt dan updatedAt
});

module.exports = Book;
