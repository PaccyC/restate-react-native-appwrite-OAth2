import { useGlobalContext } from '@/lib/global-provide'
import { Redirect, Stack } from 'expo-router'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const RootLayout = () => {
  const {loading,isLoggedIn}=useGlobalContext()

  if(loading){
    return (
      <SafeAreaView className='h-full bg-white w-full flex justify-center items-center'>
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    )
  }
   if (!isLoggedIn) {
    return <Redirect href="/sign-in" />;
  }
  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  )
}

export default RootLayout
