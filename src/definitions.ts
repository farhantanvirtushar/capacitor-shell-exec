export interface CapacitorShellExecPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
