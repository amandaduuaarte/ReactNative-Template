import {MMKV} from 'react-native-mmkv';
import type { ReactotronReactNative } from 'reactotron-react-native';
import Reactotron from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';


const middlewareStorage = () => mmkvPlugin<ReactotronReactNative>({
  storage:  new MMKV({
        id: 'global-storage',
        encryptionKey: 'hunter2',
      }),
});

Reactotron.configure({
  name: 'React Native Template',
})
.use(middlewareStorage())
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/, // -> You can change this
    },
    editor: false,
  })
  .connect();
