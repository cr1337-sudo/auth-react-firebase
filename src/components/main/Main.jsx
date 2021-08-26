import "./main.css";
import Post from "../post/Post";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState({
    title: "",
    text: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.title && input.text) {
      setPosts([input, ...posts]);
      setInput({
        title: "",
        text: "",
      });
    } else {
      alert("Wrtite something...");
    }
    console.log(posts);
  };
  return (
    <div className="main">
      <div className="main__input">
        <form className="hola" noValidate autoComplete="off">
          <div className="main__inputForm">
            <TextField
              className="input_main"
              id="standard-basic"
              label="Title"
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
            />
            <TextField
              id="standard-basic"
              label="Post body"
              value={input.text}
              onChange={(e) => setInput({ ...input, text: e.target.value })}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <div className="main__posts">
        {posts.map(({ title, text }) => (
          <Post title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Main;
