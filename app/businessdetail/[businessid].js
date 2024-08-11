import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { collection, getDoc, query, doc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import Intro from "../../components/BusinessDetail/Intro";
import ActionButton from "../../components/BusinessDetail/ActionButton";
import About from "../../components/BusinessDetail/About";

export default function Businessdetail() {
  const { businessid } = useLocalSearchParams();

  const [business, setbusiness] = useState("");

  const [loading, setloading] = useState(false);

  useEffect(() => {
    GetBusinessById();
  }, [businessid]);

  //api call to get business detail by id
  const GetBusinessById = async () => {
    setloading(true);
    const q = query(collection(db, "BusinessList"));

    const docRef = doc(db, "BusinessList", businessid);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data: ", docSnap.data());
      setbusiness(docSnap.data());
      setloading(false);
    } else {
      console.log("No Doc Exist");
    }
  };

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.PRIMARY}
          style={{ marginTop: "70%" }}
        />
      ) : (
        <View>
          <Intro business={business} />

          <ActionButton business={business} />

          <About business={business} />
        </View>
      )}
    </ScrollView>
  );
}
