import React from "react";
import ReactTypingEffect from "react-typing-effect";

export const Type = (e) => {

   let ValueSatu = "" ;

   ValueSatu = e.Value ;
    return (
    <>
      <ReactTypingEffect text={[`${ValueSatu}` ]} />

      <br />
    </>
  );
};
