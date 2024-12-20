import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="Login" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="detail" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="dashboard" 
        options={{ 
          headerShown: false 
        }} 
      />
    </Stack>
  );
}