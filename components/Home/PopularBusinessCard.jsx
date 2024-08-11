import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function PopularBusinessCard({ business }) {
    return (
        <View style={{
            marginLeft: 20,
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 15,
            display: 'flex',
            flexDirection: 'row',
           
            
            
        }}>
            <Image source={{ uri: business.imageUrl }} style={{
                width: 200,
                height: 130,
                borderRadius: 15,
                alignSelf: 'center'
            }} />

            <View style={{ marginLeft: 10, gap: 5 }}>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 16,
                    textAlign: 'center'
                }}>{business.name}</Text>

                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 15,
                    color: Colors.GRAY
                }}>{business.address}</Text>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 8
                }}>
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

                    <Text style={{
                        fontFamily: 'outfit',
                        backgroundColor: Colors.PRIMARY,
                        borderRadius: 8,
                        padding: 4,
                        fontSize: 12,
                        color: '#fff'
                    }}>{business.category}</Text>
                </View>
            </View>
        </View>
    )
}
