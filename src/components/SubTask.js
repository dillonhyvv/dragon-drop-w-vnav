import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
const SubTask = (props) => {
  return (
    <Droppable droppableId={props.type}>
      {(provided) => (
        <div ref={provided.innerRef} className="bg-slate-400 opacity-70 ml-10">
          {props.sub_tasks.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps}>
                  <div
                    className="border-2 rounded-md border-black my-4"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <div>
                      <h1>{item.task_name}</h1>
                    </div>
                    <p>Task Id: {item.id}</p>
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default SubTask;
