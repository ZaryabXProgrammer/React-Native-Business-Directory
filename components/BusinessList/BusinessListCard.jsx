import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

export default function BusinessListCard({ business }) {

    const router = useRouter()

    return (
        <TouchableOpacity style={{
            padding: 10,
            margin: 10,
            borderRadius: 15,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'row',
            gap: 10
        }}
            onPress={() => router.push('/businessdetail/' + business.id)}
        >

            <Image source={{ uri: business.imageUrl }}
                style={{
                    width: 110,
                    height: 100,
                    borderRadius: 15,

                }} />

            <View
                style={{
                    gap: 10,
                    flex: 1

                }}
            >
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 13,

                }}>{business.name}</Text>

                <Text style={{
                    fontFamily: 'outfit',
                    color: Colors.GRAY
                }}>{business.address}</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',

                    gap: 5,
                    alignItems: 'center'
                }}>
                    <Image source={require('../../assets/Images/star.png')} style={{
                        width: 15,
                        height: 15
                    }} />
                    <Text style={{
                        fontFamily: 'outfit'
                    }}>4.5</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}