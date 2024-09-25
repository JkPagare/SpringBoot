import axios from "axios";
import React, { useState } from "react";

const POST_API_URL = "http://localhost:8080/addproduct";



const AddProductService = (product) => {
  try {
    return axios.post(POST_API_URL, product);
  } catch (error) {
    window.alert(error);
  }
};

export default AddProductService;