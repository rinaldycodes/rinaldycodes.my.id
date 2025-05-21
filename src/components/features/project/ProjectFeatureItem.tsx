import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MyText from '../../ui/texts/MyText'

interface ProjectFeatureItemProps {
    feature: string
}

export default function ProjectFeatureItem({ feature }: ProjectFeatureItemProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="check-circle" size={20} color="#4CAF50" />
            </View>
            <View style={styles.textContainer}>
                <MyText style={styles.title}>{feature}</MyText>
                {/* <Text style={styles.title}>{feature.title}</Text>
                <Text style={styles.description}>{feature.description}</Text> */}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    iconContainer: {
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
    },
})
