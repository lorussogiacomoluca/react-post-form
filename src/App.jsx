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
    console.log(e.target.type);
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
