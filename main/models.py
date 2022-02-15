# Create your models here

class Menu(dict):
    def __init__(self, name, categories):
        super().__init__(name=name, categories=categories)


class Category(dict):
    """
    a category consists of:
        - its title
        - the items within it
    """
    def __init__(self, title, items):
        super().__init__(title=title, items=items)

class Item(dict):
    """
    individualized menu items that are part of a category
    """
    def __init__(self, name, price, description):
        super().__init__(name=name, price=price, description=description)
