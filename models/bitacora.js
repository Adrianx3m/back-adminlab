
'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
	class Bitacora extends Model {
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
	Bitacora.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			fecha: {
				allowNull: false,
				type: DataTypes.DATE
			},
			materia: {
				allowNull: false,
				type: DataTypes.STRING
			},
			laboratorio: {
				allowNull: false,
				type: DataTypes.CHAR(3) 
			},
			grupo: {
				allowNull: false,
				type: DataTypes.CHAR(4)
			},
			practica: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			h_entrada: {
				allowNull: false,
				type: DataTypes.TIME
			},
			nombre_practica: {
				allowNull: false,
				type: DataTypes.STRING
			},
			encargado: {
				allowNull: false,
				type: DataTypes.CHAR(50)
			}
			},
	  {
		sequelize,
		modelName: 'bitacora',
		tableName: 'Bitacoras'
	  }
	);
	return Bitacora;
  };
  