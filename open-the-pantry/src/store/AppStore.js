import React, { useState } from 'react';

const AppContext = React.createContext(null);

const AppStore = (props) => {
  const [filteredRecipes, setFilteredRecipes] = useState({});

  const store = {
    desiredRecipes: [filteredRecipes, setFilteredRecipes],
  };

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export default AppStore;
export { AppContext };
