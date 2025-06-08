// components
import { Button, Icon, IconButton } from "@/components/kit";
import Fontisto from "@expo/vector-icons/Fontisto";
// configs
import { Theme } from "@/constants/theme";
import { Text, View } from "react-native";
import { useRef, useState } from "react";
import Popover from "react-native-popover-view";
import { Link } from "expo-router";

export const MainHeaderNotifications = () => {
  const touchable = useRef<View>(null);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <View ref={touchable}>
        <IconButton onPress={() => setVisible(true)} variant="text" size="md">
          <Icon name="bell" size={24} color={Theme.palette.text.dark} />
          {/* <Fontisto name="bell" size={24} color={Theme.palette.text.dark} /> */}
        </IconButton>
      </View>
      {/* <Popover
        displayAreaInsets={{
          left: 48,
          top: 48,
        }}
        isVisible={visible}
        from={touchable}
        onRequestClose={() => setVisible(false)}
        popoverStyle={{
          width: 400,
          padding: 16,
          borderRadius: Theme.shape.radius.md,
          boxShadow: "3px 3px 10px 3px #dddddd",
          shadowColor: "#000000",
          shadowOffset: {
            width: 5,
            height: 3,
          },
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 14,
        }}
        backgroundStyle={{ backgroundColor: "transparent" }}
        popoverShift={{ x: 200, y: 0 }}
      >
        <View
          style={{
            width: "100%",
            maxWidth: 400,
          }}
        >
          <Text>
            This popover will be dismissed automatically after 2 seconds
          </Text>
          <Text>
            This popover will be dismissed automatically after 2 seconds
          </Text>
          <Text>
            This popover will be dismissed automatically after 2 seconds
          </Text>
          <Text>
            This popover will be dismissed automatically after 2 seconds
          </Text>
          <Button variant="light">See more</Button>
        </View>
      </Popover> */}
    </>
  );
};
