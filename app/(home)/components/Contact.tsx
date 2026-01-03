import React from "react";
import Title from "./Title";
import Button from "./Button";
const Contact = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center w-full">
      <Title
        text="Contact Me"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="flex flex-col items-center gap-6 mt-10">
        <p className="text-gray-300 text-center max-w-md">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <Button text="Say Hello" href="mailto:rahulmaurya.dev@gmail.com" />
      </div>
    </div>
  );
};

export default Contact;
