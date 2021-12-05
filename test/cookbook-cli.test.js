const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);

      const message = myCookBookCli.add('hotdog', ['bread', 'meat']);

      expect(message).toEqual(`Successfully added the following recipe: hotdog`)
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {

    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {

    });
  });
});
