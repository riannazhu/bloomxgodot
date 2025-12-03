# Pocket Godot - React Native + Godot Integration

This project demonstrates an integration between React Native (using Expo) and the Godot game engine, allowing you to embed Godot games within a React Native mobile application.

## 🎥 Demo Video

[![Pocket Godot Demo](https://img.youtube.com/vi/cZlw0LFRhlw/0.jpg)](https://www.youtube.com/watch?v=cZlw0LFRhlw)

Watch the demo video: https://www.youtube.com/watch?v=cZlw0LFRhlw
## 📱 Current Status

✅ **Working**: 
- The Godot game engine is successfully connected and displayed within the React Native app interface
- Basic rendering is functional
- React Native UI can overlay on top (like the "Bloom x Godot" badge at the bottom)

## ⚠️ Current Limitations / Known Bugs

**Scene transitions do not work yet.** Currently, Godot is displayed correctly, but input may not be fully detected (touch/mouse events may not change the scene).

This is a small fix planned for later; the priority was getting Godot connected and displayed in the app.

## 🚀 Quick Start

### Prerequisites

1. **Generate your `game.pck` file from Godot:**
   - Open your Godot project
   - Go to **Project → Project Settings → Export**
   - Set up an export preset (select a platform like Windows Desktop)
   - Click **Export Project → Export All**
   - Rename the exported `.pck` file to `game.pck`
   - Alternatively, you can export just the PCK file using: `Project → Export → Export PCK/ZIP...`

2. **Place the exported file:**
   - Copy `game.pck` to the `assets/` directory (create this folder if it doesn't exist)
   - The final path should be: `assets/game.pck`

### Installation

```bash
npm install
```

Start the app

```bash
npx expo start
```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.


## TL;DR

If never installed before:

```bash
npx expo run:ios
```

Re-activating:
```bash
npx expo start --dev-client
```
