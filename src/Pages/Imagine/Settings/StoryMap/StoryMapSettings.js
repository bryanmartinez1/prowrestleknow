import React from "react";
import "./StoryMapSettings.css";

export default function StoryMapSettings({
  characters,
  setCharacters,
  setting,
  setSetting,
  beginning,
  setBeginning,
  middle,
  setMiddle,
  end,
  setEnd,
  conflict,
  setConflict,
  resolution,
  setResolution,
  theme,
  setTheme,
}) {
  return (
    <div className="storyMapSettings">
      <div className="rows">
        <textarea
          value={characters}
          onChange={(event) => setCharacters(event.target.value)}
          className="smTextArea"
          placeholder="Characters"
        />
        <textarea
          value={setting}
          onChange={(event) => setSetting(event.target.value)}
          className="smTextArea"
          placeholder="Settings"
        />
      </div>
      <div className="rows">
        <textarea
          value={beginning}
          onChange={(event) => setBeginning(event.target.value)}
          className="smTextArea"
          placeholder="Beginning"
        />
        <textarea
          value={middle}
          onChange={(event) => setMiddle(event.target.value)}
          className="smTextArea"
          placeholder="Middle"
        />
        <textarea
          value={end}
          onChange={(event) => setEnd(event.target.value)}
          className="smTextArea"
          placeholder="End"
        />
      </div>
      <div className="rows">
        <textarea
          value={conflict}
          onChange={(event) => setConflict(event.target.value)}
          className="smTextArea"
          placeholder="Conflict"
        />
        <textarea
          value={resolution}
          onChange={(event) => setResolution(event.target.value)}
          className="smTextArea"
          placeholder="Resolution"
        />
      </div>
      <div className="rows">
        {" "}
        <textarea
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
          className="smTextArea"
          placeholder="Theme"
        />
      </div>
    </div>
  );
}
