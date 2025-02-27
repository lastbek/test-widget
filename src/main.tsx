import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

import { Root } from './app/Root.tsx';
import { init } from '@/shared/helpers/init.ts';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';
import { EnvUnsupported } from '@/shared/ui/EnvUnsupported.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);

try {
  // console.log(retrieveLaunchParams());
  // Configure all application dependencies.
  init(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV);
  root.render(
    <StrictMode>
      <Root/>
    </StrictMode>,
  );
} catch (e) {
  console.log(e);
  
  root.render(<EnvUnsupported/>);
}