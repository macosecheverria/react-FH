import { useEffect, useState } from "react";

type CoorsState = {
  x: number;
  y: number;
}

const Message = () => {
  const [coords, setCoords] = useState<CoorsState>({x: 0, y: 0});

  useEffect(() => {
    const onMouseMove  = ({x, y}: MouseEvent) => {
     setCoords({x,y});
    }

    window.addEventListener("mousemove", onMouseMove);    

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    }
  }, []);

  return (  
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
}
 
export default Message;