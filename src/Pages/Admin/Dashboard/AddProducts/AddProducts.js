import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import axios from "axios";

const short = require("short-uuid");

const AddProducts = () => {
  // seletion values from server

  const pid = "PID-" + short.generate().toLocaleUpperCase().slice(0, 10);

  const [values, setValues] = React.useState({
    productType: "",
    productId: pid,
    urlTag: "",
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

    // storage section

    storageType: "",
    storageCapacity: "",
    hddRPM: "",
    extraM2Slot: "",
    supportedSSDType: "",

    // Graphics
    graphicsModel: "",
    graphicsMemory: "",

    // // KeyBoard & Touch Pad
    keyboardType: "",
    keyboardFeatures: "",
    touchPad: "",
    touchPadFeatures: "",

    // // Camera and Audio

    webcam: "",
    speaker: "",
    microPhone: "",

    // // Port & Slots

    opticalDrive: "",
    cardReader: "",
    HDMIPort: "",
    USB3Port: "",
    USBTypeCPort_ThunderboltPort: "",
    headPhone_MicroPhonePort: "",

    // // Network and Connectivity

    LAN: "",
    Wifi: "",
    bluetooth: "",
    // // Security
    fingerprintSensor: "",

    // // Software

    Os: "",
    // //Power

    batteryType: "",
    batteryCapacity: "",
    backupTime: "",
    adapterType: "",

    // // Physical Specification

    color: "",
    dimensions: "",
    weight: "",

    // // Warranty
    warrantyDetails: "",
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
    const mainTitle =
      values.urlTag
        .replaceAll(" " || "'" || '"' || "=" || ",", "-")
        .toLocaleLowerCase() +
      "-" +
      short.generate().toLocaleLowerCase().slice(0, 4);

    values.slug = mainTitle;

    const removeEmptyValues = (object) => {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          var value = object[key];
          if (value === null || value === undefined || value === "") {
            delete object[key];
          }
        }
      }
    };

    removeEmptyValues(values);
    console.log(values);

    const url = `http://localhost:5000/api/v1/products`;

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

  console.log(short.generate());

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
              class="input w-[600px] p-2"
              onChange={handleChangeForm("title")}
            />
            <label class="label"></label>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">URL Tag</span>
            </label>
            <input
              type="text"
              required
              placeholder="URL Tag"
              name="urlTag"
              class="input w-[600px] p-2"
              onChange={handleChangeForm("urlTag")}
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

        <h1 className="p-2">RAM Specification</h1>

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
            type="text"
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

        <h1 className="p-2">Storage Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Storage Type"
            onChange={handleChangeForm("storageType")}
            type="text"
          ></TextField>

          <TextField
            label="Storage Capacity"
            onChange={handleChangeForm("storageCapacity")}
            type="text"
          ></TextField>
          <TextField
            label="HDD RPM"
            type="number"
            onChange={handleChangeForm("busSpeed")}
          ></TextField>
          <TextField
            label="Supported SSD Type"
            onChange={handleChangeForm("supportedSSDType")}
            type="text"
          ></TextField>
        </Box>

        <h1 className="p-2">Graphics Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Graphics Model"
            onChange={handleChangeForm("graphicsModel")}
            type="text"
          ></TextField>

          <TextField
            label="Graphics Memory"
            onChange={handleChangeForm("graphicsMemory")}
            type="text"
          ></TextField>
        </Box>

        <h1 className="p-2">KeyBoard and Touch Pad Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Keyboard Type"
            onChange={handleChangeForm("keyboardType")}
            type="text"
          ></TextField>

          <TextField
            label="Keyboard Features"
            onChange={handleChangeForm("keyboardFeatures")}
            type="text"
          ></TextField>
          <TextField
            label="Touch Pad"
            type="text"
            onChange={handleChangeForm("touchPad")}
          ></TextField>
          <TextField
            label="Touch Pad Features"
            onChange={handleChangeForm("touchPadFeatures")}
            type="text"
          ></TextField>
        </Box>

        <h1 className="p-2">Camera and Audio Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Webcam"
            onChange={handleChangeForm("webcam")}
            type="text"
          ></TextField>

          <TextField
            label="Speaker"
            onChange={handleChangeForm("speaker")}
            type="text"
          ></TextField>
          <TextField
            label="microPhone"
            type="text"
            onChange={handleChangeForm("microPhone")}
          ></TextField>
        </Box>

        <h1 className="p-2">Port And Slots Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Optical Drive"
            onChange={handleChangeForm("opticalDrive")}
            type="text"
          ></TextField>

          <TextField
            label="HDMI Port"
            onChange={handleChangeForm("HDMIPort")}
            type="text"
          ></TextField>
          <TextField
            label="USB3 Port"
            type="text"
            onChange={handleChangeForm("USB3Port")}
          ></TextField>
          <TextField
            label="USB Type C Port Thunderbolt Port"
            type="text"
            onChange={handleChangeForm("USBTypeCPort_ThunderboltPort")}
          ></TextField>
          <TextField
            label="Head Phone & Micro Phone Port"
            type="text"
            onChange={handleChangeForm("headPhone_MicroPhonePort")}
          ></TextField>
        </Box>

        <h1 className="p-2">Network and Connectivity Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="LAN"
            onChange={handleChangeForm("LAN")}
            type="text"
          ></TextField>

          <TextField
            label="Wifi"
            onChange={handleChangeForm("Wifi")}
            type="text"
          ></TextField>
          <TextField
            label="bluetooth"
            type="Number"
            onChange={handleChangeForm("bluetooth")}
          ></TextField>
        </Box>
        <h1 className="p-2">Security Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Fingerprint Sensor"
            onChange={handleChangeForm("fingerprintSensor")}
            type="text"
          ></TextField>
        </Box>
        <h1 className="p-2">Software Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Os"
            onChange={handleChangeForm("Os")}
            type="text"
          ></TextField>
        </Box>

        <h1 className="p-2">Power and Connectivity Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Battery Type"
            onChange={handleChangeForm("batteryType")}
            type="text"
          ></TextField>

          <TextField
            label="Battery Capacity"
            onChange={handleChangeForm("batteryCapacity")}
            type="text"
          ></TextField>
          <TextField
            label="Backup Time"
            type="text"
            onChange={handleChangeForm("backupTime")}
          ></TextField>
          <TextField
            label="Adapter Type"
            type="text"
            onChange={handleChangeForm("adapterType")}
          ></TextField>
        </Box>

        <h1 className="p-2">Physical Specification</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Color"
            onChange={handleChangeForm("color")}
            type="text"
          ></TextField>

          <TextField
            label="Dimensions"
            onChange={handleChangeForm("dimensions")}
            type="text"
          ></TextField>
          <TextField
            label="Weight"
            type="text"
            onChange={handleChangeForm("weight")}
          ></TextField>
        </Box>
        <h1 className="p-2">Warranty Details</h1>

        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Warranty Details"
            onChange={handleChangeForm("warrantyDetails")}
            type="text"
          ></TextField>
        </Box>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProducts;
