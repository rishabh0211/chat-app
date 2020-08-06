import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join/Join";
// import Chat from "./components/Chat/Chat";

const ChatComponent = React.lazy(() => import("./components/Chat/Chat"));

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={() => {
        return  <Suspense fallback="<div>Loading...</div>">
                  <ChatComponent />
                </Suspense>
      }} />
    </Router>
  )
};

export default App;