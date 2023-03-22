import "./App.css";

function LastName({ domElement }: { domElement: Element }) {
  const json = domElement.getAttribute("data-json") || "";
  const info = JSON.parse(json);
  return (
    <div>
      <p>{info.lastName}</p>
      <button onClick={() => alert(info.phone[0])}>click me</button>
    </div>
  );
}

export default LastName;
