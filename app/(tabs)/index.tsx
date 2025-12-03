import { RTNGodot, RTNGodotView } from '@borndotcom/react-native-godot';
import { useAssets } from 'expo-asset';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [assets] = useAssets([require('../../assets/pocket_godot.pck')]);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (assets && assets[0] && !hasStarted.current) {
      const pckPath = assets[0].localUri?.replace('file://', '') || '';
      
      try {
        // Start the Engine with OpenGL (Safe for Phones & Simulators)
        RTNGodot.createInstance([
          "--main-pack", pckPath,
          "--rendering-driver", "opengl3"
        ]);
        hasStarted.current = true;
      } catch (e) {
        console.error("Bloom Engine Error:", e);
      }
    }
  }, [assets]);

  if (!assets) return <View style={styles.container} />;

  return (
    <View style={styles.container}>
      <RTNGodotView style={styles.godotView} />

      {/* The Vibe Coding Overlay */}
      <View style={styles.overlay}>
        <Text style={styles.text}>Bloom x Godot</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  godotView: { flex: 1 },
  overlay: {
    position: 'absolute', 
    bottom: 60, 
    alignSelf: 'center',
    backgroundColor: 'white', 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: { 
    fontWeight: '800', 
    fontSize: 16, 
    color: 'black',
    letterSpacing: 0.5
  }
});