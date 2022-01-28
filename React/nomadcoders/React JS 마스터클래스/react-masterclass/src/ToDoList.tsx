import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "Please write a To Do" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

interface IForm {
  // 필수가 아니면 ?
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

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
