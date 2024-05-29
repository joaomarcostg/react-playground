import React, { useRef } from "react";
import "../styles/dragAndDrop.css";

function DragAndDrop() {
  return (
    <div className="drag-and-drop">
      <DraggableContainer key={1}>
        <DraggableItem key={1}>Item 1</DraggableItem>
        <DraggableItem key={2}>Item 2</DraggableItem>
        <DraggableItem key={3}>Item 3</DraggableItem>
      </DraggableContainer>
      <DraggableContainer key={2}>
        <DraggableItem key={4}>Item 4</DraggableItem>
        <DraggableItem key={5}>Item 5</DraggableItem>
        <DraggableItem key={6}>Item 6</DraggableItem>
      </DraggableContainer>
    </div>
  );
}

function DraggableContainer({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    if (!ref.current) return;

    const dragging = document.querySelector(".dragging") as HTMLElement;
    const afterElement = getDragPosition(e.clientY);
    if (!afterElement) {
      ref.current.appendChild(dragging);
    } else {
      ref.current.insertBefore(dragging, afterElement);
    }
  }

  function getDragPosition(y: number) {
    if (!ref.current) return null;

    const draggableElements = [
      ...ref.current.querySelectorAll("[draggable]:not(.dragging)"),
    ] as HTMLElement[];

    let closest: HTMLElement | null = null;
    let offset = Number.NEGATIVE_INFINITY;

    for (const element of draggableElements) {
      const box = element.getBoundingClientRect();
      const newOffset = y - box.top - box.height / 2;

      if (newOffset > offset && newOffset < 0) {
        closest = element;
        offset = newOffset;
      }
    }
    return closest;
  }

  return (
    <div ref={ref} className="draggable-container" onDragOver={handleDragOver}>
      {children}
    </div>
  );
}

function DraggableItem({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleDragStart() {
    if (!ref.current) return;

    ref.current.classList.add("dragging");
  }

  function handleDragEnd() {
    if (!ref.current) return;

    ref.current.classList.remove("dragging");
  }

  return (
    <div
      ref={ref}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="drag-and-drop__item"
      draggable="true"
    >
      {children}
    </div>
  );
}

export default DragAndDrop;
