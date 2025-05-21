import { StyleSheet, Text } from 'react-native';
import React from 'react';
import MyText from '../../ui/texts/MyText';
import CardBody from '../../ui/boostrap/CardBody';
import { DataUser } from '@/src/utils/dummies/DataUser';

export default function WelcomeAboutTablet() {
    return (
        <CardBody>
            <MyText style={styles.aboutText}>
               {DataUser.bio}
            </MyText>
        </CardBody>
    );
}

const styles = StyleSheet.create({
    aboutText: {
        fontSize: 20,
        lineHeight: 24,  // Added for readability
    }
});
