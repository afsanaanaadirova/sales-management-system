import axios from "axios";
import { APIRoutes } from "./routes";

export const getallInvoice = async (id = "") =>
  await axios.get(`${APIRoutes.invoices}/${id}`);
