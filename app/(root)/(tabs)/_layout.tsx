import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'


const TabBarIcon= ({icon,size,title,focused}:{icon:any, size:number, focused:boolean,title:string})=>{
    return(
    <View className='flex-1 mt-3 flex flex-col items-center'>
      <Image source={icon} tintColor={focused ? "#0061ff":"#666876"} resizeMode='contain' className='size-6'/>
      <Text className={`${focused ? "text-primary-300 font-rubik-medium":"text-black-200 font-rubik" } text-xs w-full text-center mt-1`}>{title}</Text>
    </View>
)}
const TabsLayout = () => {
  return (
    <Tabs  screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
            
            backgroundColor:"white",
            position:"absolute",
            borderTopColor:"#0061FF1A",
            borderTopWidth:1,
            minHeight:70
        }
    }}>
        <Tabs.Screen 
        name="index" 
        options={{
            title: "Home",
        tabBarIcon: ({color,focused,size})=> <TabBarIcon icon={icons.home} focused={focused} size={size} title='Home'/>
        }}
    
        />
        <Tabs.Screen 
        name="explore" 
        options={{title: "Explore",
    tabBarIcon: ({color,focused,size})=> <TabBarIcon icon={icons.search} focused={focused} size={size} title='Explore'/>}}
        
        />
        <Tabs.Screen 
        name="profile" 
        options={
            {title: "Profile",
            tabBarIcon: ({color,focused,size})=> <TabBarIcon icon={icons.person} focused={focused} size={size} title='Profile'/>}}/>
        
    </Tabs>
  )
}

export default TabsLayout