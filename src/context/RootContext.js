import React, { useState } from "react";
import { LanguageContext } from ".";

const RootContext = ({children}) => {
  const [language, setLanguage] = useState("ru");
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default RootContext;
