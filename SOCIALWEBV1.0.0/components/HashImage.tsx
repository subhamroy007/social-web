import React, { useState } from 'react'
import { Text, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const keywords = [
    '#All',
    '#React js',
    '#Angular js',
    '#React Native',
    '#subrata',
    '#kolay'
]

const Hash = () => {
    // const [activeElement, setActiveElement] = useState('All');


    return (
        <SafeAreaView style={{
        }} >
            <ScrollView
                horizontal={true}
                style={{
                    paddingTop: 10,
                    marginTop: 20,
                    marginBottom: 40,
                    backgroundColor: 'red',
                    height: 60

                }}>

                {keywords.map((value, id) => (
                    <TouchableOpacity key={id}>

                        <Text key={id}

                            //  onPress={() => hashPage()}

                            style={{
                                borderColor: 'black',
                                padding: 5,
                                paddingLeft: 10,
                                borderWidth: 1,
                                borderRadius: 15,
                                backgroundColor: 'lightblue',
                                margin: 2,
                                textAlign: 'center',
                                height: 40

                            }}
                        >
                            {value}
                        </Text>
                    </TouchableOpacity>

                ))}
            </ScrollView>
        </SafeAreaView >

    )
}

export default Hash;

