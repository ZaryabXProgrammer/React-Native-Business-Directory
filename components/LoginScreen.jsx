import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const handleSignInWithDiscordPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();
            if (createdSessionId) {
                setActive?.({ session: createdSessionId });
            } else {
                // Modify this code to use signIn or signUp to set this missing requirements you set in your dashboard.
                throw new Error("There are unmet requirements, modify this else to handle them");
            }
        } catch (err) {
            console.log(JSON.stringify(err, null, 2));
            console.log("Error signing in:", err);
        }
    }, [startOAuthFlow]);

    return (
        <View>


            <View style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 50
            }}>


                <Image source={require('../assets/Images/login.png')}

                    style={{
                        width: 200,
                        height: 400,
                        borderRadius: 20,
                        borderWidth: 6,
                        borderColor: '#000'
                    }}
                />


            </View>

            <View style={styles.subContainer}>
                <Text style={{
                    fontSize: 30,
                    fontFamily: 'outfit-bold',
                    textAlign: 'center'
                }}>Your Ultimate

                    <Text style={{
                        color: Colors.PRIMARY
                    }}> Community Business Directory App </Text>
                </Text>


                <Text style={{
                    fontSize: 15,
                    textAlign: 'center',
                    marginVertical: 15,
                    fontFamily: 'outfit',
                    color: Colors.GRAY
                }}>Find your faviorite business near you and post your own business to the community</Text>


                <TouchableOpacity
                    onPress={handleSignInWithDiscordPress}
                    style={styles.btn}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontFamily: 'outfit '
                    }}>Let's Get Started</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}


const styles = StyleSheet.create({

    subContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: -1,
        elevation: 1,

    },

    btn: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        borderRadius: 99,

    }

})