import Comment from './Comments/Comment/Comment';
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
      <Comment photo={data.photo} user={data.user} message={data.message}/>
    </div>
  );
}

export default App;
