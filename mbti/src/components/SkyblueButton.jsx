import React from "react";
import Button from "./Button";

export default function SkyblueButton({ text, clikEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clikEvent}
      mainColor="#7edcfa"
      subColor="#3a82E0"
      hoverColor="#cfecf"
    />
  );
}
