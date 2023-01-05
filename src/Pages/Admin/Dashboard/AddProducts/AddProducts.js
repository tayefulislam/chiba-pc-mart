import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddProducts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("hello");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Outlined" variant="outlined" />
          <TextField label="Outlined" variant="outlined" />

          <input type="submit" value="Submit" />
        </Box>
      </form>
    </div>
  );
};

export default AddProducts;
