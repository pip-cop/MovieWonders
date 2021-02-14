
https://photos.google.com/share/AF1QipNlUBB6Mdf9mAlfpxCOxYw2cBm49NuHF187__gETVclQtDBGbr4oWrnkPd9Mtwuog?key=VEdGbW5qR0VjR0dkREFZUTRCcGUwQ1Fmb0NJNWJB
https://developers.google.com/youtube/v3/docs/playlistItems/list
https://developers.google.com/youtube/v3/docs/playlistItems/list?apix_params=%7B%22part%22%3A%5B%22contentDetails%22%5D%2C%22playlistId%22%3A%22PLc6UWFdYNlhOSPixucdCDcS73Ey7i5cA3%22%7D#usage


YOUTUBE_API_KEY="AIzaSyBogyy2xbK_VARlmcCiDrkYu5en6Iv97UI"; \
curl \
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLc6UWFdYNlhOSPixucdCDcS73Ey7i5cA3&key=$YOUTUBE_API_KEY" \
  --header 'Accept: application/json' \
  --compressed


YOUTUBE_API_KEY="AIzaSyBogyy2xbK_VARlmcCiDrkYu5en6Iv97UI"; \
curl \
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLc6UWFdYNlhOOTEBUDttyDgbi19cbp6Eh&key=$YOUTUBE_API_KEY" \
  --header 'Accept: application/json' \
  --compressed





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
