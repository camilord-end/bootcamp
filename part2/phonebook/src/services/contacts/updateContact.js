import axios from "axios";

export const updateContact = ( data ) => {
  return axios.put(`http://localhost:3001/persons/${data.id}`, data)
}