import { View, Text, TouchableOpacity, Image } from "react-native";

import React from "react";
import { EllipsisVerticalIcon } from "react-native-heroicons/outline";
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
} from "react-native-heroicons/solid";

const Subscribed = () => {
  // const readNotification = (clicked)=>{
  //   if(clicked? `bg-white` : null)
  // }

  return (
    <View>
      <View className="flex-row p-2 bg-blue-50 justify-between items-center">
        <TouchableOpacity className="">
          <View className="flex-row space-x-2 items-center">
            <View>
              <Image
                source={require("../../images/5.jpg")}
                className="h-14 w-14 rounded-lg"
              />
            </View>
            <View className=" w-[280]">
              <Text className="font-bold text-base text-gray-800 items-center">
                Nana Dee{" "}
                <Text className="text-gray-500 font-normal space-x-2 text-base">
                  {" "}
                  has subscribed to your premium profile
                </Text>
                <View className="flex-row items-center space-x-2">
                  <Text className=" mt-3 text-blue-400 text-sm font-medium">
                    @nanadee854
                  </Text>
                  <Text className="text-gray-400 mt-3 text-sm ">
                    · 15mins ago
                  </Text>
                </View>
              </Text>
            </View>
            <View className="justify-center">
              <CheckCircleIcon color="#5F9DF7" size={20} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <EllipsisVerticalIcon color="gray" />
        </TouchableOpacity>
      </View>
      <View className="border-b border-white" />
    </View>
  );
};

export default Subscribed;
