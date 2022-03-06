import pytest
import requests
import json
from backend.main.controllers import MenuController

class MockResponse:
    """ response object to mock http response for MenuController """
    def __init__(self, method, body=None):
        self.method = method
        self.body = body


@pytest.fixture(name="data")
def fixture_generate_formatted_data():
    data = {
        "menu-name": "Stephen's Barbecue",
        "menu-data": [
            {
                "category-title": "dinner",
                "items": [
                    {
                        "item-price": "19",
                        "item-name": "chicken",
                        "item-description": "oven roasted chicken"
                    },
                    {
                        "item-price": "79",
                        "item-name": "steak",
                        "item-description": "wagyu steak and fries"}
                ],

            },
            {
                "category-title": "dessert",
                "items": [
                    {
                        "item-price": "4",
                        "item-name": "cookies",
                        "item-description": "chocolate chip cookies"
                    },
                    {
                        "item-price": "8",
                        "item-name": "hot fudge brownie and vanilla icecream",
                        "item-description": "yummy ice cream with freshly baked brownie"}
                ],

            }
        ],
    }
    return json.dumps(data, indent=2).encode('utf-8')

def test_create_menu(data):
    # ARRANGE
    REQUEST_POST = MockResponse("POST", data)

    # ACT
    response = MenuController.create(REQUEST_POST)

    # ASSERT
    json_response_data = json.loads(response.content)
    json_data = json.loads(data)
    assert json_response_data == json_data
