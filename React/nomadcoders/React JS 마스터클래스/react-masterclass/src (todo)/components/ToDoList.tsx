import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // const value = useRecoilValue(toDoState); // atom 값에 접근. value = []
  // const modFn = useSetRecoilState(toDoState); // atom 값 변경
  // const [toDos, setToDos] = useRecoilState(toDoState); // 위 두개를 하나로
  // const toDos = useRecoilValue(toDoState); // 위 두개를 하나로

  // const { register, handleSubmit, setValue } = useForm<IForm>();

  // console.log(toDos);
  // const [toDo, doing, done] = useRecoilValue(toDoSelector); // 3개의 배열 받음
  const toDos = useRecoilValue(toDoSelector); //
  // console.log(selectorOutput);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}

      {/* <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} /> // text={toDo.text} category={toDo.category} id={toDo.id}를 한방에! (하나의 인터페이스로 같은 타입을 공유하기 때문에 이렇게해도 가능)
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} /> // text={toDo.text} category={toDo.category} id={toDo.id}를 한방에! (하나의 인터페이스로 같은 타입을 공유하기 때문에 이렇게해도 가능)
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} /> // text={toDo.text} category={toDo.category} id={toDo.id}를 한방에! (하나의 인터페이스로 같은 타입을 공유하기 때문에 이렇게해도 가능)
        ))}
      </ul>
      <hr /> */}
    </div>
  );
}

export default ToDoList;

// interface IForm {
//   // 필수가 아니면 ?
//   email: string;
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   password1: string;
//   extraError?: string;
// }

// function ToDoList() {
// const {
//   register,
//   watch, // watch: 입력값들의 변화 관찰
//   handleSubmit, // handleSubmit: validation 담당(preventDefault 등 진행할 수 있게)
//   formState: { errors },
//   setError, // 특정한 에러 발생
// } = useForm<IForm>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   // console.log(register("toDo"));
//   // console.log(watch());
//   const onValid = (data: IForm) => {
//     console.log(data);
//     if (data.password !== data.password1) {
//       setError(
//         "password1",
//         { message: "Password are not the same" },
//         { shouldFocus: true } // error 발생 시 입력위치 이동
//       );
//     }
//     // setError("extraError", { message: "Server offline" }); // 추가적인 에러
//   };
//   console.log(errors);

//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         {/* required: 필수 (없으면 빈 칸으로 가짐) */}
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com emails allowed",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors?.email?.message}</span>
//         <input
//           {...register("firstName", {
//             required: "right here",
//             validate: {
//               noNico: (value) =>
//                 value.includes("nico") ? "no nicos allowed" : true, // value가 nico를 포함하지 않는다면 true 반환
//               noNick: (value) =>
//                 value.includes("nick") ? "no nicos allowed" : true,
//               // async로 비동기로 만들어서 서버에 확인하고 응답 받을 수 있음
//               // test: async (value) =>
//               //   value.includes("test") ? "no nicos allowed" : true,
//             },
//           })}
//           placeholder="First Name"
//         />
//         <span>{errors?.firstName?.message}</span>
//         <input
//           {...register("lastName", { required: "right here" })}
//           placeholder="Last Name"
//         />
//         <span>{errors?.lastName?.message}</span>
//         <input
//           {...register("username", { required: "right here", minLength: 10 })}
//           placeholder="Username"
//         />
//         <span>{errors?.username?.message}</span>
//         <input
//           {...register("password", { required: "right here", minLength: 5 })}
//           placeholder="Password"
//         />
//         <span>{errors?.password?.message}</span>
//         <input
//           {...register("password1", {
//             required: "Password is required",
//             minLength: {
//               value: 5,
//               message: "Your password is too short.",
//             },
//           })}
//           placeholder="Password1"
//         />
//         <span>{errors?.password1?.message}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

// export default ToDoList;
