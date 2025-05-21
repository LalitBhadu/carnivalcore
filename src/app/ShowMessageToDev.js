"use client";

import { useEffect, useState } from "react";

// Moved outside
const devToolsDetect = () => {
  const threshold = 100;
  return window.outerHeight - window.innerHeight > threshold;
};

const ShowMessageToDev = () => {
  const [devToolsOpen, setDevToolsOpen] = useState(false);

  useEffect(() => {
    const checkDevTools = () => {
      const isOpen = devToolsDetect();
      if (isOpen !== devToolsOpen) {
        setDevToolsOpen(isOpen);
      }
    };

    const interval = setInterval(checkDevTools, 1000);
    return () => clearInterval(interval);
  }, [devToolsOpen]);

  useEffect(() => {
    if (devToolsOpen) {
      console.log(
        "%cHey Developer!",
        "color: #FF6347; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 5px #000000;"
      );
      console.log(
        "%cWelcome to this website! Please don't break it 😉",
        "color: #4CAF50; font-size: 16px; font-style: italic;"
      );

      const devMessage = document.createElement("div");
      devMessage.id = "dev-warning-msg"; // give it an id
      devMessage.style.position = "fixed";
      devMessage.style.bottom = "20px";
      devMessage.style.left = "50%";
      devMessage.style.transform = "translateX(-50%)";
      devMessage.style.padding = "15px 30px";
      devMessage.style.backgroundColor = "#FF6347";
      devMessage.style.color = "#fff";
      devMessage.style.borderRadius = "10px";
      devMessage.style.fontSize = "18px";
      devMessage.style.fontWeight = "bold";
      devMessage.style.textAlign = "center";
      devMessage.style.zIndex = "9999";
      devMessage.innerHTML = "Hey Developer! Please be nice 😉";
      document.body.appendChild(devMessage);
    } else {
      const devMessage = document.getElementById("dev-warning-msg");
      if (devMessage) {
        devMessage.remove();
      }
    }
  }, [devToolsOpen]);

  return null;
};

export default ShowMessageToDev;
