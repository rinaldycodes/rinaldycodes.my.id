import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import MyText from '../../ui/texts/MyText'
import { useTheme } from '@/src/providers/ThemeProvider'
import { DataExperience } from '@/src/utils/dummies/DataExperience'
import Row from '../../ui/boostrap/Row'
import Column from '../../ui/boostrap/Column'
import { DataFile } from '@/src/utils/dummies/DataFile'

export default function WorkCard() {
    const { theme } = useTheme();

    const handleLink = () => {
        Linking.openURL(DataFile.cv)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="briefcase-outline" size={24} color={theme.onBackground} />
                <MyText style={styles.headerTitle}>Work</MyText>
            </View>
            <View style={styles.body}>
                {
                    DataExperience.map((item, index) => {
                        return (
                            <View>
                                <Row style={{ alignItems: 'center' }}>
                                    <Column span={2}>
                                        <View style={styles.companyImage}>
                                            <Image source={item.company_photo} style={styles.image} />
                                        </View>
                                    </Column>
                                    <Column span={7}>
                                        <MyText style={styles.companyName}>{item.company_name}</MyText>
                                        <MyText style={styles.position}>{item.position}</MyText>
                                    </Column>
                                    {
                                        item.is_show_year_work && (
                                            <Column span={3} style={{ alignItems: 'flex-end', }}>
                                                <MyText style={styles.companyName}>{item.start_year_work} -- {item.end_year_work}</MyText>
                                            </Column>
                                        )
                                    }
                                </Row>
                            </View>
                        )
                    })
                }

            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonCv} onPress={handleLink}>
                    <Text style={styles.buttonTextCv}>CV</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'gainsboro',
        borderRadius: 8,
    },
    header: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        padding: 15,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    body: {
        padding: 15,
    },
    footer: {
        padding: 15,
    },
    companyImage: {
        width: 50,
        height: 50,
        borderRadius: 999,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: 'gainsboro',
        shadowOpacity: 1,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowRadius: 7,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    companyName: {
        fontWeight: 'bold',
        fontSize: 11,
        marginBottom: 5,
    },
    position: {
        fontWeight: '500',
        fontSize: 11,
    },
    buttonCv: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonTextCv: {
        fontSize: 14,
        fontWeight: '500',
        color: 'blue',
    }
})