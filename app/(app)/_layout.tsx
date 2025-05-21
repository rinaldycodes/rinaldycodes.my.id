import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Text, View } from 'react-native';
import HeaderRight from '@/src/components/ui/headers/HeaderRight';
import AvatarSmall from '@/src/components/ui/avatars/AvatarSmall';
import ButtonTheme from '@/src/components/ui/buttons/ButtonTheme';
import { useTheme } from '@/src/providers/ThemeProvider';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { MyEnv } from '@/src/utils/MyEnv';
import MyDrawerItem from '@/src/components/ui/drawer/MyDrawerItem';
import MyDrawerLogo from '@/src/components/ui/drawer/MyDrawerLogo';

export default function _layout() {
  const { theme } = useTheme();

  function CustomDrawerContent(props: any) {
    return (
      <DrawerContentScrollView {...props} style={{ backgroundColor: theme.surfaceVariant }}>
        <MyDrawerLogo />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.primary, // Use a contrasting color here, such as theme.primary
          },
          headerTintColor: theme.onPrimary, // Ensure the header text is visible against the background
          drawerActiveTintColor: theme.onBackground, // Active item text color (light text on dark background)
          drawerInactiveTintColor: theme.onSurface, // Inactive item text color (lighter text for inactive items)
          drawerContentStyle: {
            backgroundColor: theme.surfaceVariant, // Use a contrasting background for the drawer itself
          },
          drawerContentContainerStyle: {
            // backgroundColor: theme.surfaceVariant, // Background of the content area in the drawer
          },
          drawerActiveBackgroundColor: theme.primaryContainer
        }}>

        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: '',
            headerRight: () => (
              <HeaderRight>
                <ButtonTheme />
                {/* <AvatarSmall uri='https://avatar.iran.liara.run/public/boy' /> */}
              </HeaderRight>
            )
          }}
        />
        <Drawer.Screen
          name="articles/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Articles',
            title: 'Articles',
            headerRight: () => (
              <HeaderRight>
                <ButtonTheme />
                {/* <AvatarSmall uri='https://avatar.iran.liara.run/public/boy' /> */}
              </HeaderRight>
            )
          }}
        />
        <Drawer.Screen
          name="articles/[slug]" // This is the name of the page and must match the url from root
          options={{
            title: 'Article',
            drawerItemStyle: {
              display: 'none'
            },
          }}
        />
        <Drawer.Screen
          name="projects/index" // This is the name of the page and must match the url from root
          options={{
            title: 'Projects',
          }}
        />
        <Drawer.Screen
          name="projects/[projectId]" // This is the name of the page and must match the url from root
          options={{
            title: 'Project',
            drawerItemStyle: {
              display: 'none'
            }
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}
