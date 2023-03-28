import json


def sum(a, b):
    return a + b


def division(a, b):
    return a / b


def get_most_ordered_dish_per_costumer(orders, customer):
    max_amount = 0
    most_ordered = ""
    customer_dishes = {}

    for order in orders:
        if order["customer"] == customer:
            customer_dishes[order["order"]] = (
                customer_dishes.get(order["order"], 0) + 1
            )
            if customer_dishes[order["order"]] >= max_amount:
                max_amount = customer_dishes[order["order"]]
                most_ordered = order["order"]
    return most_ordered


def get_order_frequency_per_costumer(orders, customer, order):
    counter = 0
    for current_order in orders:
        if (
            current_order["customer"] == customer
            and current_order["order"] == order
        ):
            counter += 1
    return counter


def retrieve_pokemons_by_type(type, reader):
    # reader is a file object
    # json.load is a function that loads a json file
    pokemons = json.load(reader)["results"]
    pokemons_by_type = [
        pokemon for pokemon in pokemons if type in pokemon["type"]
    ]
    return pokemons_by_type
