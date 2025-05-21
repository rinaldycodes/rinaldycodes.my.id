import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardBody from '../../ui/boostrap/CardBody'
import MyText from '../../ui/texts/MyText'
import ArticleDateBar from './ArticleDateBar'
import Card from '../../ui/boostrap/Card'
import ArticleModel from '@/src/_models/ArticleModel'
import { router } from 'expo-router'

interface ArticleCardProps {
    date: any;
    slug: string;
    title: string;
    body: string;
}

export default function ArticleCard({ date, slug, title, body }: ArticleCardProps) {
    const handleOnPressCard = () => {
        router.push(`/(app)/articles/${slug}`)
    }
    return (
        <Card onPress={handleOnPressCard} >
            <CardBody>
                <ArticleDateBar date={date} />
                <CardBody>
                    <MyText style={styles.title}>{title}</MyText>
                    <View style={{ height: 60, overflow: 'hidden' }}>
                        <MyText numberOfLines={3} style={styles.body}>{ArticleModel.stripHtmlTags(body)}</MyText>
                    </View>
                </CardBody>
            </CardBody>
        </Card>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 14,
        fontWeight: 300,
    }
})