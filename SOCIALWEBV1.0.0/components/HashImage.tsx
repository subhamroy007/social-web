import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, Pressable } from 'react-native'

const name = "subrata";
const onpress = () => {
    return
}
const HashContainer = () => {
    return (
        <SafeAreaView style={{
            height: 30,
            marginTop: 30,
            marginLeft: 10,
            backgroundColor: 'red',
            borderRadius: 15,
            alignSelf: 'flex-start'

        }} >
            <TouchableOpacity onPress={onpress}>

                <Text
                    //onPress={() => hashPage()}
                    style={{
                        borderColor: 'black',
                        padding: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderWidth: 1,
                        borderRadius: 15,
                        backgroundColor: 'lightblue',
                        textAlign: 'center',
                        height: 30,
                        alignSelf: 'flex-start'

                    }}
                >
                    {name}
                </Text>
            </TouchableOpacity >


        </SafeAreaView >

    )
}
export default HashContainer
