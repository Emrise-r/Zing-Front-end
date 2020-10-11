// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:8080',
  firebaseConfig: {
    apiKey: 'AIzaSyBj2WCY2XQf3aphcubA5nmh92JVokZj5oE',
    authDomain: 'audio-d115d.firebaseapp.com',
    databaseURL: 'https://audio-d115d.firebaseio.com',
    projectId: 'audio-d115d',
    storageBucket: 'audio-d115d.appspot.com',
    messagingSenderId: '141811106039',
    appId: '1:141811106039:web:d2a70f2fa2985049ffd3f2',
    measurementId: 'G-RW0TRTY7BZ'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
