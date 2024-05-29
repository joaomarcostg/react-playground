import VirtualizedList from "../components/VirtualizedList";

function VirtualizedListPage() {
  return (
    <>
      <h1>Virtualized List</h1>
      <VirtualizedList
        numberOfElements={10000}
        listItemHeight={24}
        renderCount={30}
        overscan={10}
      />
    </>
  );
}

export default VirtualizedListPage;
