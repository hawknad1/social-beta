import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const PopUp = () => {
  const bottomSheetRef = useRef < BottomSheet > null;
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // const [isOpen, setIsOpen] = useState(true);
  // const snapPoints = ["40%"];

  return (
    <View style={styles.container}>
      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

{
  /* <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <BottomSheetView>
          <Text>Hello</Text>
        </BottomSheetView>
      </BottomSheet> */
}

export default PopUp;
