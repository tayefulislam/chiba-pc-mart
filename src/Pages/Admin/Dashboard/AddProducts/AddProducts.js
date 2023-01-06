import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

const AddProducts = () => {
  // seletion values from server

  const [values, setValues] = React.useState({
    productType: "",
    title: "",
    brand: "",
    quantity: 0,

    status: "",

    description: "",
    discountPrice: "",
    regularPrice: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",

    processorBrand: "",
    processorModel: "",
    generationOrSeries: "",
    processorFrequencyMin: "",
    processorFrequencyMax: "",
    processorCore: "",
    processTread: "",
    cupCache: "",
    displaySize: "",
    displayResolution: "",
    ram: "",
    ramType: "",
    busSpeed: "",
    maxRAMCapacity: "",
    ramRemovable: "",
    totalRAMSlot: "",
  });

  const handleChangeForm = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  console.log(values);
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

    const url = `http://localhost:5000/api/v1/products`;
    console.log(values);

    axios
      .post(url, values)
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function (response) {
        console.log(response);

        if (response.status === 200) {
          event.target.reset();
        }
      });
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
              onChange={handleChangeForm("title")}
            />
            <label class="label"></label>
          </div>

          <TextField
            select
            label="Product Type"
            name="productType"
            onChange={handleChangeForm("productType")}
          >
            {productTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          {/* Quantity */}

          <TextField
            label="Quantity"
            type="Number"
            onChange={handleChangeForm("quantity")}
            name="quantity"
          ></TextField>

          {/* // Brand Name */}

          <TextField
            select
            label="Select Brand Name"
            onChange={handleChangeForm("brand")}
          >
            {brand.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Status"
            name="status"
            onChange={handleChangeForm("status")}
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
            onChange={handleChangeForm("discountPrice")}
          ></TextField>

          <TextField
            label="Regular Price"
            type="number"
            name="regularPrice"
            onChange={handleChangeForm("regularPrice")}
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
          <TextField
            label="Image Link"
            onChange={handleChangeForm("image1")}
            type="text"
            name="image1"
          ></TextField>
          <TextField
            label="Image Link 2"
            onChange={handleChangeForm("image2")}
            type="text"
            name="image2"
          ></TextField>
          <TextField
            label="Image Link3"
            onChange={handleChangeForm("image3")}
            type="text"
            name="image3"
          ></TextField>
          <TextField
            label="Image Link 4"
            onChange={handleChangeForm("image4")}
            type="text"
            name="image4"
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
          <TextField
            select
            label="Processor Brand"
            onChange={handleChangeForm("processorBrand")}
            name="processorBrand"
          >
            {processorBrand.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Processor Model"
            onChange={handleChangeForm("processorModel")}
            name="processorModel"
          >
            {processorModel.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Generation / Series"
            type="number"
            onChange={handleChangeForm("generationOrSeries")}
            name="generationOrSeries"
          ></TextField>

          <TextField
            label="Processor Frequency Min"
            type="number"
            onChange={handleChangeForm("processorFrequencyMin")}
            name="processorFrequencyMin"
          ></TextField>
          <TextField
            label="Processor Frequency Max "
            type="number"
            onChange={handleChangeForm("processorFrequencyMax")}
            name="processorFrequencyMax"
          ></TextField>

          <TextField
            label="Processor Core"
            type="number"
            onChange={handleChangeForm("processorCore")}
            name="processorCore"
          ></TextField>
          <TextField
            label="processTread"
            type="number"
            onChange={handleChangeForm("processTread")}
            name="processTread"
          ></TextField>
          <TextField
            label="CUP Cache"
            type="text"
            onChange={handleChangeForm("cupCache")}
            name="cupCache"
          ></TextField>
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
            onChange={handleChangeForm("displaySize")}
            name="displaySize"
          ></TextField>
          <TextField
            label="Display Resolution"
            type="text"
            onChange={handleChangeForm("displayResolution")}
            name="displayResolution"
          ></TextField>
          <TextField
            label="Display Features"
            type="text"
            onChange={handleChangeForm("displayFeatures")}
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
          <TextField
            label="RAM Size"
            onChange={handleChangeForm("ram")}
            type="number"
            name="ram"
          ></TextField>

          <TextField
            label="RAM Type"
            onChange={handleChangeForm("ramType")}
            type="text"
            name="ramType"
          ></TextField>
          <TextField
            label="BUS Speed"
            type="number"
            onChange={handleChangeForm("busSpeed")}
            name="busSpeed"
          ></TextField>
          <TextField
            label="Ram Removable"
            onChange={handleChangeForm("ramRemovable")}
            type="number"
            name="ramRemovable"
          ></TextField>

          <TextField
            label="Total RAM Slot"
            type="number"
            onChange={handleChangeForm("totalRAMSlot")}
            name="totalRAMSlot"
          ></TextField>

          <TextField
            label="Max RAM Capacity"
            type="text"
            onChange={handleChangeForm("maxRAMCapacity")}
            name="maxRAMCapacity"
          ></TextField>
        </Box>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProducts;
