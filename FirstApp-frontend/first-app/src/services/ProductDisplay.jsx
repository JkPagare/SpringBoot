import React ,{useEffect,useState} from "react";
import axios from "axios";

const GET_ALL_PRODS_REST_URL = "http://localhost:8080/products";

export const allProdsList = () => 
    axios.get(GET_ALL_PRODS_REST_URL);
