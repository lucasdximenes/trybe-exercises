# Python - tests

---

## `pytest`

- install:

```bash
pip install pytest
# To verify if it was installed correctly:
pytest --version
```

> ### `Example`:

> some_file.py

```python
def sum(a, b):
    return a + b
```

> test_some_file.py

```python
from some_file import sum

def test_sum():
    assert sum(1, 2) == 3
```

- run:

```bash
pytest
```
