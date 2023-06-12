import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "./create-appointment";
import { getFutureDate } from "../tests/utils/get-future-date";

describe("Create Appointment", () => {
  it("should be able to create an Appointment", () => { // O it é um alias para test    
    const startsAt = getFutureDate('2023-06-11')
    const endsAt = getFutureDate('2023-06-12')

    const createAppointment = new CreateAppointment()

    expect(createAppointment.execute({
      customer: "John Doe",
      startsAt,
      endsAt,
    })).resolves.toBeInstanceOf(Appointment) // Aqui estamos criando uma expectation para verificar se o objeto retornado é uma instância de Appointment
  })
})