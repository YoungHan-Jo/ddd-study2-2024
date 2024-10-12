import { Optional } from "typescript-optional";
import { Order } from "./order";
import { OrderNo } from "./orderNo";

export interface OrderRepository {
    findById(id: OrderNo): Promise<Optional<Order>>;
    save(order: Order): Promise<void>;
    update(order: Order): Promise<void>;
    delete(order: Order): Promise<void>;
}