class CookbookCli {
  constructor(cookbook) {
    this.cookbook = cookbook;
  }

  run(command, ...args) {
    switch (command) {
      case 'list': return this.list();
      case 'add': return this.add(...args);
      case 'get': return this.get(...args);
      case 'remove': return this.remove(...args);
      default: return `Whoops, the following command is unsupported: ${command}.`;
    }
  }

  list() {
    const recipes = this.cookbook.listRecipes();
    if (recipes.length === 0){
      return 'There is no any recipe';
    } else {
      return `You have the following recipes: ${recipes.join(',')}`;
    }
  }

  add(name, ingredients) {
    const recipe =  this.cookbook.getRecipe(name);
    if (recipe === undefined){
      this.cookbook.addRecipe(name, ingredients);
      return `Successfully added the following recipe: ${name}`;
    } else {
      return `Recipe with name: '${name}' already exists, try another name`;
    }
  }

  get(name) {
    const recipe =  this.cookbook.getRecipe(name);
    if (recipe === undefined){
      return `Unfortunately you don't have a recipe with a name: ${name}`;
    } else {
      return `The ingredients for ${name} are: ${this.cookbook.getRecipe(name)}`;
    }

  }

  remove(name) {
    this.cookbook.removeRecipe(name);
    return `Successfully removed the following recipe: ${name}`;
  }
}

module.exports = { CookbookCli };
