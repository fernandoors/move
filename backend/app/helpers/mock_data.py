quote_data = {
    "date_to_move": "2022-04-04",
    "status": "pedding",
    "user": {
        "name": "Ryu",
        "email": "ryu@sf.com",
    },
    "location": {
        "from_address": "1000 Rue De La Gauchetiere O, Montreal, QC H3B 4W5, Canada",
        "from_position": {"lat": "45.5579564", "lng": "-73.8703843"},
        "to_address": "1000 Rue De La Gauchetiere O, Montreal, QC H3B 4W5, Canada",
        "to_position": {"lat": "45.5579564", "lng": "-73.8703843"},
    },
    "volumes": [
        {
            "description": "Bed Double",
            "weight": "34.00kg",
            "length": "1.96m",
            "width": "1.39m",
        },
    ]
}
def get_quote():
    return quote_data
