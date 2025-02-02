import { RoutesApp } from "./routes/RoutesApp";
//redux toolkit
import { Agrega } from "./Agrega/Agrega";
import { Provider } from "react-redux";
import store from "./store";
function StudyApp() {
  return (
    <Provider store={store}>
      <RoutesApp />
    </Provider>
  );
}

export default StudyApp;
