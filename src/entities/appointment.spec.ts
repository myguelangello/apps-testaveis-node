import { expect, test } from 'vitest';
import { Appointment } from './appointment';

test('create an appointment', () => {
  // Criando um objeto de appointment
  const appointment = new Appointment({
    customer: 'John Doe',
    startsAt: new Date(),
    endsAt: new Date(),
  })

  // Criando a primeira expectation
  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')
  //expect(appointment.endsAt).toBeGreaterThan(appointment.startsAt)
});