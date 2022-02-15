from main.models import Category, Item

def get_categories(data):
    """
    create a list of dictionaries containing category data

    this function is based off data following this format:
    [
        ('category0[title]', 'dinner'),
        ('category0[items][][name]', 'chicken'),
        ('category0[items][][name]', 'steak'),
        ('category0[items][][price]', '19'),
        ('category0[items][][price]', '79'),
        ('category0[items][][description]', 'oven roasted chicken'),
        ('category0[items][][description]', 'wagyu steak and fries'),
        ('category1[title]', 'dessert'),
        ('category1[items][][name]', 'cookies'),
        ('category1[items][][price]', '3'),
        ('category1[items][][description]', 'chocolate chip')
    ]
    """

    categories = []
    item_props = {}
    curr_title = ""

    # key - type of category data (id, category title, item data)
    # val - data corresponding to the key
    for key, val in data:

        # if current category is different - create and add a new Category object
        category_id = int(key[8])
        if category_id != len(categories):
            # create a list of items using data from item_props
            items = [Item(n, p, d) for n, p, d in zip(*item_props.values())]
            categories.append(Category(curr_title, items))

        if "title" in key:
            # if we come across a "title" then save it as the new current category title
            curr_title = val[0]
        else:
            # all other keys are for item data (name, price, description)
            # these will accumulate until the category id changes
            prop = key[19:-1]
            item_props[prop] = val

    # push remaining items as an additional category
    items = [Item(n, p, d) for n, p, d in zip(*item_props.values())]
    categories.append(Category(curr_title, items))

    return categories
