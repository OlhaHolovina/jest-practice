const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe('cookie', ['eggs', 'water', 'flour', 'sugar']);

      expect(myCookbook.recipes).toEqual({cookie: ['eggs', 'water', 'flour', 'sugar']});
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe('hotdog', ['meat', 'bread']);
      const recipes = myCookbook.listRecipes();

      expect(recipes).toEqual(['hotdog']);
    })
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe('cookie', ['eggs', 'water', 'flour', 'sugar']);
      const recipe = myCookbook.getRecipe('cookie');

      expect(recipe).toEqual([ 'eggs', 'water', 'flour', 'sugar' ]);
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe('cookie', ['eggs', 'water', 'flour', 'sugar']);
      myCookbook.removeRecipe('cookie');

      expect(myCookbook.recipes).toEqual({});
    });
  });
});
