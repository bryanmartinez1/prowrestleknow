import React from "react";
import "./StoryMapSettings.css";

export default function StoryMapSettings({ data, setStoryMap }) {
  function updateStoryMap(index, event) {
    const storyMapArray = [...data.storyMaps];
    storyMapArray[index] = event.target.value;
    setStoryMap(storyMapArray);
  }

  return (
    <div className="storyMapSettings">
      <div className="rows">
        <textarea
          value={data.storyMaps[0]}
          onChange={(event) => updateStoryMap(0, event)}
          className="smTextArea"
          placeholder="Characters"
        />
        <textarea
          value={data.storyMaps[1]}
          onChange={(event) => updateStoryMap(1, event)}
          className="smTextArea"
          placeholder="Settings"
        />
      </div>
      <div className="rows">
        <textarea
          value={data.storyMaps[2]}
          onChange={(event) => updateStoryMap(2, event)}
          className="smTextArea"
          placeholder="Beginning"
        />
        <textarea
          value={data.storyMaps[3]}
          onChange={(event) => updateStoryMap(3, event)}
          className="smTextArea"
          placeholder="Middle"
        />
        <textarea
          value={data.storyMaps[4]}
          onChange={(event) => updateStoryMap(4, event)}
          className="smTextArea"
          placeholder="End"
        />
      </div>
      <div className="rows">
        <textarea
          value={data.storyMaps[5]}
          onChange={(event) => updateStoryMap(5, event)}
          className="smTextArea"
          placeholder="Conflict"
        />
        <textarea
          value={data.storyMaps[6]}
          onChange={(event) => updateStoryMap(6, event)}
          className="smTextArea"
          placeholder="Resolution"
        />
      </div>
      <div className="rows">
        <textarea
          value={data.storyMaps[7]}
          onChange={(event) => updateStoryMap(7, event)}
          className="smTextArea"
          placeholder="Theme"
        />
      </div>
    </div>
  );
}
