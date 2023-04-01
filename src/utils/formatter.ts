import { formatDistanceStrict } from 'date-fns';
import ptBr from "date-fns/locale/pt-BR";

export function formatDateDistance(date: string) {
  const distance = formatDistanceStrict(new Date(date), new Date(), {
    locale: ptBr,
    addSuffix: true
  });

  return distance;
}