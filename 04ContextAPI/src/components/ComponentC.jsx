import {useContext} from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  const userName = useContext(Data);
  const userAge = useContext(Data1);

  return (
    <h1>
      My name is {userName} and I am {userAge} years old
    </h1>
  );
};
  
export default ComponentC;