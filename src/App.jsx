// src/App.jsx

import React from "react";
import { FeatureFlagProvider, useFeatureFlag } from "./FeatureFlagContext";
import OldHeader from "./components/OldHeader";
import NewHeader from "./components/NewHeader";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const showNewHeader = useFeatureFlag("newHeader");
  const showFooter = useFeatureFlag("showFooter");

  return (
    <div className="App">
      {showNewHeader ? <NewHeader /> : <OldHeader />}
      <main style={{ padding: "20px" }}>
        <p>Welcome to our application with feature flags!</p>
        <p>Toggle the feature flags to see different components in action.</p>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

export default function FeatureFlagApp() {
  return (
    <FeatureFlagProvider>
      <App />
    </FeatureFlagProvider>
  );
}
