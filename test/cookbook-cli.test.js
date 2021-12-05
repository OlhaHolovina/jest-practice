const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);

      const message = myCookBookCli.add('hotdog', ['bread', 'meat']);

      expect(message).toEqual(`Successfully added the following recipe: hotdog`);
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);

      myCookBookCli.add('hotdog', ['bread', 'meat']);
      myCookBookCli.add('pizza', ['bread', 'meat', 'tomatoes', 'mushrooms']);
      const message = myCookBookCli.list();

      expect(message).toEqual(`You have the following recipes: hotdog,pizza`);
    });

    test('should display the warning message if there is no any recipie', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);

      const message = myCookBookCli.list();

      expect(message).toEqual(`There is no any recipe`);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);

      myCookBookCli.add('hotdog', ['bread', 'meat']);
      const message = myCookBookCli.get('hotdog');

      expect(message).toEqual(`The ingredients for hotdog are: bread,meat`);
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);

      myCookBookCli.add('hotdog', ['bread', 'meat']);
      const message = myCookBookCli.remove('hotdog');

      expect(message).toEqual(`Successfully removed the following recipe: hotdog`);
    });
  });
});
