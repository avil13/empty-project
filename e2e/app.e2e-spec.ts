import { BMOPage } from './app.po';

describe('bmo App', function() {
  let page: BMOPage;

  beforeEach(() => {
    page = new BMOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
