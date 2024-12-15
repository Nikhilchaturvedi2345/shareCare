import React from 'react';

const Button = () => {
  return (
    <div className="buttons-container">
        <button className="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom transition-all duration-300 ease-in-out cursor-pointer absolute " >A</button>
        <button className="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom transition-all duration-300 ease-in-out cursor-pointer absolute" >B</button>
        <button className="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom transition-all duration-300 ease-in-out cursor-pointer absolute">C</button>
        <button className="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom transition-all duration-300 ease-in-out cursor-pointer absolute">D</button>
        <button className="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom transition-all duration-300 ease-in-out cursor-pointer absolute">E</button>
        <button className="button py-[15px] px-[30px] text-base text-white bg-cyan-light rounded-[10px] shadow-custom-drop transition-all duration-300 ease-in-out cursor-pointer absolute shadow-cyan-glow">E</button>
    </div>
  );
;}
export default Button;