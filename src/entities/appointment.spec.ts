import { expect, test } from 'vitest';
import { Appointment } from './appointment';
import { getFutureDate } from '../tests/utils/get-future-date';

test('create an appointment', () => {
  const startsAt = getFutureDate('2023-06-11')
  const endsAt = getFutureDate('2023-06-12')

  // Criando um objeto de appointment
  const appointment = new Appointment({
    customer: 'John Doe',
    startsAt,
    endsAt,
  })

  // Criando a primeira expectation
  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')
})

test('cannot create an appointment with and date before start date', () => {
  const startsAt = getFutureDate('2023-06-11')
  const endsAt = getFutureDate('2023-06-10') // Aqui estamos subtraindo para que a data final seja menor que a data inicial (o que não é permitido)

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })
  }).toThrow()
})

test('cannot create an appointment with starts date before now', () => {
  const startsAt = new Date()
  const endsAt = new Date()


  startsAt.setDate(startsAt.getDate() - 1) // Aqui estamos subtraindo para que a data inicial seja menor que a data atual (o que não é permitido)
  endsAt.setDate(endsAt.getDate() + 3)

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })
  }).toThrow()
})