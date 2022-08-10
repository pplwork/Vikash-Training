import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FriendsProfileData } from "../screenComponents/Database";
import { useDispatch, useSelector } from "react-redux";
import { getUserSuggestion } from "../../redux/actions/userActions";
import image from "../../storage/images/profile5.jpg";
import SuggestedProfile from "./SuggestedProfile";

const Earlier = ({ currentUser, following }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserSuggestion(currentUser, following));
  }, []);
  const { users, loading, error } = useSelector((state) => state.suggest);
  console.log("users, loading, error", users, loading, error);

  return (
    <>
      {loading ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: 500 }}>Loading...</Text>
        </View>
      ) : (
        <View>
          {users.slice(0, 3).map((item, idx) => (
            <SuggestedProfile currentUser={currentUser} item={item} key={idx} />
          ))}
        </View>
      )}
    </>
  );
};

export default Earlier;
