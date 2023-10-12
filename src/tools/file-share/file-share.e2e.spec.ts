import { test, expect } from '@playwright/test';

test.describe('Tool - File share', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/file-share');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('File share - IT Tools');
  });

  test('', async ({ page }) => {

  });
});