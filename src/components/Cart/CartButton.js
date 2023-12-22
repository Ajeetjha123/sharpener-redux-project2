import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { buttonActions } from "../../store/cartReducer";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const buttonHandler = () => {
    dispatch(buttonActions.visible());
  };
  return (
    <button className={classes.button} onClick={buttonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
