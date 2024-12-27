import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import WordButton from "../buttons/WordButton";
import {
  imageButtonProperties,
  wordButtonProperties,
} from "../../defaultCSS/Button";
import routes from "../../AppRoutes.json";
import helpIcon from "../../icons/help-circle.svg";
import profileIcon from "../../icons/user.svg";
import ImageButton from "../buttons/ImageButton";
import WordDropdown from "../dropdown/WordDropdown";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-title" onClick={() => navigate(routes.home.route)}>
        {routes.home.name}
      </div>
      <div className="navbar-buttons">
        <WordButton
          text={routes.index.name}
          onClick={() => navigate(routes.index.route)}
          {...wordButtonProperties}
          type="button"
        />
        <WordDropdown
          title="Build"
          options={[routes.visualize.name, routes.imagine.name]}
          optionsFunctions={[
            () => navigate(routes.visualize.route),
            () => navigate(routes.imagine.route),
          ]}
          buttonProps={wordButtonProperties}
          optionsFontSize="14px"
        />
        <WordButton
          text={routes.showcase.name}
          onClick={() => navigate(routes.showcase.route)}
          {...wordButtonProperties}
          type="button"
        />
        <WordButton
          text={routes.dataRing.name}
          onClick={() => navigate(routes.dataRing.route)}
          {...wordButtonProperties}
          type="button"
        />
        <div className="navbar-image-buttons">
          <ImageButton
            src={helpIcon}
            alt={routes.help.name}
            toolTipText={routes.help.name}
            onClick={() => navigate(routes.help.route)}
            {...imageButtonProperties}
            type="button"
          />
          <ImageButton
            src={profileIcon}
            alt={routes.profile.name}
            toolTipText={routes.profile.name}
            onClick={() => navigate(routes.profile.route)}
            {...imageButtonProperties}
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
