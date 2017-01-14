import { CustomerManagementMeanPage } from './app.po';

describe('customer-management-mean App', function() {
  let page: CustomerManagementMeanPage;

  beforeEach(() => {
    page = new CustomerManagementMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
