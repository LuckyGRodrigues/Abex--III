import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pedido from './PedidoModel';
import Produto from './ProdutoModel';

const PedidoProduto = sequelize.define(
  'pedido_produto',
  {
    idPedido: {
      field: 'id_pedido',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idProduto: {
      field: 'id_produto',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantidade: {
      field: 'quantidade',
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

PedidoProduto.belongsTo(Pedido, {
  as: 'pedido',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPedido',
    allowNull: false,
    field: 'id_pedido',
  },
});

PedidoProduto.belongsTo(Produto, {
  as: 'servico',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idServico',
    allowNull: false,
    field: 'id_servico',
  },
});

export default PedidoProduto;
