import { useEffect, useState } from "react";
import { throttle } from "../utils/index";

function VirtualizedList({
  numberOfElements,
  renderCount,
  listItemHeight,
  overscan,
}: {
  numberOfElements: number;
  listItemHeight: number;
  overscan: number;
  renderCount: number;
}) {
  const [scrollTop, setScrollTop] = useState(0);

  const totalContentHeight = listItemHeight * numberOfElements;
  const viewPortHeight = renderCount * listItemHeight;

  const [startIndex, setStartIndex] = useState(0);
  const [stopIndex, setStopIndex] = useState(0);

  useEffect(() => {
    const newStartIndex = Math.max(
      0,
      Math.floor(scrollTop / listItemHeight) - overscan
    );
    const newStopIndex = Math.min(
      numberOfElements - newStartIndex,
      renderCount + 2 * overscan
    );
    setStartIndex(newStartIndex);
    setStopIndex(newStopIndex);
  }, [scrollTop, listItemHeight, overscan, numberOfElements, renderCount]);

  const handleScrollChange = throttle(
    (e: React.UIEvent<HTMLElement>) => setScrollTop(e.currentTarget.scrollTop),
    50
  );

  function getVisibleItems() {
    const items: JSX.Element[] = [];

    for (let i = startIndex; i < startIndex + stopIndex; i++) {
      items.push(<ListItem key={i} index={i} />);
    }

    return items;
  }

  return (
    <>
      <h3>List items</h3>
      <div
        onScroll={handleScrollChange}
        style={{
          height: `${viewPortHeight}px`,
          width: "300px",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            height: `${totalContentHeight}px`,
          }}
        >
          <ul
            style={{
              transform: `translateY(${startIndex * listItemHeight}px)`,
            }}
          >
            {getVisibleItems()}
          </ul>
        </div>
      </div>
    </>
  );
}

function ListItem({ index }: { index: number }) {
  return <li>List item {index}</li>;
}

export default VirtualizedList;
