import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/CartSlice";
import Modal from "./components/Modal";
import { getCartItems } from "./features/cart/CartSlice";

export default function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  console.log("App component rendered");

  // useEffect(() => {
  //   dispatch(calculateTotal());
  // }, [cartItems]);
  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);
  // Fetch the cart items only once when the component mounts
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  // Calculate the total only when the items are fetched successfully
  useEffect(() => {
    if (!isLoading) {
      dispatch(calculateTotal());
    }
  }, [cartItems, isLoading, dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    );
  }
  // if (false) {
  //   return (
  //     <div>
  //       <h3>
  //         This is my plan B if my plan A(IT job) fails then I am forward with
  //         plan B.
  //       </h3>
  //       <hr />
  //       <h4> Click the button to see the cart Items</h4>
  //       <button>Enter</button>
  //     </div>
  //   );
  // } else {
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
// }
