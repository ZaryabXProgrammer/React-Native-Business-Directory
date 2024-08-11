import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '../../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';



export default function Header() {

    const { user } = useUser();

    return (

        // Header

        <View style={{
            padding: 15,
            paddingTop: 40,
            backgroundColor: Colors.PRIMARY,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20
        }}>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10
            }}>

                <Image
                    source={{ uri: user?.imageUrl }}
                    style={{

                        width: 45,
                        height: 45,
                        borderRadius: 99
                    }}
                />

                <View>
                    <Text style={{
                        color: 'white'
                    }}>Welcome</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 19,
                        fontFamily: 'outfit-medium'
                    }}>{user?.fullName}</Text>
                </View>

            </View>


            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                gap: 10,
                marginTop: 14,
                borderRadius: 10,
                marginVertical: 5,
                backgroundColor: '#fff'
            }}>
                {/* Search Bar */}
                <AntDesign name="search1" size={24} color={Colors.PRIMARY} />

                <TextInput placeholder='Search...'
                    style={{ fontFamily: 'outfit', fontSize: 16 }} />


            </View>


        </View>
    )
}