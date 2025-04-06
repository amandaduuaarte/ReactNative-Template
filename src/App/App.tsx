import React from 'react';

import {AppRoutes} from '../presentation/routes/app.routes';

const App = () => {
  if (__DEV__) {
    require('../../ReactotronConfig.ts');
    console.info('Reactotron enabled');
  }

  return <AppRoutes />;
};

export default App;
