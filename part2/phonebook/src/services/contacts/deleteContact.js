import axios from "axios";

export const deleteContact = ( id ) => {
  return axios.delete(`http://localhost:3001/persons/${id}`)
}