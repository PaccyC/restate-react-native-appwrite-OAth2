import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import images from "@/constants/images";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { categories } from "@/constants/data";
import { router, useLocalSearchParams } from "expo-router";

const Explore = () => {
  const [openFilter, setOpenFilter] = React.useState(false);

  const bottomSheetRef= useRef<BottomSheet>(null)

  const snapPoints = useMemo(() => ['75%', '90%'], []);

  
  const handleOpenFilter = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleCloseFilter = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
  }, []);

     const params = useLocalSearchParams<{filter?:string}>();
      const [selectedCategory,setSelectedCategory]=useState(params.filter || "All");
  
      const handleChangeCategory = (category:string)=>{
          if(selectedCategory === category){
              setSelectedCategory('All');
              router.setParams({filter:"All"})
              return;
          }
         setSelectedCategory(category)
         router.setParams({filter:category})
      }

      const handleGoBack= ()=>{
        if(router.canGoBack()){
          router.back()
        }
      }
  return (
    <SafeAreaView className="w-full h-full">
      <FlatList
        data={[1, 2, 3,4,5,6]}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View className="bg-white rounded-3xl p-4 w-full flex-1">
              <View className="w-full flex flex-row justify-between items-center">
                <View className="flex flex-row items-center gap-3">
                  <View className="relative size-28 overflow-hidden">
                    <Image
                      source={images.japan}
                      className=" size-full rounded-2xl"
                    />
                    <View className=" flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-2 right-2">
                      <Image source={icons.star} className="size-3.5" />
                      <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
                        4.4
                      </Text>
                    </View>
                  </View>
                  <View className="h-full py-3 flex flex-col justify-between">
                    <View className="w-[100px]">
                    <Text className="text-black-300 font-rubik-semibold text-lg text-wrap">Lucky Lake Apartments</Text>
                    </View>
                    <Text className="text-black-200 text-sm font-rubik">Beijing, China</Text>

                  </View>
                </View>
                  <View className=" h-full py-3 flex justify-between items-end">
                    <Image source={icons.heart} className="size-6" tintColor="#666876"/>
                    <Text className="text-primary-300 text-lg font-rubik-semibold">$1234</Text>

                  </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerClassName="pb-32 flex px-5 gap-5"
        ListHeaderComponent={
          <View className="">
            <View className="w-full flex flex-row items-center justify-between">
              <TouchableOpacity
                onPress={handleGoBack}
                className="bg-primary-300/10 rounded-full p-3"
              >
                <Image
                  source={icons.backArrow}
                  className="size-6 text-black-300"
                />
              </TouchableOpacity>
              <Text className="font-rubik-medium text-base text-black-300">
                Search for Your Ideal Home
              </Text>
              <Image source={icons.bell} className="size-6" />
            </View>
            <Search onOpenFilter={handleOpenFilter}/>
            <Filters />
            <Text className="py-4 text-black-300 font-rubik-semibold text-xl">
              Found 182 Apartments
            </Text>
          </View>
        }
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        backgroundStyle={{
          backgroundColor: "white",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
        handleIndicatorStyle={{
          backgroundColor: '#D1D5DB',
        }}

      >
        <BottomSheetView style={{ flex: 1, paddingHorizontal: 16 }}>
          <View className="w-full">
            <View className="w-full flex flex-row items-center justify-between mb-6">
              <TouchableOpacity
                onPress={handleCloseFilter}
                className="bg-primary-300/10 rounded-full p-3"
              >
                <Image
                  source={icons.backArrow}
                  className="size-6 text-black-300"
                />
              </TouchableOpacity>
              <Text className="font-rubik-medium text-base text-black-300">
                Filter
              </Text>
              <TouchableOpacity onPress={() => console.log('Reset filters')}>
                <Text className="text-primary-300 font-rubik-medium text-sm">
                  Reset
                </Text>
              </TouchableOpacity>
            </View>

          <View className="w-full flex gap-3 items-start mb-4">
            <Text className=" text-black-300 font-rubik-semibold text-base">Price Range</Text>
            <Image className="size-32" source={images.newYork}/>
          </View>
          <Text className="text-base font-rubik-semibold text-black-300">Property Type</Text>
          <View className="w-full flex flex-row  gap-2 items-center flex-wrap mb-4">
             {categories.map((item,idx)=>(
                    <TouchableOpacity key={idx}
                    onPress={()=>handleChangeCategory(item.category)}
                     className={`flex flex-col items-start  my-2 py-2 px-4 rounded-full ${selectedCategory === item.category ? "bg-primary-300":"bg-primary-300/5 border border-primary-300/10"}`}
                    >
                        <Text className={` text-sm ${selectedCategory === item.category ? " text-white font-rubik-semibold":" text-black-300 font-rubik"}`}>{item.title}</Text>
                    </TouchableOpacity>
                 ))}   
          </View>
          <Text className=" text-black-300 font-rubik-semibold text-base">Home Details</Text>
          <View className="my-4">
            <View className="w-full flex flex-row justify-between items-center py-2 border-b border-primary-200">
              <Text className="text-black-200 text-sm font-rubik-medium">Bedrooms</Text>
              <View className="flex flex-row items-center gap-3">
                <TouchableOpacity className="bg-primary-200 rounded-full size-7 flex items-center justify-center">
                  <Text className="text-primary-300 font-medium text-lg">-</Text>
                </TouchableOpacity>
                <Text className="text-black-300 text-xs font-rubik-bold">2</Text>
                  <TouchableOpacity className="bg-primary-200 rounded-full size-7 flex items-center justify-center">
                  <Text className="text-primary-300 font-medium text-lg">+</Text>
                </TouchableOpacity>

              </View>

            </View>
            
              <View className="w-full flex flex-row justify-between items-center py-2">
              <Text className="text-black-200 text-sm font-rubik-medium">Bathrooms</Text>
              <View className="flex flex-row items-center gap-3">
                <TouchableOpacity className="bg-primary-200 rounded-full size-7 flex items-center justify-center">
                  <Text className="text-primary-300 font-medium text-lg">-</Text>
                </TouchableOpacity>
                <Text className="text-black-300 text-xs font-rubik-bold">2</Text>
                  <TouchableOpacity className="bg-primary-200 rounded-full size-7 flex items-center justify-center">
                  <Text className="text-primary-300 font-medium text-lg">+</Text>
                </TouchableOpacity>

              </View>

            </View>

          </View>
          <Text className=" text-black-300 font-rubik-semibold text-base">Building Size</Text>

          <TouchableOpacity className="w-full bg-primary-300  flex flex-row justify-center items-center py-3 rounded-full my-4 shadow-sm ">
            <Text className="text-white font-rubik-semibold text-base">Set Filter</Text>
          </TouchableOpacity>

          </View>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Explore;
