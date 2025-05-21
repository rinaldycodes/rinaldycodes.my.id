import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyDrawerItem from './MyDrawerItem'
import MyText from '../texts/MyText'
import AvatarBig from '../avatars/AvatarBig'
import { DataUser } from '@/src/utils/dummies/DataUser'
import AvatarSmall from '../avatars/AvatarSmall'
import { MyEnv } from '@/src/utils/MyEnv'

export default function MyDrawerLogo() {
    return (
        <MyDrawerItem style={styles.container}>
            <AvatarSmall uri={DataUser.avatar} />
            <MyText style={styles.logo}>{MyEnv.USER_NAME}</MyText>
        </MyDrawerItem>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    logo: {
        fontFamily: 'SpaceMono'
    }
})