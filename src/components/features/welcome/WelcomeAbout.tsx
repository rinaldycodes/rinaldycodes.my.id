import { StyleSheet, Text } from 'react-native';
import React from 'react';
import MyText from '../../ui/texts/MyText';
import CardBody from '../../ui/boostrap/CardBody';
import { DataUser } from '@/src/utils/dummies/DataUser';
import useDeviceScreen from '@/src/hooks/useDeviceScreen';
import WelcomeAboutDekstop from './WelcomeAboutDesktop';
import WelcomeAboutTablet from './WelcomeAboutTablet';

export default function WelcomeAbout() {
    const { device } = useDeviceScreen();

    if (device == 'desktop') {
        return (
            <WelcomeAboutDekstop />
        )
    }

    if (device == 'tablet') {
        return (
            <WelcomeAboutTablet />
        )
    }

    return (
        <CardBody>
            <MyText style={styles.aboutText}>{DataUser.bio}</MyText>
        </CardBody>
    );
}

const styles = StyleSheet.create({
    aboutText: {
        fontSize: 20,
    }
});
