import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import MyText from '../../ui/texts/MyText'
import AvatarMedium from '../../ui/avatars/AvatarMedium'
import CardBody from '../../ui/boostrap/CardBody'
import Row from '../../ui/boostrap/Row'
import Column from '../../ui/boostrap/Column'
import { DataUser } from '@/src/utils/dummies/DataUser'
import useDeviceScreen from '@/src/hooks/useDeviceScreen'
import WelcomeHeroDekstop from './WelcomeHeroDesktop'
import WelcomeHeroTablet from './WelcomeHeroTablet'
import WelcomeHeroMobile from './WelcomeHeroMobile'


export default function WelcomeHero() {
    const { device } = useDeviceScreen();

    if (device == 'desktop') {
        return (
            <WelcomeHeroDekstop />
        )
    }

    if (device == 'tablet') {
        return (
            <WelcomeHeroTablet />
        )
    }

    return (
        <WelcomeHeroMobile />
    )
}
