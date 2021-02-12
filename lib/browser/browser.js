import playwright from 'playwright';

let browser;
let context;
let page;

async function goto() {
  await page.goto('https://www.atlassian.com/');
  return page;
}

async function run() {
  browser = await playwright.chromium.launch({
    // Оторбражаем браузер или нет
    headless: false,
    // Эмуляция действий пользователя. Задержка. Время в милисекундах
    // slowMo: 1000,
    // В опциях браузера также задается язык браузера, разрешение на геолокацию,
  });
  // в браузере создаем контекст
  context = await browser.newContext({
    locale: 'en-GB',
  });

  page = await context.newPage();

  // Задать разрешение
  // await page.setViewportSize({
  //   width: 1280,
  //   height: 720,ф
  // });
}

async function stop() {
  // Сделать скриншот страницы
  await page.screenshot({ path: 'endPoint.jpg' });
  await page.close();
  await browser.close();
}

export
{
  goto, run, stop,
};
