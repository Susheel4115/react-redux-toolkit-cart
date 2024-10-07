import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const { cartItemsCount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Sushi Hotel</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{cartItemsCount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
