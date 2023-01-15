import { Button } from "@mui/material";
import React, { useState } from "react";

const UploadID = () => {
  const [idCard, setIdCard] = useState(null);

  const getIdCard = (event) => {
    setIdCard(event.target.files[0]);
  };
  return (
    <Button variant="contained" component="label">
      Upload Valid ID card
      <input
        hidden
        accept="image/*"
        type="file"
        value={idCard}
        onChange={getIdCard}
      />
    </Button>
  );
};

export default UploadID;
