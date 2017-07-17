import { Angular4Express4Typescritp2Page } from './app.po';

describe('angular4-express4-typescritp2 App', () => {
  let page: Angular4Express4Typescritp2Page;

  beforeEach(() => {
    page = new Angular4Express4Typescritp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
