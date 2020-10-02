import { Publisher, OrderCancelledEvent, Subjects } from "@pktickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
