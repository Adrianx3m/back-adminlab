
'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
	class Usuario extends Model {
	  /**
	   * Helper method for defining associations.
	   * This method is not a part of DataTypes lifecycle.
	   * The `models/index` file will call this method automatically.
	   */
	  // eslint-disable-next-line no-unused-vars
	  static associate(models) {
		// define association here
	  }
	}
	Usuario.init(
		{
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            username: {
                allowNull: false,
                type: DataTypes.BLOB
            },
        password: {
            allowNull: false,
            type: DataTypes.BLOB
        }
        },
	  {
		sequelize,
		modelName: 'usuario',
		tableName: 'Usuarios'
	  }
	);
	return Usuario;
  };
  