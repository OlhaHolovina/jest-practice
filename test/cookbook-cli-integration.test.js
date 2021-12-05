const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli integration', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and add it to the CookBook', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);

      myCookBookCli.run('add', 'hotdog', ['bread', 'meat']);

      expect(myCookBookCli.cookbook.recipes).toEqual({hotdog: ['bread', 'meat']});
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {

    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and remove the specific recipe form the Cookbook', () => {

    });
  });

  describe('Incorrect command', () => {
    test('should return a warning message if there is no such command', () => {

    });
  });
});
