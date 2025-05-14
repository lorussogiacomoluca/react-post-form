import { useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import axios from "axios";

function App() {
  const endpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
  const [formData, setFormData] = useState({
    postAuthor: "",
    postTitle: "",
    postBody: "",
    postPublic: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    //DEBUG
    // console.log("Name:", name);
    // console.log("Value:", value);
    // console.log("Checked:", checked);
    // console.log("Type:", type);
    // console.log(e);
    // console.log(type === "checkbox" ? checked : value);
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(endpoint, formData)
      .then((res) => console.log("Dati inviati", res.data));
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <PostForm
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default App;
