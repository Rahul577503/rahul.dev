import React from "react";
import Title from "./Title";
import Button from "./Button";
const Contact = () => {
  return (
    <div className="py-10 p-5  sm:p-0 flex  flex-col justify-center items-center">
      <Title
        text="Contact-Me"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="py-10">
        <Button />
      </div>
    </div>
  );
};

export default Contact;
