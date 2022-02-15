from main.models import Category, Item

def get_categories(data):
    """ create a list of dictionaries containing category data """
    categories = []
    item_props = {}
    curr_title = ""

    for key, val in data:
        # if current category is different - create and add a new Category object
        category_id = int(key[8])
        if category_id != len(categories):
            # create a list of items using data from item_props
            items = [Item(n, p, d) for n, p, d in zip(*item_props.values())]
            categories.append(Category(curr_title, items))

        if "title" in key:
            curr_title = val[0]
        else:
            prop = key[19:-1]
            item_props[prop] = val

    # push leftover items to categories
    items = [Item(n, p, d) for n, p, d in zip(*item_props.values())]
    categories.append(Category(curr_title, items))

    return categories
