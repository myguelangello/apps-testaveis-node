import { Appointment } from "../entities/appointment";

interface CreateAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}
type CreateAppointmentResponse = Appointment // A resposta do método execute é uma instância de Appointment

export class CreateAppointment {
  /**
   * Aqui estamos criando um método execute que recebe um request e retorna uma Promise do tipo CreateAppointmentResponse
   * A Promise é um objeto usado para processamento assíncrono. 
   * Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
   */
  async execute({
    customer,
    startsAt,
    endsAt
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt
    }) // Criando um objeto de appointment

    return appointment
  }
}