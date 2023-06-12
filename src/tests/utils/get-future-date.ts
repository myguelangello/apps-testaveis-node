import { setYear, parseISO } from "date-fns";

/**
 * @description Retorna uma data futura com base na data atual
 */
export function getFutureDate(date: string): Date {
  return setYear(parseISO(date), new Date().getFullYear() + 1)
}