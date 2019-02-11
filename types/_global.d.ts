interface IdleDeadline {
  readonly didTimeout: boolean;
  timeRemaining(): number;
}

interface Window {
  cancelIdleCallback(handle: number): void;
  requestIdleCallback(
    callback: (deadline: IdleDeadline) => void,
    options?: { timeout: number }
  ): number;
}
