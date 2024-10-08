import { View, Text, FlatList, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ActionButton({ business }) {


    const actionButtonMenu =
        [
            {
                id: 1,
                name: "Call",
                icon: require('../../assets/Images/call.png'),
                url: 'tel:' + business?.contact
            },
            {
                id: 2,
                name: "Location",
                icon: require('../../assets/Images/pin.png'),
                url: 'https://www.google.com/maps/search/?api=1&query=' + business.address
            },
            {
                id: 3,
                name: "Web",
                icon: require('../../assets/Images/web.png'),
                url: business?.website
            },
            {
                id: 4,
                name: "Share",
                icon: require('../../assets/Images/share.png'),
                url: business?.website
            },
        ]

    const onPressHandle = (item) => {

        if (item.name == 'Share') {
            return;
        }

        Linking.openURL(item.url)



    }


    return (
        <View style={{
            backgroundColor: '#fff',
            padding: 20
        }}>


            <FlatList
                data={actionButtonMenu}
                numColumns={4}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({ item, index }) => (

                    <TouchableOpacity
                        onPress={() => onPressHandle(item)}
                    >
                        <Image style={{
                            width: 50,
                            height: 50
                        }} source={item?.icon} />

                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'outfit-medium',
                            marginTop: 3
                        }}>{item.name}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    )
}