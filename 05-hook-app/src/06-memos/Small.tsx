import { memo } from "react";

type Props = {
  value: number;
}

const Small = memo(({value}: Props) => {
  console.log("me volvi a dibujar :(");

  return (  
    <>
      <small>{value}</small>

    </>
  );
})
 
export default Small;