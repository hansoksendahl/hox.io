import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./reset.css";
import "./app.css"

const App = () => {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Hans Oksendahl's Blog</Title>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

export default App