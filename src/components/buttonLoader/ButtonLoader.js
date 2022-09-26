import React from "react";
import { SyncLoader } from "react-spinners";
const ButtonLoader = (props) => {
  const { size, loading, color } = props;
  return (
    <div>
      <SyncLoader color={color} loading={loading} size={size} />
    </div>
  );
};

export default ButtonLoader;
