import React from "react";
import "./StoryMapSettings.css";

export default function StoryMapSettings({
  data,
  setCharacters,
  setSetting,
  setBeginning,
  setMiddle,
  setEnd,
  setConflict,
  setResolution,
  setTheme,
}) {
  return (
    <div className="storyMapSettings">
      <div className="rows">
        <textarea
          value={data.storyMap.characters}
          onChange={(event) => setCharacters(event.target.value)}
          className="smTextArea"
          placeholder="Characters"
        />
        <textarea
          value={data.storyMap.setting}
          onChange={(event) => setSetting(event.target.value)}
          className="smTextArea"
          placeholder="Settings"
        />
      </div>
      <div className="rows">
        <textarea
          value={data.storyMap.beginning}
          onChange={(event) => setBeginning(event.target.value)}
          className="smTextArea"
          placeholder="Beginning"
        />
        <textarea
          value={data.storyMap.middle}
          onChange={(event) => setMiddle(event.target.value)}
          className="smTextArea"
          placeholder="Middle"
        />
        <textarea
          value={data.storyMap.end}
          onChange={(event) => setEnd(event.target.value)}
          className="smTextArea"
          placeholder="End"
        />
      </div>
      <div className="rows">
        <textarea
          value={data.storyMap.conflict}
          onChange={(event) => setConflict(event.target.value)}
          className="smTextArea"
          placeholder="Conflict"
        />
        <textarea
          value={data.storyMap.resolution}
          onChange={(event) => setResolution(event.target.value)}
          className="smTextArea"
          placeholder="Resolution"
        />
      </div>
      <div className="rows">
        <textarea
          value={data.storyMap.theme}
          onChange={(event) => setTheme(event.target.value)}
          className="smTextArea"
          placeholder="Theme"
        />
      </div>
    </div>
  );
}
