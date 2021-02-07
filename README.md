

yarn add @ionic/cli @capacitor/cli
yarn add native-run cordova-res


ionic start -l
ionic start testTabs tabs --type vue --capacitor


cd testTabs
ionic serve

ionic build

ionic capacitor add android
ionic capacitor add ios
cordova-res --skip-config --copy
npx cap add ios
npx cap add android


/home/thet/Downloads/commandlinetools-linux-6858069_latest/cmdline-tools
sdkmanager --sdk_root=/home/thet/Android/Sdk --licenses




ionic start testTabs tabs --type vue --capacitor
npx cap init MovieWonders pro.programmatic.moviewonders
yarn add @ionic/pwa-elements
yarn add @capacitor/android

ionic cap add android

ionic build
ionic cap copy
ionic cap sync

ionic cap open android



CAPACITOR_ANDROID_STUDIO_PATH=/opt/android-studio/bin/studio.sh ionic cap open android
