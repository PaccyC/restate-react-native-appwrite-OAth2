import RegularCard from "@/components/Card";
import FeaturedCard from "@/components/FeacturedCard";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provide";
import { Link } from "expo-router";
import {  FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  const {user}= useGlobalContext()
  return (
 
      <SafeAreaView className="bg-gray-100 h-full">
        <FlatList
         data={[1,2,3,4]}
         renderItem={({item})=><RegularCard/>}
         keyExtractor={(item)=>item.toString()}
         numColumns={2}
         contentContainerClassName="pb-32"
         columnWrapperClassName=" flex gap-5 px-5"
         showsVerticalScrollIndicator={false}
         ListHeaderComponent={
            <View className="px-5">
          <View className="w-full flex flex-row items-center justify-between mt-5">
            <View className="flex flex-row items-center">
              <Image source={images.avatar} className="size-12 rounded-full"/>
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-base  font-rubik-medium text-black-300">{user?.name}</Text>
            </View>
            </View>
            <Image source={icons.bell} className="size-6"/>
          </View>
        <Search/>
        <View className="my-5">
          <View className=" flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
            <TouchableOpacity>
              <Text className="text-base  text-primary-300 font-rubik-bold">See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList 

        data={[1.2,3]}
        renderItem={()=><FeaturedCard/>}
        keyExtractor={(item)=>item.toString()}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="flex flex-row gap-5 mt-5"
        />
     
          <View className="my-5">
          <View className=" flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
            <TouchableOpacity>
              <Text className="text-base  text-primary-300 font-rubik-bold">See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Filters/> 
       
        </View>

         }
        />
      
      </SafeAreaView>

  );
}

