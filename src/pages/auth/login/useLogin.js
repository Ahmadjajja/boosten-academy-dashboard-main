import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../../../store/actions/authAction";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const useLogin = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [passwordAppearance, setPasswordAppearance] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().email("Email is invalid.").required("Required"),
      password: yup
        .string()
        .min(8, "Password must be at least of 8 characters.")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await dispatch(login(values, setIsProcessing));
    },
  });
  return { formik, setPasswordAppearance, passwordAppearance, isProcessing };
};

export default useLogin;
