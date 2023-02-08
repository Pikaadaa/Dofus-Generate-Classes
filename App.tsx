import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { Navigator } from "./src/navigation/Navigator"

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator></Navigator>
    </QueryClientProvider>
  );
}

