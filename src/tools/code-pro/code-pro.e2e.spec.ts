import { test, expect } from '@playwright/test';

test.describe('Tool - Code pro', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/code-pro');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Code pro - IT Tools');
  });

  test('', async ({ page }) => {

  });
});