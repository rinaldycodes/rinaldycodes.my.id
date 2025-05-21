import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Column from '../../ui/boostrap/Column';
import Row from '../../ui/boostrap/Row';
import ArticleCard from './ArticleCard';

interface ArticleListProps {
    data: any;
}
export default function ArticleList({ data }: ArticleListProps) {
    return (
        <ScrollView style={{ padding: 17 }}>
            <Row>
                {
                    data.map((item: any, index: number) => {
                        return (
                            <Column key={index.toString()} md={4}>
                                <ArticleCard slug={item.slug} date={item.date} title={item.title} body={item.body} />
                            </Column>
                        )
                    })
                }
            </Row>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})