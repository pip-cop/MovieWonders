.PHONY:
install:
	npx yarn install
	npx ionic capacitor add android
	npx ionic capacitor add ios
	npx cordova-res --skip-config --copy
	npx cap add ios
	npx cap add android


.PHONY:
serve:
	npx ionic serve



.PHONY:
build-android:
	npx ionic cap sync
	npx ionic capacitor copy android && cd android && ./gradlew assembleDebug && cd ..
	npx ionic cap sync

.PHONY:
build-ios:
	npx ionic cap sync
	npx ionic build ios

