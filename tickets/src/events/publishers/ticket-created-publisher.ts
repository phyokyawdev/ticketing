import { Publisher, Subjects, TicketCreatedEvent } from "@pktickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
