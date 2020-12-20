import {
  DataTypes,
  Model,
  ModelAttributes,
  ModelOptions,
  Sequelize,
} from 'sequelize';
import { ModelCtor } from 'sequelize/types/lib/model';

type OrderAttributes = {
  id: string;
  datetime: string;
  timestamp: number;
  lastTradeTimestamp: number;
  status: 'open' | 'closed' | 'canceled';
  symbol: string;
  type: string;
  side: 'buy' | 'sell';
  price: number;
  average?: number;
  amount: number;
  filled: number;
  remaining: number;
  cost: number;
  info: any;
};

export interface OrderInstance
  extends Model<OrderAttributes>,
    OrderAttributes {}

export function Order(sequelize: Sequelize): ModelCtor<OrderInstance> {
  const attributes: ModelAttributes<OrderInstance> = {
    id: { type: DataTypes.STRING, primaryKey: true },
    datetime: { type: DataTypes.STRING, allowNull: false },
    timestamp: { type: DataTypes.BIGINT, allowNull: false },
    lastTradeTimestamp: { type: DataTypes.BIGINT, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    symbol: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    side: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DOUBLE, allowNull: false },
    average: { type: DataTypes.DOUBLE, allowNull: true },
    amount: { type: DataTypes.DOUBLE, allowNull: false },
    filled: { type: DataTypes.DOUBLE, allowNull: false },
    remaining: { type: DataTypes.DOUBLE, allowNull: false },
    cost: { type: DataTypes.DOUBLE, allowNull: false },
    info: { type: DataTypes.STRING, allowNull: false },
  };

  const options: ModelOptions = {
    tableName: 'orders',
    timestamps: false,
  };

  return sequelize.define<OrderInstance>('Order', attributes, options);
}
