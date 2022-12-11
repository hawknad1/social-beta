// import {
//     View,
//     Text,
//     Image,
//     TouchableOpacity,
//     SafeAreaView,
//     ScrollView,
//     ImageBackground,
//   } from "react-native";
//   import React, { useState } from "react";
//   import {
//     ChevronLeftIcon,
//     FolderArrowDownIcon,
//     UserGroupIcon,
//     CurrencyDollarIcon,
//     EllipsisVerticalIcon,
//     ChatBubbleBottomCenterTextIcon,
//     SquaresPlusIcon,
//     PlusIcon,
//     ArrowLeftIcon,
//     CheckIcon,
//     UsersIcon,
//   } from "react-native-heroicons/outline";
//   import Post from "../components/Post";
//   import { CheckBadgeIcon, CheckCircleIcon } from "react-native-heroicons/solid";
//   import PostContent from "../components/PostContent";

//   const UserProfileScreen = ({ route, navigation }) => {
//     const [follow, setFollow] = useState(false);
//     const [subscribe, setSubscribe] = useState(false);

//     const following = () => {
//       setFollow(!follow);
//     };

//     const Subscribed = () => {
//       setSubscribe(!subscribe);
//     };

//     const {
//       name,
//       image,
//       description,
//       subscribers,
//       followers,
//       verified,
//       userName,
//     } = route.params;

//     return (
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         className="relative bg-white"
//       >
//         <ImageBackground
//           source={require("../images/b.jpg")}
//           className="h-[250] w-full"
//         >
//           <View className="flex-row items-center justify-between top-10">
//             <TouchableOpacity
//               onPress={navigation.goBack}
//               className="bg-gray-100 p-1 rounded-full left-4"
//             >
//               <ArrowLeftIcon color="black" size={25} />
//             </TouchableOpacity>

//             <View className="">
//               {verified ? (
//                 <View className="flex-row items-center ml-3 space-x-1">
//                   <Text className="font-bold text-base text-white">
//                     {name.toLowerCase()}
//                   </Text>
//                   <CheckCircleIcon size={18} />
//                 </View>
//               ) : (
//                 <View className="flex-row items-center space-x-1">
//                   <Text className="font-bold text-base text-white">
//                     {name.toLowerCase()}
//                   </Text>
//                 </View>
//               )}
//             </View>

//             <TouchableOpacity className="bg-gray-100 p-1 rounded-full right-4">
//               <EllipsisVerticalIcon color="black" size={25} />
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>

//         <View className="items-center bottom-14">
//           <View className="border-4 border-white rounded-full">
//             <Image source={{ uri: image }} className=" h-24 w-24 rounded-full" />
//           </View>

//           <View className="ml-3">
//             <Text className="text-blue-400">{`@${userName}`}</Text>
//           </View>

//           <Text className="text-base text-center mt-1 w-[360]">
//             {description}
//           </Text>

//           <View className="flex-row space-x-4 items-center mt-4 divide-x divide-neutral-200">
//             <View className="items-center p-4">
//               <Text className="font-bold text-lg">{followers}</Text>
//               <Text className="font-medium text-sm text-gray-500">Followers</Text>
//             </View>
//             <View className="items-center p-4">
//               <View className="border-r  border-gray-200" />
//               <Text className="font-bold text-lg">{subscribers}</Text>
//               <Text className="font-medium text-sm text-gray-500">
//                 Subscribers
//               </Text>
//             </View>
//             <View className="items-center p-4 ">
//               <Text className="font-bold text-lg">500</Text>
//               <Text className="font-medium text-sm text-gray-500">Following</Text>
//             </View>
//           </View>

<View className="flex-row space-x-12 border-b border-gray-200 shadow-sm mt-4">
  <TouchableOpacity className="p-4 items-center">
    <SquaresPlusIcon color="gray" />
    <Text className="font-medium text-sm">All Post</Text>
  </TouchableOpacity>
  <TouchableOpacity className="p-4 items-center">
    <UserGroupIcon color="gray" />
    <Text className="font-medium text-sm">Premium</Text>
  </TouchableOpacity>
  <TouchableOpacity className="p-4 items-center">
    <CurrencyDollarIcon color="gray" />
    <Text className="font-medium text-sm">Earnings</Text>
  </TouchableOpacity>
</View>;
//           <PostContent />
//           {/* <Post /> */}
//         </View>
//       </ScrollView>
//     );
//   };

//   export default UserProfileScreen;
