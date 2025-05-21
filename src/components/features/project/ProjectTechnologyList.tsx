import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProjectTechnologiesLabel from './ProjectTechnologiesLabel'

interface ProjectTechnologyListProps {
    data: any
}

export default function ProjectTechnologyList({ data }: ProjectTechnologyListProps) {
    return (
        <View style={styles.container}>
            {data.map((item: string, index: number) => {
                return (<ProjectTechnologiesLabel key={index.toString()}>{item}</ProjectTechnologiesLabel>)
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    }
})