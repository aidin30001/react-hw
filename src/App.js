import Comment from "./Comment/Comment.jsx"
import './App.css';

const data = {
  user: {
    name: "Tom",
    age: 27,
    email: "tom@gmail.com"
  },
  photo: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid",
  message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eaque."
}

function App() {
  return (
    <div className="App">
      <Comment user={data.user} photo={data.photo} message={data.message}/>
    </div>
  );
}

export default App;
