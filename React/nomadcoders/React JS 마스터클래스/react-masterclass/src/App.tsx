import { useRecoilState, useRecoilValue } from "recoil";
import { toDostate } from "./atoms";

import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDostate);
  // const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
  // console.log("drag finished");
  // console.log(args);
  // if (!destination) return; // 유저가 같은 자리에 그대로 두면 destination 없을 수 있음

  // setToDos((oldToDos) => {
  //   const toDosCopy = [...oldToDos];
  //   // console.log("Delete item on", source.index);
  //   // console.log(toDosCopy);

  //   toDosCopy.splice(source.index, 1); // 이동할 것 array에서 삭제
  //   // console.log("Delete item");
  //   // console.log(toDosCopy);

  //   // console.log("Put back", draggableId, "on", destination.index);
  //   toDosCopy.splice(destination?.index, 0, draggableId); // 어디에, 지우는 것 없이, 무엇을 넣음
  //   // console.log(toDosCopy);
  //   return toDosCopy;
  // });
  // }; // 드래그 끝냈을 때 불려지는 함수
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { draggableId, destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1); // 이동할 것 array에서 삭제
        boardCopy.splice(destination?.index, 0, taskObj); // 어디에, 지우는 것 없이, 무엇을 넣음
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  // App 전체에 적용됨 (그 부분에만 해야함 나중엔)
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

// function App() {
//   const [minutes, setMinutes] = useRecoilState(minuteState); // 결과를 array로 줌
//   // const hours = useRecoilValue(hourSelector);
//   const [hours, setHours] = useRecoilState(hourSelector); // set 사용하기
//   const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
//     setMinutes(+event.currentTarget.value); // 앞에 + 붙이면 string -> number 바꿔줌
//   };
//   const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
//     setHours(+event.currentTarget.value);
//   };

//   return (
//     <div>
//       <input
//         value={minutes}
//         onChange={onMinutesChange}
//         type="number"
//         placeholder="Minutes"
//       />
//       <input
//         value={hours}
//         onChange={onHoursChange}
//         type="number"
//         placeholder="Hours"
//       />
//     </div>
//   );
// }

export default App;
