import Login from "./component/Login";
import Todo from "./component/Todo";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="App">
      {token ? <Todo /> : <Login />}
    </div>
  );
}

export default App;
