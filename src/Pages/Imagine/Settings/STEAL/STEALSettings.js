import React from "react";

export default function SteelSettings({ data, setS, setT, setE, setA, setL }) {
  return (
    <>
      <textarea
        value={data.steal.s}
        onChange={(event) => setS(event.target.value)}
        className="smTextArea"
        placeholder="S - Speech - what a characters says/tone/choice of words"
      />
      <textarea
        value={data.steal.t}
        onChange={(event) => setT(event.target.value)}
        className="smTextArea"
        placeholder="T - Thoughts - a characters beliefs, fears, desires, thinking"
      />
      <textarea
        value={data.steal.e}
        onChange={(event) => setE(event.target.value)}
        className="smTextArea"
        placeholder="E - Emotions - how the character feels, their mood, emotional reactions"
      />
      <textarea
        value={data.steal.a}
        onChange={(event) => setA(event.target.value)}
        className="smTextArea"
        placeholder="A - Actions - what a character does, from their behavior, to their gestures, to how they move, physical reactions"
      />
      <textarea
        value={data.steal.l}
        onChange={(event) => setL(event.target.value)}
        className="smTextArea"
        placeholder="L - Looks - how a character looks, their physical appearance, their body lanague, facial expressions"
      />
    </>
  );
}
