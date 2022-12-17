import {useNavigate, useParams} from 'react-router-dom';

const Item = ({ data }) => {
    const history = useNavigate();

    return (<>
        <div className="col-md-6 col-lg-4 col-xl-3">

            <div className="card text-center card-product" onClick={() => history(`/item/${data._id}`)}>
                <div className="card-product__img">
                    <img className="card-img" src={data.image} alt="" />
                    <ul className="card-product__imgOverlay">
                        <h5>Descripción</h5>
                    </ul>
                </div>
                <div className="card-body">
                    <p>Decor</p>
                    <h4 className="card-product__title">{data.name}</h4>
                    <p className="card-product__price">$ {data.price},00</p>
                </div>
            </div>
        </div>

    </>);
}

export default Item;