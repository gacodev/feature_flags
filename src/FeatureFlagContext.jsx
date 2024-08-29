import React, { createContext, useContext } from "react";
import featureFlags from "./featureFlags";

const FeatureFlagContext = createContext();

export const FeatureFlagProvider = ({ children }) => {
  return (
    <FeatureFlagContext.Provider value={featureFlags}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlag = (flag) => {
  const flags = useContext(FeatureFlagContext);
  return flags[flag];
};
