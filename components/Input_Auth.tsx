import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";

export type Props = {
  labelText: String;
  placeholder: Readonly<string>;
  keyboardType: any;
};

const InputAuthentication: React.FC<Props> = ({
  labelText,
  placeholder,
  keyboardType,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>{labelText}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputAuthentication;

const styles = StyleSheet.create({
  inputContainer: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 30,
},
labelText: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 5,
  },
  textInput: {
    height: 70,
    // borderColor: "#ccc",
    // borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginBottom: 20,
  },
});
