"# ReactLearning" 
"# ReactLearning" 


## Build apk from react
### 1) Cmd relative path of the project
react-native bundle --platform android --dev false --entry-file App.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

If it doesn't start run npm i -g react-native