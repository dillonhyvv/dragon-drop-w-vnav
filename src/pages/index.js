import Head from "next/head";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import SubTask from "../components/SubTask";

export default function Home() {
  const [data, setData] = useState([
    {
      id: "1",
      task_name: "Task1",
      sub_tasks: [
        { id: "6", task_name: "Task6", sub_tasks: [] },
        { id: "7", task_name: "Task7", sub_tasks: [] },
      ],
    },
    {
      id: "2",
      task_name: "task2",
      sub_tasks: [
        { id: "8", task_name: "Task8", sub_tasks: [] },
        { id: "9", task_name: "Task9", sub_tasks: [] },
      ],
    },
    {
      id: "3",
      task_name: "task3",
      sub_tasks: [
        { id: "10", task_name: "Task10", sub_tasks: [] },
        { id: "11", task_name: "Task11", sub_tasks: [] },
      ],
    },
    { id: "4", task_name: "task4", sub_tasks: [] },
    { id: "5", task_name: "task5", sub_tasks: [] },
  ]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    console.log(result);
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    console.log("reoedered-item: ", reorderedItem);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  };

  return (
    <div>
      <Head>
        <title>Dragondrop</title>
        <meta name="description" content="new drag and drop componentz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" max-w-md ml-auto mr-auto">
        <h1 className="text-center">Dragon drop</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {data.map(({ id, task_name, sub_tasks }, index) => {
                  return (
                    <Draggable
                      draggableId={id.toString()}
                      index={index}
                      key={id}
                    >
                      {(provided) => (
                        <div
                          className=" block bg-slate-300"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <div className="border-2 rounded-md border-black my-4 bg-hyvv-yellow ">
                            <div>
                              <h1>{task_name}</h1>
                            </div>
                            <p>Task Id: {id}</p>
                          </div>
                          <SubTask
                            sub_tasks={sub_tasks}
                            type={`${id}sub`}
                          ></SubTask>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {/* {provided.placeholder} */}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}
