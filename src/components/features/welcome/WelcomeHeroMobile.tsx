import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import MyText from '../../ui/texts/MyText'
import AvatarMedium from '../../ui/avatars/AvatarMedium'
import CardBody from '../../ui/boostrap/CardBody'
import Row from '../../ui/boostrap/Row'
import Column from '../../ui/boostrap/Column'
import { DataUser } from '@/src/utils/dummies/DataUser'

export default function WelcomeHeroMobile() {
    return (
        <CardBody>
            <Row>
                <Column style={{ alignItems: 'center' }} span={3}>
                    <AvatarMedium uri={DataUser.avatar} />
                </Column>
                <Column span={9} style={{ justifyContent: 'center' }}>
                    <MyText style={styles.heroName}>{DataUser.name}</MyText>
                </Column>
            </Row>
            <MyText style={styles.heroText}>{DataUser.hightlight}</MyText>
        </CardBody>
    )
}

const styles = StyleSheet.create({
    heroName: { fontSize: 28, textAlign: 'left' },
    heroText: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'left',
        width: "100%",
    },

})