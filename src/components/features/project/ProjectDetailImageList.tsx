import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    useWindowDimensions,
    View,
} from 'react-native';

export default function ProjectDetailImageList({ data }: { data: any }) {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();

    // Determine device type based on screen dimensions
    const isDesktop = screenWidth >= 1024;
    const isTablet = screenWidth >= 600 && screenWidth < 1024;

    // Responsive calculations
    let imageWidth, imageHeight, containerPadding, imageMargin;

    if (isDesktop) {
        // Desktop: fixed max width with centered content
        containerPadding = 40;
        imageWidth = Math.min(screenWidth - 80, 1200); // max width 1200 with 40 padding each side
        imageMargin = 25;
    } else if (isTablet) {
        // Tablet: take more width but not full
        containerPadding = 30;
        imageWidth = screenWidth - 60; // 30 padding each side
        imageMargin = 20;
    } else {
        // Mobile: full width minus small padding
        containerPadding = 20;
        imageWidth = screenWidth - 40; // 20 padding each side
        imageMargin = 15;
    }

    // Maintain 16:9 aspect ratio
    imageHeight = imageWidth * 9 / 16;

    // Adjust for landscape orientation
    const isLandscape = screenWidth > screenHeight;
    if (isLandscape && !isDesktop) {
        imageWidth = imageWidth * 0.9;
        imageHeight = imageHeight * 0.9;
    }

    return (
        <ScrollView
            contentContainerStyle={[
                styles.scrollContainer,
                { paddingHorizontal: containerPadding }
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
                            {
                                marginTop: imageMargin,
                                marginBottom: imageMargin
                            }
                        ]}
                    >
                        <Image
                            source={source}
                            style={[
                                styles.projectImage,
                                {
                                    width: imageWidth,
                                    height: imageHeight,
                                    borderRadius: isDesktop ? 12 : isTablet ? 11 : 10,
                                }
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
        paddingBottom: 20,
    },
    imageWrapper: {
        alignItems: 'center',
    },
    projectImage: {
        borderColor: '#ccc',
        borderWidth: 1,
    },
});