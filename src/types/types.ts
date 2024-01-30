export interface IPizza {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
}

export interface IPizzas {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  count: number;
  rating: number;
}

export type SortItem = {
  name: string;
  sortProperty: 'rating' | 'title' | 'price'|'-rating' | '-title' | '-price';
}

export interface IFilterSliceState {
  searchValue: string;
  categoryId: number;
  pageCount: number;
  sort: SortItem;
}
