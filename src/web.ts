import { WebPlugin } from '@capacitor/core';

import type { CapacitorShellExecPlugin } from './definitions';

export class CapacitorShellExecWeb
  extends WebPlugin
  implements CapacitorShellExecPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
