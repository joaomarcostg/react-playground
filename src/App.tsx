import "./App.css";
import VirtualizedList from "./components/VirtualizedList";

function App() {
  return (
    <>
      <VirtualizedList
        numberOfElements={10000}
        listItemHeight={24}
        renderCount={30}
        overscan={10}
      />
    </>
  );
}

export default App;
