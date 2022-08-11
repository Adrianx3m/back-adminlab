
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
	class Calendario extends Model {
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
	Calendario.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			title: {
				allowNull: false,
				type: DataTypes.STRING
			},
			start: {
				allowNull: false,
				type: DataTypes.DATE
			},
			end: {
				allowNull: false,
				type: DataTypes.DATE
			}
	  },
	  {
		sequelize,
		modelName: 'calendario',
		tableName: 'calendarios'
	  }
	);
	return Calendario;
  };
  