import Item from "../Components/Item";
import NavBar from "../Components/NavBar";
import product6 from "../img/product6.png"
import corei5 from "../img/corei5.jpg"
import mario from "../img/mario.jpg"
import ryzen from "../img/ryzen9.jpg"
import halo from "../img/halo.jpg"
import sonido from "../img/sonido.jpg"
import audio from "../img/audifonos.jpg"
import muebles from "../img/muebles.jpg"
import sillon from "../img/sillon.jpg"
import silla from "../img/silla.jpg"
import iphone from "../img/iphone.jpg"
import mac from "../img/mac.jpg"
import lamp from "../img/lamp.jpg"
import nba from "../img/nba.jpg"
import reloj from "../img/reloj.jpg"
import mesa from "../img/mesa.jpg"
import tv from "../img/tv.jpg"
import pool from "../img/pool.jpg"




import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [dataList, setDataList] = useState([])
  const params = useParams()

  const data=[
    { _id: 'a45a9bfd-be34-43c3-a201-ea3ba7a21592', name: 'Muebles', price: 3000, image: muebles, category: 'decor' },
    { _id: 'a45a9bfd-be34-43c3-a201-ea3ba7a21532', name: 'Halo 3', price: 4000, image: halo, category: 'video-games' },
    { _id: 'a45a9bfd-be34-43c3-a201-ea3ba7a21543', name: 'Sillón', price: 5000, image: sillon, category: 'decor' },
    { _id: 'a45a9bfd-be34-43c3-a201-ea3ba7a21534', name: 'Lámpara', price: 67000, image: lamp, category: 'decor' },
    { _id: 'a45a9bfd-be34-43c3-a201-ea3ba7a2f4w5', name: 'Laptop', price: 3600, image: mac, category: 'tecnology' },
    { _id: 'a45a9bfd-be34-43c3-a201-ea3ba7a25f45', name: 'Audífonos', price: 3800, image: audio, category: 'tecnology' },
    { _id: 'a45a9bfd-be34-43c3-a201-ea3ba7a2vg23', name: 'Core i5', price: 3000, image: corei5, category: 'tecnology' },
    { _id: 'a45a9bfd-be34-43c3-a201-ea3ba7a21fc3', name: 'Super Mario Odyssey', price: 3000, image: mario, category: 'video-games' },
    { _id: 'a45a9bfd-be34-43c3-a201-ea3bakuh32ef', name: 'NBA 2K', price: 4000, image: nba, category: 'video-games' },
    { _id: 'a45a9bfd-be34-43c3-a201-ea3bakhe8709', name: 'Iphone 14 Pro Max', price: 5000, image: iphone, category: 'tecnology' },
    { _id: 'a45a9bfd-be34-43c3-a201-ea398y3288t7', name: 'Reloj Pared', price: 67000, image: reloj, category: 'decor' },
    { _id: 'a45a9bfd-be34-43c3-a201-eavrtbbr3425', name: 'Mesa Comedor', price: 3600, image: mesa, category: 'decor' },
    { _id: 'a45a9bfd-be34-43c3-a201-hjdbfhsjh2423', name: 'Silla Madera Roble', price: 3800, image: silla, category: 'decor' },
    { _id: 'a45a9bfd-be34-43c3-a201-eajhegwyi3342', name: 'Ryzen 9', price: 3000, image: ryzen, category: 'tecnology' },

    { _id: 'a45a9bfd-be34-43c3-a201-ea398y3865868', name: 'Equipo De Sonido', price: 67000, image: sonido, category: 'entertainment' },
    { _id: 'a45a9bfd-be34-43c3-a201-eavrtb00efwf8', name: 'Televisor Samsung 42 Pulgadas', price: 3600, image: tv, category: 'entertainment' },
    { _id: 'a45a9bfd-be34-43c3-a201-hjdbfhijihew7', name: 'Teatro en casa', price: 3800, image: product6, category: 'entertainment' },
    { _id: 'a45a9bfd-be34-43c3-a201-eajjbe9000042', name: 'Mesa de Billar', price: 3000, image: pool, category: 'entertainment' },
]
const dataCategory = [];

data.forEach(el => {
  if (el.category === params.id) {
    dataCategory.push(el);
  }
});
if (dataCategory.length === 0) {
  for(var i=0; i<data.length;i++){
    dataCategory.push(data[i]);
  }
}

console.log(params)
console.log(dataCategory);
  return (<>
    <NavBar />
    <section className="my-4 calc-60px">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Los items más populares del mercado</p>
          <h2>Listado De <span className="section-intro__style">Productos </span> <span class="badge btn-primary badge-secondary">({dataCategory.length})</span></h2>
        </div>
        <div className="row">
            {dataCategory.map((data)=>{
              return(
                <Item key={data._id} data={data}/>
              )
            })}
        </div>
      </div>
    </section>
  </>);
}

export default ItemListContainer;