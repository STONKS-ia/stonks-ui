import axios from "axios";

const tribunal = axios.create({
 baseURL: "https://transparencia.tce.sp.gov.br/api/json"
})

export default tribunal;
