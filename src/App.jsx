import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";

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
