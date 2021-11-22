import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tht_loginadm extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_loginAdm: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_emailAdm: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ds_senhaAdm: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infoc_tht_loginadm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_loginAdm" },
        ]
      },
    ]
  });
  return infoc_tht_loginadm;
  }
}
