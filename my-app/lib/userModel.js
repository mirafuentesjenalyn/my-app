import { DataTypes } from 'sequelize';
import sequelize from './db';

// Define the User model based on the database schema
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_name: { // Match database column name
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: { // Match database column name
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_password: { // Match database column name
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'users', // Explicitly set table name
  timestamps: false,  // Disable createdAt and updatedAt
});

// Sync the model with the database
User.sync({ alter: true })
  .then(() => console.log('User table synced successfully.'))
  .catch((err) => console.error('Error syncing table:', err));

export default User;
