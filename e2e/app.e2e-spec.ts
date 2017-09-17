import { CollegePickemPage } from './app.po';

describe('college-pickem App', () => {
  let page: CollegePickemPage;

  beforeEach(() => {
    page = new CollegePickemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
