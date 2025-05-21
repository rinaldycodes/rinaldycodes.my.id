export const MyEnv = {
    APP_NAME: process.env.EXPO_PUBLIC_APP_NAME || process.env.APP_NAME,
    APP_DESCRIPTION: process.env.EXPO_PUBLIC_APP_DESCRIPTION || process.env.APP_DESCRIPTION,
    APP_URL: process.env.EXPO_PUBLIC_APP_URL || process.env.APP_URL,
    USER_NAME: process.env.EXPO_PUBLIC_USER_NAME || process.env.USER_NAME,
}