import { useState } from "react";
import styled from "styled-components";

// interface: object 어떤 식으로 보일지 설명
interface ContainerProps {
  bgColor: string;
  borderColor: string; // required
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; // ?: 옵션 (있거나 없을 수 있음)
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  // const [value, setValue] = useState<number | string>(0); // 초기값을 보고 타입 추측 <>로 여러개 지정 가능
  // setValue(2);
  // setValue("hello");
  // setValue(true); // => error

  // return <Container bgColor={bgColor} borderColor={borderColor ?? "white"} />; // ??: 앞이 없을 때 뒤가 초기값
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
