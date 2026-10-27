import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'src/scenarios',
  timeout: 60000,
  expect: {
    timeout: 60000
  },
  navigationTimeout: 60000,
  retries: 0,
  fullyParallel: false,
  workers: 1,
  outputDir: 'artifacts/test-results',
  use: {
    trace: 'off',
    locale: 'pt-BR',
    headless: false,
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'off',
    video: 'off'
  },
  reporter: [
    [
      'html',
      {
        outputFolder: 'artifacts/report',
        open: 'never'
      }
    ]
  ]
};

export default config;
