import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../components/Exploremenu/Context/StoreContext";

export default function Cart() {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    const qty = cartItems[item._id] || 0;
    return acc + item.price * qty;
  }, 0);

  const delivery = subtotal > 0 ? 2 : 0; // delivery only if items exist
  const total = subtotal + delivery;

  return (
    <div className="cart">

      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {food_list.map((item) => {
          const quantity = cartItems[item._id] || 0;

          if (quantity > 0) {
            return (
              <div className="cart-item" key={item._id}>
                <img src={item.image} alt={item.name} className="cart-item-img" />

                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{quantity}</p>
                <p>${item.price * quantity}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  X
                </button>
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* -------- CART TOTAL SECTION -------- */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>

          <div className="cart-total-details">
            <p>Delivery</p>
            <p>${delivery}</p>
          </div>

          <div className="cart-total-details">
            <b>Total</b>
            <b>${total}</b>
          </div>

          <button className="checkout-btn">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>

    </div>
  );
}
