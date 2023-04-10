# Adapter design pattern

# The adapter pattern is a structural design pattern that allows objects
# with incompatible interfaces to collaborate.

'''
Problem example:
The company needs to use an external library to generate reports, but the
library has an incompatible interface, so the company needs to create an
adapter to make the library compatible with the application.
'''

# Solution:
# The solution is to create an adapter that will be responsible for
# adapting the interface of the external library to the interface of the
# application.

# -----------------------------------------------------------------------------

# The external services:


class ReportLoader:
    def __init__(self) -> None:
        self.headers = ['id', 'final_price', 'date']
        self.rows = [
            [1, 100, '2020-01-01'],
            [2, 200, '2020-01-02'],
            [3, 300, '2020-01-03'],
            [4, 400, '2020-01-04'],
            [5, 500, '2020-01-05'],
        ]

# -----------------------------------------------------------------------------

# The application and the adapter:


class ReportAnalyzer:
    def __init__(self, loader) -> None:
        self.loader = loader

    def average(self):
        # The average method receives a loader object as a parameter
        data = self.loader.load_data()
        # The load_data method returns a list of dictionaries with the
        # orders
        total = sum(order['final_price'] for order in data)
        # The average is calculated by summing the final_price of each order
        # and dividing by the number of orders
        return total / len(data)


class ReportLoaderAdapter:
    def __init__(self, loader) -> None:
        self.loader = loader

    def load_data(self):
        # The load_data method adapts the interface of the external library
        # to the interface of the application
        data = []

        for row in self.loader.rows:
            # The external library returns a list of lists
            # The application expects a list of dictionaries
            data.append(dict(zip(self.loader.headers, row)))
            '''
            dict - Creates a dictionary from a list of tuples
            zip - Creates a list of tuples from two lists

            Example:
            headers = ['id', 'final_price', 'date']
            rows = [
                [1, 100, '2020-01-01'],
            ]

            data = dict(zip(headers, rows[0]))
            # First we create a list of tuples from the headers and the
            # first row of the rows list
            # Then we create a dictionary from the list of tuples
            # The result is:
            data = {
                'id': 1,
                'final_price': 100,
                'date': '2020-01-01',
            }
            '''

        return data

# -----------------------------------------------------------------------------

# usage:


loader = ReportLoader()
adapter = ReportLoaderAdapter(loader)
analyzer = ReportAnalyzer(adapter)
average = analyzer.average()
print(average)

'''
Although increasing the complexity of the application, the adapter pattern
allows the application to use external libraries with incompatible
interfaces.

Some legacy code can be difficult to change, so the adapter pattern can be
used to adapt the interface of the legacy code to the interface of the
application.
'''

# -----------------------------------------------------------------------------
