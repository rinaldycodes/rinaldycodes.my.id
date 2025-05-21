import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Row from '../../ui/boostrap/Row'
import useDeviceScreen from '@/src/hooks/useDeviceScreen'
import Column from '../../ui/boostrap/Column';
import WelcomeHero from './WelcomeHero';
import WelcomeAbout from './WelcomeAbout';
import WorkCard from '../work/WorkCard';
import CardBody from '../../ui/boostrap/CardBody';

export default function WelcomeMain() {
    const { device } = useDeviceScreen();

    return (
        <Row>
            {
                device == 'desktop' ? (
                    <>
                        <Column span={1} />
                        <Column span={6}>
                            <WelcomeHero />
                            <WelcomeAbout />
                        </Column>
                        <Column span={4} md={4} style={{ justifyContent: 'center' }}>
                            <WorkCard />
                        </Column>
                        <Column span={1} />
                    </>
                ) : (
                    <>
                        <Column span={12}>
                            <WelcomeHero />
                            <WelcomeAbout />
                        </Column>
                        <Column span={12} style={{ paddingHorizontal: 15, }}>
                            <WorkCard />
                        </Column>
                    </>
                )
            }
        </Row>
    )
}

const styles = StyleSheet.create({})