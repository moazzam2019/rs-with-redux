import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const API = "https://light-crow-kerchief.cyclic.app/api/phones";

function AddProduct() {
  const config = useSelector((state) => state.user.config);
  document.title = "Add Phone";

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleUrl = (event) => {
    setImgUrl(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const postData = async () => {
    const body = {
      name: name,
      category: category,
      imageUrl: imgUrl,
      price: price,
    };
    console.log(body);
    try {
      await axios.post(API, body, config);
      alert("Data Submitted");
      window.location.reload();
    } catch (err) {
      if (err.response.data.message.message === "jwt expired") {
        alert("Session expired, Please log in again.");
        localStorage.clear();
        window.location.replace("/sign-in");
      } else alert(err.response.data.message.message);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Product</h1>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoComplete="off"
          id="outlined-basic"
          name="Name"
          label="Name"
          value={name}
          variant="outlined"
          onChange={handleName}
        />

        <FormControl>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            value={category}
            onChange={handleCategory}
          >
            <MenuItem value="Apple">Apple</MenuItem>
            <MenuItem value="Samsung">Samsung</MenuItem>
            <MenuItem value="Oneplus">One Plus</MenuItem>
            <MenuItem value="Sony">Sony</MenuItem>
            <MenuItem value="Huawei">Huawei</MenuItem>
            <MenuItem value="Nokia">Nokia</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Image Url"
          value={imgUrl}
          variant="outlined"
          onChange={handleUrl}
        />

        <TextField
          id="outlined-basic"
          label="Price"
          value={price}
          variant="outlined"
          onChange={handlePrice}
        />

        <Button variant="contained" onClick={postData}>
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default AddProduct;
