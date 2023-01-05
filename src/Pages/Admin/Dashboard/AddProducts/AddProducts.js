import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";

const AddProducts = () => {
  // seletion values from server

  const productTypes = [
    {
      value: "laptop",
      label: "Laptop",
    },
    { value: "desktop", label: "Desktop" },
    { value: "mobile", label: "Mobile" },
  ];

  // Brands

  // const brand = [
  //   { value: "", label: "" },
  //   { value: "", label: "" },
  //   { value: "", label: "" },
  //   { value: "", label: "" },
  // ]

  const brand = [
    { value: "apple", label: "Apple" },
    { value: "hp", label: "HP" },

    { value: "macbook", label: "MacBook" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const productType = e.target.productType.value;

    console.log(title);
    console.log(productType);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Title</span>
            </label>
            <input
              type="text"
              required
              placeholder="Title"
              name="title"
              class="input input-bordered input-error w-full max-w-xs"
            />
            <label class="label"></label>
          </div>

          {/* Product Type */}

          <TextField
            id="outlined-select-currency"
            select
            label="Product Type"
            defaultValue="laptop"
            name="productType"
          >
            {productTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Autocomplete
            disablePortal
            options={brand}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Box>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProducts;
