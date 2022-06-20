import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import {Footer} from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const [theme, setTheme] = useState("dark");
  const handleSetTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <DefaultContext.Provider value={{theme, fan, handleCreateFan, handleSetTheme}} >
        <div className = {`${theme}`}>
          <Header/>
          <hr />
          <Content />
          <hr/>
          <Footer/>
        </div>
    </DefaultContext.Provider>
  );
}
