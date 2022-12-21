import './styles.css';

function CartWidget() {
    return (
          <div className="carrito">
            <a className="carrito-icono" href="./index.html"><img src="https://imagizer.imageshack.com/img923/7555/SZNSeh.png" alt="" /> <p id="cantidad-carrito">0</p></a>
          </div>
    );
}

export default CartWidget;
