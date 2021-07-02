import { API_URL } from "../../config";
import cookie from "cookie";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      const response = await axios.post(`${API_URL}/api/users/login/`, {
        email,
        password,
      });
      const token = response.data.access;

      if ((res.statusText = "OK")) {
        const decoded = jwt_decode(token);
        console.log(decoded);
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "strict",
            path: "/",
          })
        );
        res.status(200).json(decoded);
      } else {
        res.status(500).json({ message: "Some error occurred" });
      }
    } catch (error) {
      if (error.response.status == 401) {
        res.status(401).json({ message: "Wrong email or password!" });
      } else {
        res.status(500).json({ message: "Some error occurred" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
