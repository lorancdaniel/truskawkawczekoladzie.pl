import { expect, test } from '@playwright/test';

async function fillLeadForm(page: import('@playwright/test').Page) {
  await page.getByLabel(/imię i nazwisko/i).fill('Anna Kowalska');
  await page.getByLabel(/^email/i).fill('anna@example.com');
  await page.getByLabel(/^telefon$/i).fill('+48 600 700 800');
  await page.getByLabel(/data wydarzenia/i).fill('2026-08-22');
  await page.getByLabel(/typ wydarzenia/i).selectOption({ label: 'Event firmowy' });
  await page.getByLabel(/miasto/i).fill('Warszawa');
  await page.getByLabel(/liczba gości/i).fill('450');
  await page.getByLabel(/preferowany pakiet/i).selectOption({ label: 'Gold' });
  await page.getByLabel(/informacje dodatkowe/i).fill('Event plenerowy, proszę o wycenę.');
  await page.getByLabel(/zgadzam się/i).check();
}

async function expectContactEyebrowBelowHeader(page: import('@playwright/test').Page) {
  const header = page.locator('.site-header');
  const eyebrow = page.locator('#kontakt .eyebrow');
  await expect(eyebrow).toBeVisible();

  await expect
    .poll(async () => {
      const headerBox = await header.boundingBox();
      const eyebrowBox = await eyebrow.boundingBox();
      if (!headerBox || !eyebrowBox) return Number.NEGATIVE_INFINITY;
      return eyebrowBox.y - (headerBox.y + headerBox.height);
    })
    .toBeGreaterThan(10);
}

test('landing page loads and primary CTA reaches the lead form', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /truskawki w czekoladzie/i })).toBeVisible();
  await page.getByRole('button', { name: /sprawdź dostępność terminu/i }).first().click();
  await expect(page.getByRole('heading', { name: /sprawdź dostępność terminu/i })).toBeVisible();
});

test('tablet header switches to menu before nav wraps', async ({ page }) => {
  await page.setViewportSize({ width: 834, height: 1194 });
  await page.goto('/');
  await expect(page.getByRole('button', { name: /menu/i })).toBeVisible();
  await expect(page.getByRole('navigation', { name: /główna nawigacja/i })).toBeHidden();
});

test('mobile menu opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: /menu/i }).click();
  const navigation = page.getByRole('navigation', { name: /główna nawigacja/i });
  await expect(navigation).toBeVisible();
  const navBox = await navigation.boundingBox();
  expect(navBox?.height).toBeGreaterThan(300);
  await expect(navigation).toHaveCSS('background-color', 'rgb(33, 23, 22)');
  await navigation.getByRole('link', { name: 'Pakiety' }).click();
  await expect(page.getByRole('heading', { name: /trzy poziomy obsługi/i })).toBeVisible();
});

test('empty lead submit shows focused error summary', async ({ page }) => {
  await page.goto('/#kontakt');
  await page.getByRole('button', { name: /wyślij zapytanie/i }).click();
  const summary = page.getByRole('alert');
  await expect(summary).toBeVisible();
  await expect(summary).toContainText('Popraw pola formularza');
  await expect(summary).toBeFocused();
  await expectContactEyebrowBelowHeader(page);
});

test('desktop valid lead submit keeps contact heading clear of sticky header', async ({ page }) => {
  await page.goto('/#kontakt');
  await fillLeadForm(page);
  await page.getByRole('button', { name: /wyślij zapytanie/i }).click();

  const success = page.getByRole('status');
  await expect(success).toBeVisible();
  await expect(success).toContainText('Zapytanie wysłane');
  await expect(success).toBeFocused();
  await expectContactEyebrowBelowHeader(page);
});

test('mobile valid lead submit scrolls to visible success state', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/#kontakt');
  await fillLeadForm(page);
  await page.getByRole('button', { name: /wyślij zapytanie/i }).click();

  const success = page.getByRole('status');
  await expect(success).toBeVisible();
  await expect(success).toContainText('Zapytanie wysłane');
  await expect(success).toBeFocused();
  await expect
    .poll(async () => {
      const box = await success.boundingBox();
      return box?.y ?? -1;
    })
    .toBeGreaterThan(72);
  await expect
    .poll(async () => {
      const box = await success.boundingBox();
      return box?.y ?? 999;
    })
    .toBeLessThan(520);
});
