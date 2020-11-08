import { SimpleCurrencyConversionsUiPage } from './app.po';

describe('simple-currency-conversions-ui App', function() {
  let page: SimpleCurrencyConversionsUiPage;

  beforeEach(() => {
    page = new SimpleCurrencyConversionsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
