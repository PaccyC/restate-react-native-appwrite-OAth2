import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'


interface CardProps {
  onPress?: ()=>void
}

const RegularCard = ({onPress}:CardProps) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex-1 w-full bg-white  rounded-lg py-4 px-3 flex flex-col items-start gap-2 shadow-lg shadow-black-100/70 relative mt-5'>
        <View className='h-40 w-full rounded-lg overflow-hidden relative'>

            <Image source={images.japan} className='size-full ' resizeMode='cover'/>
            <View className=' flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5'>
                  <Image source={icons.star} className='size-3.5'/>
                  <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>4.4</Text>
                </View>
        </View>
        <Text className='text-black-300 text-base font-rubik-semibold'>La Grand Maison</Text>
        <Text className='text-black-100 text-xs font-rubik'>Tokyo, Japan</Text>
        <View className='w-full flex flex-row items-center justify-between'>
            <Text className='text-primary-300 text-base font-rubik-semibold'>$1424</Text>
            <Image source={icons.heart} className='size-5 mr-2' tintColor="#191d31"/>
        </View>

    </TouchableOpacity>
  )
}

export default RegularCard