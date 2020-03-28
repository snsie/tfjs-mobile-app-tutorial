import React, { Profiler } from 'react';
import 'mobx-react-lite/optimizeForReactDom';
import DataVisCanvas from './canvases/data-vis-canvas';
import { Global, Page } from './styles';
import ControlPanelUi from './ui/control-panel-ui';
import { StylesProvider } from '@material-ui/core/styles';

export default function App() {
  return (
    <React.StrictMode>
      <Profiler id='fullApp'>
        <StylesProvider injectFirst>
          <Global />
          <DataVisCanvas />
          <ControlPanelUi />
        </StylesProvider>
      </Profiler>
    </React.StrictMode>
  );
}
