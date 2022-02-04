from flask import render_template, request
from website.models import Category, Item

class MenuController:
    """ handle get and post requests concerning food recipes on homepage """

    @staticmethod
    def create():
        if request.method == "POST":
            # get data from the user
            data = request.form.lists()

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

            items = [Item(n, p, d) for n, p, d in zip(*item_props.values())]
            categories.append(Category(curr_title, items))

            return render_template("view.html", categories=categories)
        return render_template("create.html")
