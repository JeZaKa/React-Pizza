import React from "react";

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
}

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

const Categories: React.FC<CategoriesProps> = React.memo(({ value, onClickCategory }) => {

  return (
    <div className="categories">
      <ul>
        {categories.map((categorie, index) =>
          <li key={index} onClick={() => onClickCategory(index)} className={value === index ? 'active' : ''}>{categorie}
          </li>)}
      </ul>
    </div>
  );
} )

export default Categories;