import React from "react";

interface Props {
  number: number;
}

const Circle: React.FC<Props> = ({number}) => {
  return (
    <div className="circle">
      <span>{number}</span>
    </div>
  );
};

export default Circle;
