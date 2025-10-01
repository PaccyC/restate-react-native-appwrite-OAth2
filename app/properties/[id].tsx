import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import Swiper from 'react-native-swiper'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { facilities } from '@/constants/data'

const PropertyDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  const [activeIndex, setActiveIndex] = useState(0)
  
  const swiperRef = useRef<Swiper>(null)
  
  const swiperImages = [
    images.japan, 
    images.map, 
    images.newYork
  ]

  return (
    <View className='flex-1 bg-gray-100'>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Image Swiper - Fixed Height */}
        <View className='relative h-96'>
          <Swiper 
            ref={swiperRef}
            loop={false}
            activeDotStyle={{
              width: 30,
            }}
            dotStyle={{
              backgroundColor: '#fff',
            }}
            paginationStyle={{
              bottom: 20,
            }}
            onIndexChanged={(index) => setActiveIndex(index)}
          >
            {swiperImages.map((image, idx) => (
              <View key={idx} className='flex-1'>
                <Image 
                  source={image} 
                  className='size-full'
                  resizeMode='cover'
                />
              </View>
            ))}
          </Swiper>

          <TouchableOpacity
            onPress={() => router.back()}
            className='absolute top-12 left-5 p-3 z-40'
          >
            <Image 
              source={icons.backArrow} 
              className='size-7'
            />
          </TouchableOpacity>
          
          <View className='flex flex-row items-center gap-3 absolute top-12 right-5 z-40'>
            <TouchableOpacity>
              <Image 
                source={icons.heart} 
                className='size-7'
                tintColor="#191D31"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image 
                source={icons.send} 
                className='size-7'
                tintColor="#191D31"
              />
            </TouchableOpacity>
          </View>
        </View>

    
        <View className='bg-white pt-5'>
          <View className='px-5'>

          <View className='py-5 w-full border-b border-primary-200 flex flex-col gap-2 items-start'>
            <Text className='text-black-300 text-2xl font-rubik-bold'>Modernica Apartment</Text>
            <View className='flex flex-row items-center gap-4'>
              <TouchableOpacity className='bg-primary-100 rounded-full px-2 py-1'>
                <Text className='uppercase text-primary-300 font-rubik-semibold text-[10px]'>Apartment</Text>
              </TouchableOpacity>
              <View className='flex flex-row items-center'>
                <Image source={icons.star} className='mr-2'/>
                <Text className='text-black-200 font-rubik-medium text-sm'>4.8 (1,275 reviews)</Text>
              </View>
            </View> 
            <View className='mt-4 flex flex-row gap-4 items-center flex-wrap'>
              <View className='flex flex-row gap-2 items-center'>
                <View className='bg-primary-100 rounded-full p-3'>
                  <Image source={icons.bed} className='size-4'/>
                </View>
                <Text className='text-black-300 font-rubik-medium text-sm'>8 Beds</Text>
              </View>
              <View className='flex flex-row gap-2 items-center'>
                <View className='bg-primary-100 rounded-full p-3'>
                  <Image source={icons.bath} className='size-4'/>
                </View>
                <Text className='text-black-300 font-rubik-medium text-sm'>3 Bath</Text>
              </View>
              <View className='flex flex-row gap-2 items-center'>
                <View className='bg-primary-100 rounded-full p-3'>
                  <Image source={icons.area} className='size-4'/>
                </View>
                <Text className='text-black-300 font-rubik-medium text-sm'>2000 sqft</Text>
              </View>
            </View>
          </View>
          <View className='py-5 flex gap-2 items-start'>
            <Text className='text-xl font-rubik-semibold text-black-300'>Agent</Text>
            <View className='w-full flex flex-row items-center justify-between'>
              <View className='flex flex-row gap-3 items-center'>
                <Image source={images.avatar} className='size-16'/>
                <View>
                  <Text className='text-black-300 text-lg font-rubik-semibold'>Natasya Wilodra</Text>
                  <Text className='font-rubik-medium text-sm text-black-200'>Owner</Text>
                </View>
              </View>
              <View className='flex flex-row gap-3 items-center'>
                <Image source={icons.chat} className='size-7'/>
                <Image source={icons.phone} className='size-7'/>
              </View>
            </View>
          </View>
          <View className='mb-5 flex flex-col gap-2 items-start'>
            <Text className='text-xl font-rubik-semibold text-black-300'>Overview</Text>
            <Text className='text-base text-black-200 font-rubik'>
              Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and city views. Minutes from downtown, dining, and transit.
            </Text>
          </View>

          <View className='mb-5 flex flex-col gap-2 items-start'>
            <Text className='text-xl font-rubik-semibold text-black-300'>Facilities</Text>
            <View className='w-full flex flex-row justify-start gap-3 items-center flex-wrap'>
              {facilities.map((item, idx) => (
                <View key={idx} className='flex flex-col items-center w-1/5'>
                  <View className='bg-primary-100 rounded-full p-4'>
                    <Image source={item.icon} className='size-7'/>
                  </View>
                  <Text className='text-black-300 font-rubik-medium text-xs text-center mt-1'>
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View className='mb-5 flex flex-col gap-2 items-start'>
             <Text className='text-xl font-rubik-semibold text-black-300'>Gallery</Text>
             <View className='w-full flex flex-row gap-3 justify-between h-40'>
              <Image className='h-full rounded-2xl flex-1' source={images.newYork} />
               <Image className=' h-full rounded-2xl flex-1' source={images.newYork}/>
               <View className='h-full flex-1 relative rounded-2xl overflow-hidden flex items-center justify-center'>
  <Image className='size-full rounded-2xl' source={images.newYork}/>
  <Image source={images.cardGradient} className='absolute size-full rounded-2xl bottom-0'/>
  <Text className='text-white absolute text-xl font-rubik-bold'>20+</Text>
</View>
             </View>
          </View>
          <View className=' flex flex-col gap-2 items-start'>
            <Text className='text-xl font-rubik-semibold text-black-300'>Location</Text>
            <View className='flex flex-row justify-start gap-2 items-center'>
              <Image source={icons.location} className='size-5'/>
              <Text className='text-black-200 font-rubik-medium'>Grand City St. 100, New York, United States</Text>
            </View>
              <Image source={images.map} className='w-full h-60 rounded-2xl'/>
          </View>
          <View className='w-full py-5 flex flex-row justify-between items-center'>
            <View className=' flex flex-row gap-2 items-center'>
              <Image source={ icons.star} className='size-6'/>
              <Text className='text-black-300 text-xl font-rubik-semibold'>4.8 (1,275 reviews)</Text>
            </View>
            <TouchableOpacity>
              <Text className='text-primary-300 text-base font-rubik-semibold'>See All</Text>
            </TouchableOpacity>
          </View>

          <View className='w-full flex gap-2 mb-7'>
            <View className=' flex flex-row gap-2 items-center'>
              <Image source={images.avatar} className='size-12'/>
              <Text className='text-black-300 text-base font-rubik-semibold'>Charolette Hanlin</Text>
            </View>
            <Text className='text-black-200 text-base font-rubik'>The apartment is very clean and modern. I really like the interior design. Looks like I'll feel at home 😍</Text>
            <View className='flex flex-row items-center justify-between'>
              <TouchableOpacity className=' flex flex-row items-center gap-1'>
                <Image source={icons.heart} className='size-6' tintColor="#0061FF"/>
                <Text className='text-black-300 text-sm font-rubik-medium'>948</Text>
              </TouchableOpacity>

              <Text className='text-black-100 text-sm font-rubik'>6 days ago</Text>
            </View>
          </View>
          </View>


          <View className=' rounded-2xl pt-3 pb-5 border-[1px] border-primary-200 px-6'>
            <View className='flex flex-row items-center justify-between gap-10'>
              <View className='flex items-start'>
                <Text className='uppercase text-black-200 font-rubik-medium text-xs'>Price</Text>
                <Text className='text-primary-300 text-2xl font-rubik-semibold mt-1'>$17821</Text>
              </View>
              <TouchableOpacity className='bg-primary-300 flex-1 py-3 flex items-center rounded-full'>
                 <Text className='text-white font-rubik-semibold text-base'>Booking Now</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default PropertyDetailsScreen