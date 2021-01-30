

yarn add @ionic/cli @capacitor/cli

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



