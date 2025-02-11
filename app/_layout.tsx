import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={{ title: 'Driver Login' }} />
      <Stack.Screen name="index" options={{ title: 'MunchRun Driver' }} />
      <Stack.Screen name="order/[id]" options={{ title: 'Order Details' }} />
    </Stack>
  );
};

export default Layout;