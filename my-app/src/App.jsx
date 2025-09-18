import FuncInProps from "./components/FuncInProps";

function App() {
  const showName = (name="User") => {
    alert(`Hello ${name}!`);
  };
  return (
    <>
      <div>
        <h1 style={{ color: "chocolate" }}>React Practice</h1>
      </div>
      <p className="read-the-docs">By Mohammed Akbar Ali</p>
      <FuncInProps showName={showName} name="Ali"/>
      <FuncInProps showName={showName} name="Khan"/>
      <FuncInProps showName={showName}/>
      <FuncInProps showName={showName}/>
      <FuncInProps showName={showName}/>
      <FuncInProps showName={showName}/>
    </>
  );
}

export default App;
