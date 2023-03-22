import "./App.css";

function App({ domElement }: { domElement: Element }) {
  const json = domElement.getAttribute("data-json") || "";
  const info = JSON.parse(json);
  return (
    <div className="App">
      <p>{info.firstName}</p>
      <p>{info.lastName}</p>
      <p>{info.username}</p>
      <button onClick={() => alert(info.phoneNumber)}>click me</button>
    </div>
  );
}

export default App;
