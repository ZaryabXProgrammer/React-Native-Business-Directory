import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { Colors } from "../../constants/Colors";

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [businessList, setbusinessList] = useState([]);

  const [loading, setloading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });

    GetBusinessList();
  }, [category]); // Include 'category' in the dependency array

  const GetBusinessList = async () => {
    setloading(true);
    setbusinessList([]);
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );

    const querySnapshot = await getDocs(q);

    const business = [];

    querySnapshot.forEach((doc) => {
      console.log({ ...doc.data(), id:  doc?.id });
      business.push({ ...doc.data(), id: doc?.id });
      ``;
    });
    setbusinessList(business);

    setloading(false);
  };

  return (
    <View>
      {businessList.length > 0 && loading == false ? (
        <FlatList
          data={businessList}
          onRefresh={GetBusinessList}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) : loading ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.PRIMARY}
          style={{ marginTop: "60 %" }}
        />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            color: Colors.GRAY,
            textAlign: "center",
            marginTop: "50%",
          }}
        >
          No Business Found!
        </Text>
      )}
    </View>
  );
}
