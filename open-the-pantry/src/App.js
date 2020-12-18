import MainFooter from './components/MainFooter';
import NavBar from './components/NavBar';

import AppStore from './store/AppStore.js';

const App = () => {
  return (
    <AppStore>
      <NavBar />
      <MainFooter />
    </AppStore>
  );
};

export default App;
