//Write a function cakes(), which takes the recipe (object) and the available
const cakes = (recipe, available) => {
    const rKeys = Object.keys(recipe)
    const aKeys = Object.keys(available)
    let answer = Infinity
    if (!rKeys.every(e => aKeys.includes(e))) return 0
    rKeys.forEach(key => {
      if (available[key] / recipe[key] <= answer) {
        answer = available[key] / recipe[key]
      }
    })
    return Math.floor(answer)
  }