import React from "react";

interface Props {
  label: string;
  content: string;
}

const DetailsField = ({ content, label}:Props) => {
  return (
    <div className={"flex"}>
      <h3 className={"font-bold"}>{label}</h3>
      <p className={"mx-1"}>:</p>
      <p>{content}</p>
    </div>
  );
};

export default DetailsField;
