import React from "react";

export default function SteelSettings({ data, setSTEAL }) {
  const placeholders = [
    "S - Speech - what a characters says/tone/choice of words",
    "T - Thoughts - a characters beliefs, fears, desires, thinking",
    "E - Emotions - how the character feels, their mood, emotional reactions",
    "A - Actions - what a character does, from their behavior, to their gestures, to how they move, physical reactions",
    "L - Looks - how a character looks, their physical appearance, their body lanague, facial expressions",
  ];

  function updateSTEAL(index, event) {
    const stealArray = [...data.steal];
    stealArray[index] = event.target.value;
    setSTEAL(stealArray);
  }
  return (
    <>
      {placeholders.map((item, index) => (
        <textarea
          value={data.steal[index]}
          onChange={(event) => updateSTEAL(index, event)}
          className="smTextArea"
          placeholder={placeholders[index]}
          key={index}
        />
      ))}
    </>
  );
}
