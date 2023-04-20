import { App } from "./src";
import { AppProviders } from "./src/context";

const Root = () => (
  <AppProviders>
    <App />
  </AppProviders>
);

export default Root;
