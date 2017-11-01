import { MineSweeperPage } from './app.po';

describe('mine-sweeper App', () => {
  let page: MineSweeperPage;

  beforeEach(() => {
    page = new MineSweeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
