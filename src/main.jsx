import React from "react";
import ReactDOM from "react-dom/client";

import {
  createWrapperElement,
  isValidConfig,
  isWidgetAlreadyLoaded,
} from "./utility/index.js";

import App from "./App.jsx";

import "./index.css";

(function () {
  const pollStore = window.CustomPoll || {};
  for (const uniqueId in pollStore || {}) {
    if (!pollStore[uniqueId].c) {
      throw new Error("Configuration is not added.");
    }
    for (const pollConfig of pollStore[uniqueId].c) {
      if (!isValidConfig(pollConfig)) {
        throw new Error("Widget is not properly configured.");
      }
      if (isWidgetAlreadyLoaded(uniqueId)) {
        throw new Error(
          `Widget with identifier [${uniqueId}] is already running.`
        );
      }
      const wrapperId = pollConfig.parentElementId || uniqueId;
      if (!pollConfig.parentElementId) {
        createWrapperElement(uniqueId);
      }
      renderWidget(uniqueId, wrapperId, pollConfig);
      window[`loaded-${uniqueId}`] = true;
    }
  }
})();

function renderWidget(uniqueId, rootElementId, config) {
  const root = document.getElementById(rootElementId);
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App uniqueId={uniqueId} pollConfig={config} />
    </React.StrictMode>
  );
}