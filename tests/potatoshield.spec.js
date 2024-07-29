const { test, expect } = require('@playwright/test');

test.describe('PotatoShield AdBlock Detection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('should show banner when adblock is enabled', async ({ page }) => {
    // Intercetta e blocca la richiesta all'URL specificato
    await page.route('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', route => route.abort());

    // Ricarica la pagina per applicare il blocco
    await page.reload();

    // Intercetta i log della console
    const logs = [];
    page.on('console', msg => logs.push(msg.text()));

    // Attendi un po' per assicurarti che i log vengano generati
    await page.waitForTimeout(1000);

    // Verifica che il log contenga "AdBlock Enabled: true"
    const logFound = logs.some(log => log.includes('AdBlock Enabled: true'));
    expect(logFound).toBe(true);

    // Verifica che il banner venga mostrato
    const banner = await page.$('div[style*="background-color: rgba(0,0,0,0.68)"]');
    expect(banner).not.toBeNull();
  });

  test('should not show banner when adblock is disabled', async ({ page }) => {
    // Ricarica la pagina per rimuovere il blocco
    await page.reload();

    // Intercetta i log della console
    const logs = [];
    page.on('console', msg => logs.push(msg.text()));

    // Attendi un po' per assicurarti che i log vengano generati
    await page.waitForTimeout(1000);

    // Verifica che il log contenga "AdBlock Enabled: false"
    const logFound = logs.some(log => log.includes('AdBlock Enabled: false'));
    expect(logFound).toBe(true);
  });
});