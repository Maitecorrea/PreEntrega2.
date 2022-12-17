import NavBar from "../Components/NavBar";
import photoDetail from "../img/hero-banner.png"
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

import { useNavigate, useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const params = useParams()
    var elementThis
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
    for (var i = 0; i < data.length; i++) {

        if (data[i]._id === params.id) {
            elementThis = data[i]
        }
    }
    console.log(params.id)
    return (<>
        <NavBar />
        <div class="product_image_area">
            <div class="container">
                <div class="row s_product_inner">
                    <div class="col-lg-6">
                        <div class="owl-carousel owl-theme s_Product_carousel d-flex justify-content-center">
                            <div class="single-prd-item">
                                <img class="img-fluid" src={elementThis.image} alt="" width={400}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="s_product_text">
                            <h3>{elementThis.name}</h3>
                            <h2>$ {elementThis.price},00</h2>
                            <ul class="list">
                                <li><a class="active" href="#"><span>Category</span> : {elementThis.category}</a></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet commodi harum veritatis saepe, est reprehenderit corrupti velit! Vel dolorem et temporibus hic, praesentium doloremque veniam ab modi aliquid.</p>
                            <div class="product_count">
                                <label for="qty">Quantity:</label>
                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                    class="increase items-count" type="button"><i class="ti-angle-left"></i></button>
                                <input type="text" name="qty" id="sst" size="2" maxlength="12" value="1" title="Quantity:" class="input-text qty"/>
                                    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                        class="reduced items-count" type="button"><i class="ti-angle-right"></i></button>
                                    <a class="button primary-btn" href="#">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ItemDetailContainer;