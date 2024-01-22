import { useState } from 'react';
import { GradientsContext } from './context';
import { MainPage } from './pages/main-page';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GradientsContext.Provider value={{ isLoading, setIsLoading }}>
      <MainPage />
    </GradientsContext.Provider>
  );
}

export default App;
