import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardBody from '../../ui/boostrap/CardBody'
import ArticleCard from '../article/ArticleCard'
import Column from '../../ui/boostrap/Column';
import Row from '../../ui/boostrap/Row';
import useArticles from '@/src/hooks/useArticles';
import { ArticleInterface } from '@/src/_models/ArticleModel';

export default function WelcomeArticle() {
    const { data } = useArticles();

    return (
        <Row>
            {
                data.map((item: ArticleInterface, index) => {
                    return (
                        <Column key={index.toString()} md={4} style={{ paddingHorizontal: 15, }}>
                            <ArticleCard slug={item.slug} date={item.date} title={item.title} body={item.body} />
                        </Column>
                    )
                })
            }
        </Row>
    )
}

const styles = StyleSheet.create({})