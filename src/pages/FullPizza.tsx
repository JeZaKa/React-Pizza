import React from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { IPizza } from "../types/types";


const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<IPizza>();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://65a3d503a54d8e805ed40e09.mockapi.io/items/' + id);
        setPizza(data)
      } catch (error) {
        alert('Not found pizza')
        navigate('/')

      }
    }
    fetchData();
  }, []);

  if (!pizza) {
    return 'Загрузка...'
  }
  return (
    <div className="container container__full-pizza">
      <div className="full-pizza__img"><img src={pizza.imageUrl} /></div>
      <h2>{pizza.title}</h2>
      <h4>Цена: {pizza.price}</h4>
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}

export default FullPizza;