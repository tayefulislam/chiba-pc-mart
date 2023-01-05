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

  const processorModel = [
    { value: "amd ryzen 3", label: "AMD ryzen 3" },
    { value: "intel celeron n4500", label: "Intel Celeron N4500" },
    { value: "intel core i3", label: "Intel Core i3" },
    { value: "intel core i5", label: "Intel Core i5" },
    { value: "intel core i6", label: "Intel Core i6" },
    { value: "intel core i7", label: "Intel Core i7" },
    { value: "", label: "" },
  ];

  const processorBrand = [
    { value: "intel", label: "Intel" },
    { value: "amd", label: "AMD" },
    { value: "apple", label: "Apple" },
    { value: "microsoft", label: "Microsoft" },
  ];

  const status = [
    { value: "in-stock", label: "In Stock" },
    { value: "out-of-stock", label: "Out Of Stock" },
    { value: "pre-order", label: "Pre-Order" },
    { value: "discontinued", label: "Discontinued" },
  ];

  const brand = [
    { value: "apple", label: "Apple" },
    { value: "hp", label: "HP" },

    { value: "macbook", label: "MacBook" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const productType = event.target.productType.maxRAMCapacity;

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
          {/* Product Type */}

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

          <TextField
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

          {/* Quantity */}

          <TextField label="Quantity" type="number" name="quantity"></TextField>

          {/* // Brand Name */}

          <Autocomplete
            disablePortal
            options={brand}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Brand Name" />
            )}
          />

          <TextField
            select
            label="Status"
            defaultValue="in-stock"
            name="status"
          >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Discount Price"
            type="number"
            name="discountPrice"
          ></TextField>

          <TextField
            label="Regular Price"
            type="number"
            name="regularPrice"
          ></TextField>
        </Box>

        <h1 className="p-2">Product Images</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Image Link" type="text" name="image-1"></TextField>
          <TextField
            label="Image Link 2"
            type="text"
            name="image-2"
          ></TextField>
          <TextField label="Image Link3" type="text" name="image-3"></TextField>
          <TextField
            label="Image Link 4"
            type="text"
            name="image-4"
          ></TextField>
        </Box>

        {/* Processor Specifications */}
        <h1 className="p-2">Processor Specifications</h1>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {/* Processor Brand */}
          <TextField select label="Processor Brand" name="processorBrand">
            {processorBrand.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField select label="Processor Model" name="processorModel">
            {processorModel.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Generation / Series"
            type="number"
            name="generationOrSeries"
          ></TextField>

          <TextField
            label="Processor Frequency Min"
            type="number"
            name="processorFrequencyMin"
          ></TextField>
          <TextField
            label="Processor Frequency Max "
            type="number"
            name="processorFrequencyMax"
          ></TextField>

          <TextField
            label="Processor Core"
            type="number"
            name="processorCore"
          ></TextField>
          <TextField
            label="processTread"
            type="number"
            name="processTread"
          ></TextField>
          <TextField label="CUP Cache" type="text" name="cupCache"></TextField>
        </Box>

        {/* Display Specification */}

        <h1 className="p-2">Display Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Display Size"
            type="number"
            name="displaySize"
          ></TextField>
          <TextField
            label="Display Resolution"
            type="text"
            name="displayResolution"
          ></TextField>
          <TextField
            label="Display Features"
            type="text"
            name="displayFeatures"
          ></TextField>
        </Box>

        <h1 className="p-2">Display Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="RAM Size" type="number" name="ram"></TextField>

          <TextField label="RAM Type" type="text" name="ramType"></TextField>
          <TextField
            label="BUS Speed"
            type="number"
            name="busSpeed"
          ></TextField>
          <TextField
            label="Ram Removable"
            type="number"
            name="ramRemovable"
          ></TextField>

          <TextField
            label="Total RAM Slot"
            type="number"
            name="totalRAMSlot"
          ></TextField>

          <TextField
            label="Max RAM Capacity"
            type="text"
            name="maxRAMCapacity"
            value
            onChange={handleSubmit}
          ></TextField>
        </Box>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProducts;
