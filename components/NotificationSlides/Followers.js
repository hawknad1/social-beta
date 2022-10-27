import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { EllipsisVerticalIcon } from "react-native-heroicons/outline";
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
} from "react-native-heroicons/solid";

const Followers = () => {
  const [removeColor, setRemoveColor] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setRemoveColor(!removeColor)}
        className={`flex-row p-2 ${
          !removeColor ? "bg-white" : "bg-blue-50"
        } justify-between items-center`}
      >
        <TouchableOpacity className="">
          <View className="flex-row space-x-2 items-center">
            <View>
              <Image
                source={require("../../images/2.jpg")}
                className="h-14 w-14 rounded-lg"
              />
            </View>
            <View className=" w-[280]">
              <Text className="font-bold text-base text-gray-800 items-center">
                Mike Williams{" "}
                <Text className="text-gray-500 font-normal space-x-2 text-base">
                  {" "}
                  started following you
                </Text>
                <View className="flex-row items-center space-x-2">
                  <Text className=" mt-3 text-blue-400 text-sm font-medium">
                    @mikey1
                  </Text>
                  <Text className="text-gray-400 mt-3 text-sm ">
                    · 2days ago
                  </Text>
                </View>
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <EllipsisVerticalIcon color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>
      <View className="border-b border-white" />
    </View>
  );
};

export default Followers;
