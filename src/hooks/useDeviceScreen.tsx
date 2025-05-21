import { useWindowDimensions } from 'react-native'

export default function useDeviceScreen() {
  const { width: WINDOW_WIDTH } = useWindowDimensions();

  return {
    device: WINDOW_WIDTH > 768 ? "desktop" : WINDOW_WIDTH > 425 ? "tablet" : "phone"
  }
}
