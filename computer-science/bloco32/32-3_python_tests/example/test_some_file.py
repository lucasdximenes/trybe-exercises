from io import StringIO
import json
import pytest
import some_file


# ==========================================
# ================= assert =================
def test_sum():
    assert some_file.sum(1, 2) == 3
    # assert is a keyword that allows you to test if a condition is True or False
# ==========================================

# ==========================================
# =============== pytest.raises ============


def test_division():
    with pytest.raises(ZeroDivisionError):
        # pytest.raises is a context manager that allows you to test if a
        # function raises an exception
        some_file.division(1, 0)
# ==========================================

# ==========================================
# ============== @pytest.fixture ===========


@pytest.fixture
# @pytest.fixture is a decorator that allows you to create a fixture
# Fixtures are functions or methods that are used to prepare the test environment
# before the test is executed
def orders():
    '''This fixture returns a list of orders'''
    return [
        {"customer": "A", "order": "pizza", "day": "monday"},
        {"customer": "A", "order": "pizza", "day": "tuesday"},
        {"customer": "B", "order": "pizza", "day": "monday"},
        {"customer": "B", "order": "burger", "day": "tuesday"},
        {"customer": "B", "order": "burger", "day": "wednesday"},
    ]


def test_get_most_ordered_dish_per_costumer(orders):
    assert (
        some_file.get_most_ordered_dish_per_costumer(orders, "A") == "pizza"
    )
    assert (
        some_file.get_most_ordered_dish_per_costumer(orders, "B") == "burger"
    )


def test_get_order_frequency_per_costumer(orders):
    assert (
        some_file.get_order_frequency_per_costumer(orders, "A", "pizza") == 2
    )
    assert (
        some_file.get_order_frequency_per_costumer(orders, "B", "burger") == 2
    )

# ==========================================

# ==========================================
# =============== mocking ==================


@pytest.fixture
def grass_type_pokemon():
    return {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }


@pytest.fixture
def water_type_pokemon():
    return {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }


def test_retrieve_pokemons_by_type(grass_type_pokemon, water_type_pokemon):
    # We create a StringIO object to simulate a file object
    fake_file = StringIO(
        json.dumps({
            "results": [grass_type_pokemon, water_type_pokemon]
            # grass_type_pokemon and water_type_pokemon are fixtures
            # pytest will pass them as arguments to the test function
        })
    )

    # We call the function with the fake file object
    assert grass_type_pokemon in some_file.retrieve_pokemons_by_type(
        "Grass", fake_file)
