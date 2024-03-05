import { registerPlugin } from '@capacitor/core';

import type { CapacitorShellExecPlugin } from './definitions';

const CapacitorShellExec = registerPlugin<CapacitorShellExecPlugin>(
  'CapacitorShellExec',
  {
    web: () => import('./web').then(m => new m.CapacitorShellExecWeb()),
  },
);

export * from './definitions';
export { CapacitorShellExec };
