
/**
 * Finds dish's index in newMenu context
 * @param {Array} menuData - Takes in the current menus array 
 * (newMenu ["menu-data"]
 * 
 * @param {String} category - category of you're trying to find
 * @returns {Number} - The index, if not found will return -1
 */
export function findCategoryIndex(menuData, category)
{
	return menuData.findIndex((menu) => menu["category-title"] === category)
}

/**
 * Finds dish's index in newMenu context
 * @param {Array} dishes - Array of dishes (must pass with index from
 * findCategoryIndex) e.g. newMenu["menu-data"][categoryIndex]
 * @param {String} itemName - name of the dish you want to find
 * @returns {Number} - The index, if not found will return -1
 */
export function findDishIndex(dishes, itemName)
{
	return dishes["items"].findIndex((dish) => dish["item-name"] === itemName)
}