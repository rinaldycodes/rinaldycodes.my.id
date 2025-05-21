import React from 'react';
import { View, Text, Modal, ActivityIndicator, StyleSheet } from 'react-native';

type LoadingDialogProps = {
    visible: boolean;
    message?: string;
};

const LoadingDialog: React.FC<LoadingDialogProps> = ({ visible, message = "Loading..." }) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={() => { }} // Prevent closing by back button
        >
            <View style={styles.container}>
                <View style={styles.dialog}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    {message && <Text style={styles.message}>{message}</Text>}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialog: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: 'center',
        width: 200,
    },
    message: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
});

export default LoadingDialog;
