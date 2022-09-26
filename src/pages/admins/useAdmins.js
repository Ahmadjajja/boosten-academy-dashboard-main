import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  readAdmin,
  deleteAdmin,
  adminUpdate,
} from "../../store/actions/adminAction";

const useAdmins = () => {
  const adminsList = useSelector((store) => store.adminReducer.adminsList);
  const [fetchLoader, setFetchLoader] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [updateButtonLoader, setUpdateButtonLoader] = useState(false);
  const [updateAdmin, setUpdateAdmin] = useState({
    name: "",
    fatherName: "",
    email: "",
    address: "",
    uid: "",
    role: "",
  });
  const dispatch = useDispatch();
  const adminFetching = () => {
    dispatch(readAdmin(setFetchLoader));
  };
  const adminDeleting = (uid) => {
    dispatch(deleteAdmin(uid, setButtonLoader));
  };
  const onUpdateHandler = (item) => {
    console.log(item);
    setUpdateAdmin({
      name: item.name,
      fatherName: item.fatherName,
      email: item.email,
      address: item.address,
      uid: item.uid,
      role: item.role,
    });
  };
  const onChangeHandler = (e) => {
    setUpdateAdmin({ ...updateAdmin, [e.target.name]: e.target.value });
  };
  const onCTAUpdate = (e) => {
    setUpdateAdmin({ ...updateAdmin, [e.target.name]: e.target.value });
    if (
      !updateAdmin.name ||
      !updateAdmin.fatherName ||
      !updateAdmin.email ||
      !updateAdmin.address
    ) {
      window.notify("All input fields are required.", "error");
    } else {
      dispatch(adminUpdate(updateAdmin, setUpdateButtonLoader));
    }
  };
  return {
    adminsList,
    fetchLoader,
    adminFetching,
    adminDeleting,
    buttonLoader,
    updateAdmin,
    onChangeHandler,
    onUpdateHandler,
    onCTAUpdate,
    updateButtonLoader,
  };
};

export default useAdmins;
