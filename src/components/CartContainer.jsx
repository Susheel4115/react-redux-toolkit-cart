import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";

import { openModal } from "../features/Modal/ModalSlice";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, cartItemsCount, totalCost } = useSelector(
    (store) => store.cart
  );
  if (cartItemsCount < 1) {
    return (
      <section className="cart">
        <h2>your cart </h2> <h4 className="empty-cart"> is currently empty</h4>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total cost <span>₹{totalCost.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
