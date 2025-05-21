import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    useWindowDimensions,
    View,
    Platform,
} from 'react-native';

export default function ProjectImageList({ data }: { data: any }) {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();

    // Determine device type based on screen dimensions
    const isDesktop = screenWidth >= 1024;
    const isTablet = screenWidth >= 600 && screenWidth < 1024;
    const isMobile = screenWidth < 600;

    // Responsive calculations
    let imageWidth, imageHeight, maxHeight;

    if (isDesktop) {
        // Desktop: fixed max width with centered content
        imageWidth = Math.min(screenWidth - 80, 1200); // max width 1200 with 40 padding
        imageHeight = imageWidth * 9 / 16;
        maxHeight = 500;
    } else if (isTablet) {
        // Tablet: take more width but not full
        imageWidth = screenWidth - 60; // 30 padding each side
        imageHeight = imageWidth * 9 / 16;
        maxHeight = 400;
    } else {
        // Mobile: full width minus small padding
        imageWidth = screenWidth - 40; // 20 padding each side
        imageHeight = imageWidth * 9 / 16;
        maxHeight = 300;
    }

    // Adjust for landscape orientation
    const isLandscape = screenWidth > screenHeight;
    if (isLandscape && !isDesktop) {
        imageWidth = imageWidth * 0.8;
        imageHeight = imageHeight * 0.8;
    }

    return (
        <ScrollView
            contentContainerStyle={[
                styles.scrollContainer,
                isDesktop && styles.desktopScrollContainer,
                isTablet && styles.tabletScrollContainer,
            ]}
        >
            {data.map((imageUrl: string, index: number) => {
                const isUrl = typeof imageUrl === 'string' && imageUrl.startsWith('http');
                const source = isUrl ? { uri: imageUrl } : imageUrl;

                return (
                    <View
                        key={index.toString()}
                        style={[
                            styles.imageWrapper,
                            isDesktop && styles.desktopImageWrapper,
                            isTablet && styles.tabletImageWrapper,
                        ]}
                    >
                        <Image
                            source={source}
                            style={[
                                styles.projectImage,
                                {
                                    width: imageWidth,
                                    height: imageHeight,
                                    maxHeight,
                                },
                                isDesktop && styles.desktopProjectImage,
                                isTablet && styles.tabletProjectImage,
                            ]}
                            resizeMode="cover"
                        />
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    desktopScrollContainer: {
        paddingHorizontal: 40,
        alignItems: 'center', // Center content on desktop
    },
    tabletScrollContainer: {
        paddingHorizontal: 30,
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20,
    },
    desktopImageWrapper: {
        marginVertical: 25,
    },
    tabletImageWrapper: {
        marginVertical: 20,
    },
    projectImage: {
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    desktopProjectImage: {
        borderRadius: 12,
    },
    tabletProjectImage: {
        borderRadius: 11,
    },
});