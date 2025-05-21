import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyText from '../../ui/texts/MyText';
import CardBody from '../../ui/boostrap/CardBody';
import { DataUser } from '@/src/utils/dummies/DataUser';
import Row from '../../ui/boostrap/Row';
import Column from '../../ui/boostrap/Column';

export default function WelcomeAboutDekstop() {
    return (
        <CardBody style={{ alignSelf: 'center', width: '100%'}} >
            <MyText style={styles.aboutText}>
                {DataUser.bio}
            </MyText>
        </CardBody>
    );
}

const styles = StyleSheet.create({
    aboutText: {
        fontSize: 18,
    }
});
