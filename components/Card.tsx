import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { Models } from 'react-native-appwrite'


interface CardProps {
  item:Models.Document,
  onPress?: ()=>void
}

const RegularCard = ({onPress,item}:CardProps) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex-1 w-full bg-white  rounded-lg py-4 px-3 flex flex-col items-start gap-2 shadow-lg shadow-black-100/70 relative mt-5'>
        <View className='h-40 w-full rounded-lg overflow-hidden relative'>

            <Image source={{uri:item.image}} className='size-full ' resizeMode='cover'/>
            <View className=' flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5'>
                  <Image source={icons.star} className='size-3.5'/>
                  <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>{item.rating}</Text>
                </View>
        </View>
        <Text className='text-black-300 text-base font-rubik-semibold'>{item.name}</Text>
        <Text className='text-black-100 text-xs font-rubik'>{item.address}</Text>
        <View className='w-full flex flex-row items-center justify-between'>
            <Text className='text-primary-300 text-base font-rubik-semibold'>${item.price}</Text>
            <Image source={icons.heart} className='size-5 mr-2' tintColor="#191d31"/>
        </View>

    </TouchableOpacity>
  )
}

export default RegularCard