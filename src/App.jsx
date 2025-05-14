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
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <PostForm formData={formData} setFormData={setFormData} />
      </div>
    </>
  );
}

export default App;
