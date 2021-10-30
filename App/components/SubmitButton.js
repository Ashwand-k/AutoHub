import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import { useFormikContext } from "formik";
import AppButton from "./AppButton";
import colors from "../config/colors";
const SubmitButton = ({title,color}) => {
const {handleSubmit}= useFormikContext();
  return (
    <AppButton title={title}  color={color}   mypress={handleSubmit}
    ></AppButton>
  );
};

export default SubmitButton;
const styles = StyleSheet.create({
 
});
