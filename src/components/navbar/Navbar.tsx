import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import WordButton from "../buttons/WordButton";
import {
  imageButtonProperties,
  wordButtonProperties,
} from "../../defaultCSS/Button";
import routes from "../../AppRoutes.json";
import menuIcon from "../../icons/more-horizontal.svg";
import helpIcon from "../../icons/help-circle.svg";
import userIcon from "../../icons/user.svg";
import ImageButton from "../buttons/ImageButton";
import WordDropdown from "../dropdown/WordDropdown";
import ImageDropdown from "../dropdown/ImageDropdown";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [navbarWidth, setNavbarWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setNavbarWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const userOptions = isLoggedIn
    ? [routes.user.name, routes.profile.name, routes.settings.name, "Log Out"]
    : ["Log In", "Sign Up"];
  const userOptionsFunctions = isLoggedIn
    ? [
        () => navigate(routes.user.route),
        () => navigate(routes.profile.route),
        () => navigate(routes.settings.route),
        () => {},
      ]
    : [() => {}, () => {}];

  const menuOptions = [
    routes.index.name,
    routes.visualize.name,
    routes.imagine.name,
    routes.showcase.name,
    routes.dataRing.name,
    routes.help.name,
    ...userOptions,
  ];
  const menuOptionsFunctions = [
    () => navigate(routes.index.route),
    () => navigate(routes.visualize.route),
    () => navigate(routes.imagine.route),
    () => navigate(routes.showcase.route),
    () => navigate(routes.dataRing.route),
    () => navigate(routes.help.route),
    ...userOptionsFunctions,
  ];

  return (
    <div className="navbar">
      <div className="navbar-title" onClick={() => navigate(routes.home.route)}>
        {navbarWidth >= 300 ? routes.home.name : routes.home.shortName}
      </div>
      {navbarWidth >= 880 ? (
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
            <ImageDropdown
              src={userIcon}
              alt={routes.user.name}
              toolTipText={routes.user.name}
              height="30px"
              optionsFontSize="14px"
              buttonProps={imageButtonProperties}
              options={userOptions}
              optionsFunctions={userOptionsFunctions}
            />
          </div>
        </div>
      ) : (
        <div className="navbar-image-buttons">
          <ImageDropdown
            src={menuIcon}
            alt={"Menu"}
            toolTipText={"Menu"}
            height="30px"
            optionsFontSize="12px"
            buttonProps={imageButtonProperties}
            options={menuOptions}
            optionsFunctions={menuOptionsFunctions}
          />
        </div>
      )}
    </div>
  );
}
