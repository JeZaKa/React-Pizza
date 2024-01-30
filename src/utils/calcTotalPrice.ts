import { IPizza } from "../types/types";

export const calcTotalPrice = (items: IPizza[]) => {
  return items.reduce((sum, obj) => {
    return (obj.price * obj.count) + sum;
  }, 0);
}