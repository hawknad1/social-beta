import { View, Text, ScrollView } from "react-native";
import React from "react";
import Stories from "./Stories";

const StoryRows = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Stories image={require("../../images/2.jpg")} name="Dankwah" />
      <Stories image={require("../../images/5.jpg")} name="Joan" />
      <Stories image={require("../../images/4.jpg")} name="Kelly" />
      <Stories image={require("../../images/3.jpg")} name="Dankwah" />
      <Stories image={require("../../images/1.jpg")} name="Ivy" />
      <Stories image={require("../../images/2.jpg")} name="Fred" />
    </ScrollView>
  );
};

export default StoryRows;
