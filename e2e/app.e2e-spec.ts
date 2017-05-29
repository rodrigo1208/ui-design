import { CriacaoUiPage } from './app.po';

describe('criacao-ui App', () => {
  let page: CriacaoUiPage;

  beforeEach(() => {
    page = new CriacaoUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
