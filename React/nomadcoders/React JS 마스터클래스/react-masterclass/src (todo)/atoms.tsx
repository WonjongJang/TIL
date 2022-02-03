import exp from "constants";
import { atom, selector } from "recoil";

// type categories = "TO_DO" | "DOING" | "DONE";

// type 보다 더 좋은 것 (어디에서든 개별값도 쓸 수 있음)
export enum Categories {
  // // 숫자 (0,1,2)
  // "TO_DO",
  // "DOING",
  // "DONE",

  // 각 이름으로
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  // toDo가 어떻게 생겼는지 타입스크립트에게 알려줌
  text: string;
  id: number;
  category: Categories; // 선택지 제한하기 위해 string 전체가 아닌 정해진 것으로
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

// toDo 작성하면 모든 것이 들어가는 곳
export const toDoState = atom<IToDo[]>({
  key: "toDo", // key 필수
  default: [], // 기본값
});

// atom을 변형할 수 있음
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    // const toDos = get(toDoState); // atom을 보고 있음
    // return [toDos.length];
    const toDos = get(toDoState);
    const category = get(categoryState);

    // return [
    //   toDos.filter((toDo) => toDo.category === "TO_DO"),
    //   toDos.filter((toDo) => toDo.category === "DOING"),
    //   toDos.filter((toDo) => toDo.category === "DONE"),
    // ];

    // if (category === "TO_DO")
    //   return toDos.filter((toDo) => toDo.category === "TO_DO");
    // if (category === "DOING")
    //   return toDos.filter((toDo) => toDo.category === "DOING");
    // if (category === "DONE")
    //   return toDos.filter((toDo) => toDo.category === "DONE");

    return toDos.filter((toDo) => toDo.category === category);
  },
});
