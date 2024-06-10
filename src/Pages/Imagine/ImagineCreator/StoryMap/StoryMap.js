import React from "react";
import "./StoryMap.css";
import SMBox from "../../../../Components/SMBox/SMBOX";
export default function StoryMap({ data, options }) {
  return (
    <div className="storyMap">
      <div className="title"> {options.title}</div>
      <div className="author"> {options.author}</div>
      <div className="rows">
        <SMBox
          title="Characters"
          info={data.storyMap.characters}
          fillColor={
            options.backgroundColor[0 % options.backgroundColor.length]
          }
          borderColor={options.borderColor[0 % options.borderColor.length]}
        />
        <SMBox
          title="Settings"
          info={data.storyMap.settings}
          fillColor={
            options.backgroundColor[1 % options.backgroundColor.length]
          }
          borderColor={options.borderColor[1 % options.borderColor.length]}
        />
      </div>
      <div className="rows">
        <SMBox
          title="Beginning"
          info={data.storyMap.beginning}
          fillColor={
            options.backgroundColor[2 % options.backgroundColor.length]
          }
          borderColor={options.borderColor[2 % options.borderColor.length]}
        />
        <SMBox
          title="Middle"
          info={data.storyMap.middle}
          fillColor={
            options.backgroundColor[3 % options.backgroundColor.length]
          }
          borderColor={options.borderColor[3 % options.borderColor.length]}
        />
        <SMBox
          title="End"
          info={data.storyMap.end}
          fillColor={
            options.backgroundColor[4 % options.backgroundColor.length]
          }
          borderColor={options.borderColor[4 % options.borderColor.length]}
        />
      </div>
      <div className="rows">
        <SMBox
          title="Conflict"
          info={data.storyMap.conflict}
          fillColor={
            options.backgroundColor[5 % options.backgroundColor.length]
          }
          borderColor={options.borderColor[5 % options.borderColor.length]}
        />
        <SMBox
          title="Resolution"
          info={data.storyMap.resolution}
          fillColor={
            options.backgroundColor[6 % options.backgroundColor.length]
          }
          borderColor={options.borderColor[6 % options.borderColor.length]}
        />
      </div>
      <div className="rows">
        <SMBox
          title="Theme"
          info={data.storyMap.theme}
          fillColor={
            options.backgroundColor[7 % options.backgroundColor.length]
          }
          borderColor={options.borderColor[7 % options.borderColor.length]}
        />
      </div>
    </div>
  );
}
