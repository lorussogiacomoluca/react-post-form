import { useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";

function App() {
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

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <PostForm
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
