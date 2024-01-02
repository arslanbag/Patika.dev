
import 'react-native-gesture-handler';
import React from 'react';
import Route from '../Navigations/Route';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Store } from '../Store/Store';
import Contex from '../Contex';


function App(): React.JSX.Element {

  return (
    <Provider store={Store}>
      <Contex>
        <NavigationContainer>
            <Route />
        </NavigationContainer>
      </Contex>
    </Provider>

  );

  
}





export default App;
