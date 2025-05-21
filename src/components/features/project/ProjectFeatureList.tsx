import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProjectFeatureItem from './ProjectFeatureItem'

export default function ProjectFeatureList({ data }: { data: any }) {
    return (
        <View>
            {
                data.map((item: string, index: number) => (
                    <ProjectFeatureItem key={index.toString()} feature={item} />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({})