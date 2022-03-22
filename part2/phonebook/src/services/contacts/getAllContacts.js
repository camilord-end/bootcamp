import axios from "axios"

export const getAllContacts = () => {
  return (
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        const { data } = response
        return data
      })
  )
}