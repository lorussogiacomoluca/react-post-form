import { useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";

const [formData, setFormData] = useState({
  postAuthor: "",
  postTitle: "",
  postBody: "",
  postPublic: false,
});

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <PostForm />
      </div>
    </>
  );
}

export default App;
