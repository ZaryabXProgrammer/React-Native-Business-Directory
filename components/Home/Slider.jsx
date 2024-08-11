import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';

export default function Slider() {
    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        getSliderList();
    }, []);

    const getSliderList = async () => {
        setSliderList([]);

        const q = query(collection(db, 'Slider'));
        const querySnapshot = await getDocs(q);

        const items = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            items.push(doc.data());
        });
        setSliderList(items);
    };

    return (
        <View>
            <Text
                style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 17,
                    padding: 10,
                    paddingLeft: 20,
                    paddingTop: 10,
                    marginBottom: 1
                }}
            >
                #Special For you
            </Text>
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
style={{paddingLeft: 20}}
              
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.imageUrl }}
                        style={{
                            width: 230,
                            height: 130,
                            padding: 20,
                            borderRadius: 15,
                            marginRight: 15,
                        }}
                    />
                )}

            />
        </View>
    );
}
