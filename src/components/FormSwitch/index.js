import React, { Component } from "react";
import { Switch, View, StyleSheet } from "react-native";

const FormSwitch = (props) => {
  let { color, text, toggleValue } = props;
  return (
    <View style={styles.wrapper}>
      <Switch
        onValueChange={toggleValue.onChange}
        value={toggleValue.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FormSwitch;
