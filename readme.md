# Mobile Automation QA Engineer Demo App

This app was 'ejected' from Expo, and has the following requirements. Other versions may be compatible, but for clarity we have built this successfully with:

- Xcode 14.2.x
- Android Studio (2021.3.1 Patch 1)
- nvm 0.39.1
- Node 16.16.0
- Cocoapods 1.11.3

If you have issues building this application, do ensure you're using the above versions. We cannot guarantee compatibility with other versions.

## OpenChargeMap API Key

This demo app uses OpenChargeMap's API. In order to get charger information from OpenChargeMap, you will need to generate an API key. Follow the instructions here to generate it: https://community.openchargemap.org/t/api-keys-are-now-required/161, and add it in to `src/screens/Dashboard/consts.ts`

## Quick Start

```sh
# use the specified node version
nvm use

# Install the dependencies
npm install
cd ios
pod install

# Spin up the dev server
npm start

# You can now build the app via Xcode or Android Studio
```

### Android notes:

In order for Metro (React Native's bundler) to connect to the emulator, you may need to run `adb reverse tcp:8081 tcp:8081`.

You will need to generate a Google Maps API key and insert it into the `com.google.android.geo.API_KEY` metadata value in `android/app/src/main/AndroidManifest.xml`. You can generate the key here: https://developers.google.com/maps/documentation/android-sdk/get-api-key