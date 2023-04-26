import { StyleSheet, Text, TextInput, View } from "react-native";

export const NumberInputRow = ({
  prefix,
  suffix,
  value,
  onValueChange,
  onSubmit,
  testID,
}: {
  prefix: string;
  suffix: string;
  value: number | undefined;
  onValueChange: (newValue: string) => void;
  onSubmit: () => void;
  testID?: string;
}) => (
  <View  style={styles.container}>
    <Text style={styles.text}>{prefix}</Text>
    <TextInput
     testID={testID}
      value={`${value}`}
      keyboardType="numeric"
      onChangeText={onValueChange}
      onEndEditing={onSubmit}
      onSubmitEditing={onSubmit}
      style={styles.textInput}
    />
    <Text style={styles.text}>{suffix}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 16,
    marginHorizontal: 8
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "pink",
    width: "15%",
    borderRadius: 4,
    marginHorizontal: 8,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
});
