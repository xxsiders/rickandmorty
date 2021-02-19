import React from 'react';
import { Loader } from '../components';
import AppStack from '../navigation/AppStack';
import ThemeDefaults from './ThemeDefaults';


export default function App() {
  const [defaultsLoaded, setDefaultsLoaded] = React.useState(false)

  React.useEffect(() => {
    ThemeDefaults().then(() => setDefaultsLoaded(true))
  }, [])

  if (!defaultsLoaded) return <Loader />
  return <AppStack />
}

