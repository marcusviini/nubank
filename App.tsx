import { SafeAreaProvider } from 'react-native-safe-area-context';


import Routes from "./src/pages/Dashboard";

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}
