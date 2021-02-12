import chai from 'chai';
import { goto, run, stop } from '../../lib/browser/browser';

const { expect } = chai;

describe('Jira user profile', () => {
  let page;

  beforeEach(async () => {
    await run();
    page = await goto();
  });

  afterEach(async () => {
    await stop();
  });

  it('User can reset password', async () => {
    await page.click('.sc-cvbbAY');
    await page.click('.sc-brqgnP:nth-child(2)');
    await page.click('#resetPassword');
    await page.fill('#email', 'chonkainna@mail.ru');
    await page.click('#reset-password-email-submit');
    const email = ('.sc-kafWEX');
    const emailText = await page.textContent(email);
    expect(emailText)
      .to
      .have
      .string('chonkainna@mail.ru');
  });

  it('User can login to profile', async () => {
    await page.click('.sc-cvbbAY');
    await page.click('.sc-brqgnP:nth-child(2)');
    await page.fill('#username', 'chonkainna@mail.ru');
    await page.click('#login-submit');
    await page.fill('#password', 'inna1234');
    await page.click('#login-submit');
    await page.click('.css-9i4acy');
    const profileName = ('div.css-10qbuca');
    const profileNameText = await page.textContent(profileName);
    // const pageUrl = await page.url();

    expect(profileNameText)
      .to
      .have
      .string('Inna');
    // expect(pageUrl)
    //  .toBe('https://chonkainnatestproject.atlassian.net/secure/BrowseProjects.jspa');
  });
});
