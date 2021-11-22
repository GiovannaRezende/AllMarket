import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infod_ssc_item extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_item: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_venda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infod_ssc_venda',
        key: 'id_venda'
      }
    },
    id_produto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infod_ssc_produto',
        key: 'id_produto'
      }
    },
    vl_item: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    qtd_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt_pedido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ds_entregue: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_acaminho: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ds_preparando: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'infod_ssc_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_item" },
        ]
      },
      {
        name: "id_venda",
        using: "BTREE",
        fields: [
          { name: "id_venda" },
        ]
      },
      {
        name: "id_produto",
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
    ]
  });
  return infod_ssc_item;
  }
}
