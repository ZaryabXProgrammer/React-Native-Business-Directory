import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import CategoryItem from './CategoryItem'

import {useRouter} from 'expo-router'

export default function Category() {


    const [categoryList, setcategoryList] = useState([])


    const router = useRouter();


    useEffect(() => {


        GetCategoryList();
    }, [])


    const GetCategoryList = async () => {
        setcategoryList([])
        const q = query(collection(db, 'Category'));

        const querySnapshot = await getDocs(q);

        const items = []
        querySnapshot.forEach((doc) => {
          
            items.push(doc.data())
        })

        setcategoryList(items)

    }


    return (

        <View>

            <View style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 1,
            }}>
                <Text style={{

                    fontSize: 17,
                    fontFamily: 'outfit-bold',


                }}>Category


                </Text>

                <Text style={{
                    color: Colors.PRIMARY,
                    fontFamily: 'outfit-medium'
                }}>View All</Text>



            </View>


            <FlatList
                style={{
                    marginLeft: 24
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categoryList}
                renderItem={({ item, index }) => (

                    <CategoryItem category={item} key={index}
                        onCategoryPress={(category) => router.push('/businessList/'+item.name)}
                    />
                )}
            />


        </View>
    )
}