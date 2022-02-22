import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log("i wanna to ", newCategory);
  // };
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id); // 기존 state에 있는 배열에서 클릭한 값 찾기
      console.log(targetIndex);
      // const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any }; // as any하면 회피 가능 (타입스크립트에게 체크하지 마라)
      // console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  // 카테고리가 DOING 아닐 때만 버튼 보여줌, 인자 넘기려면 익명 함수 선언으로
  return (
    <li>
      <span>{text}</span>
      {/* {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>To Do</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )} */}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing {/* + "" 하여 string으로 바꿈 (name에 string으로 받아야함) */}
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
