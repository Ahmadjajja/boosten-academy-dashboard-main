import { useDispatch } from "react-redux/es/exports";
import { logout } from "../../store/actions/authAction";
const useNavbar = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  return { logoutUser };
};

export default useNavbar;
