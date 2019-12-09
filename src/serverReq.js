import axios from "axios"

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3001"

export function loginReq({ email, password }) {
  return async function() {
    try {
      await axios
        .post(`${baseURL}/login`, {
          data: {
            email,
            password
          }
        })
        .then(function({ data }) {
          if (data.auth) {
            localStorage.setItem("token", data.token)
          }
        })
    } catch (error) {
      console.error(error)
    }
  }
}
