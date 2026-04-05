import "./style.css";
import { showProductContainer } from "./homeProductCards.js";

const response = await fetch("/products.json");
const products = await response.json();

showProductContainer(products);