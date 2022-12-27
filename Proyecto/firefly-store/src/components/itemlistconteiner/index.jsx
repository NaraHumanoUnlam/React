import { useEffect, useState } from 'react';
import './style.css';
import { data } from './constants';
import Product from '../product';
import Modal from '../modal';
import { isObjectEmpty } from '../../utils/utils';
  
function ItemListConteiner() {
    
    const [selectedProduct, setSelectedProduct] = useState({});
    const [showModal, setShowModal] = useState(false);
    const products = data;
    useEffect(() => {
      if(!isObjectEmpty(selectedProduct)) {
        setShowModal(true);
      }
    }, [selectedProduct]);

    return (
      <main className="itemListConteiner">
        {products.map((product) => (
          <Product product={product} setSelectedProduct={setSelectedProduct} />
        ))}
        { showModal &&
          <Modal title="Detalle del producto">
            <div>Detalles</div>
            <button className='primary-button' onClick={() => setShowModal(false)}> Cerrar</button>
          </Modal>
        }
      </main>
    );
}

export default ItemListConteiner;