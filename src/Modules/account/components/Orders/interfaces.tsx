import { Product } from '@/Modules/ProductItem/interfaces'
import {
  user_data_customers_addresses as UserAdresse,
  user_data_customers_orders as UserOrder,
} from '@/Modules/account/__generated__/user'

export interface OrdersProps {
  orders?: UserOrder[]
  addresses?: UserAdresse[]
}

export interface OrderDetailsProps {
  lineItem: LineItemType
}
export interface LineItemType {
  product: Product
  price: number
  quantity: number
}
