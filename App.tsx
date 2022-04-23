import { StatusBar } from 'react-native'


import Routes from "./src/pages/Dashboard";

export default function App() {
  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor="#8B10AE"/>
      <Routes />
    </>
  );
}
