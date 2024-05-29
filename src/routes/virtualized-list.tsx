import VirtualizedList from "../components/VirtualizedList";

function VirtualizedListPage() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1>Virtualized List</h1>
      <VirtualizedList
        numberOfElements={10000}
        listItemHeight={24}
        renderCount={30}
        overscan={10}
      />
    </div>
  );
}

export default VirtualizedListPage;
