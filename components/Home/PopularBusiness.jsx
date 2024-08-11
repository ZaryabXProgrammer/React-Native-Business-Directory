import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import PopularBusinessCard from './PopularBusinessCard'

export default function PopularBusiness() {

  const [businessList, setbusinessList] = useState([])

  useEffect(() => {
    GetBusinessList();
  }, [])

  const GetBusinessList = async () => {

    setbusinessList([])

    const q = query(collection(db, 'BusinessList'), limit(10))

    const querySnapshot = await getDocs(q);

    const items = []
    querySnapshot.forEach((doc) => {
      console.log(doc.data());

      items.push(doc.data());

    })

    setbusinessList(items)



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


        }}>Popular Business


        </Text>

        <Text style={{
          color: Colors.PRIMARY,
          fontFamily: 'outfit-medium'
        }}>View All</Text>



      </View>


      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={businessList}
        renderItem={({ item, index }) => (
          <PopularBusinessCard business={item} key={index} />
        )}
      />

    </View>
  )
}