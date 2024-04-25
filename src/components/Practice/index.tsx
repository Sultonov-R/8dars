import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from "../Button";
import InputText from "../InputField";
import "./index.css";

function Practice() {
  const [items, setItems] = useState<string[]>([]);

  function handleClick() {
    setItems([...items, "New Item"]);
  }

  function handleDragEnd(result: any) {
    
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="practice-wrapper">
        <h2>Loyiha ketma-ketligi</h2>
        <Droppable droppableId="droppable">
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
    >
      {items.map((item, index) => (
        <Draggable key={index} draggableId={`item-${index}`} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <InputText value={item} />
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder} 
    </div>
  )}
</Droppable>

        <Button click={handleClick} />
      </div>
    </DragDropContext>
  );
}

export default Practice;
