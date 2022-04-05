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
        "to_address": "9320 St Laurent Blvd 200-02, Montreal, Quebec H2N 1N3, Canada",
        "to_position": {"lat": "45.5444167", "lng": "-73.6518647"},
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
quote_data1 = {
    "date_to_move": "2022-04-06",
    "status": "pedding",
    "user": {
        "name": "Ken",
        "email": "ken@sf.com"
    },
    "location": {
        "from_address": "Island of Montreal, Quebec, Canada",
        "from_position": {
            "lat": "45.5126399",
            "lng": "-73.6802448"
        },
        "to_address": "Montreal, QC, Canada",
        "to_position": {
            "lat": "45.5016889",
            "lng": "-73.567256"
        }
    },
    "volumes": [
        {
            "description": "Bed Double 2",
            "weight": "10 kg",
            "length": "1.5m",
            "width": "1.5m"
        },
        {
            "description": "Bed Double 1",
            "weight": "10 kg",
            "length": "1.5m",
            "width": "1.5m"
        }
    ]
}

quote_list = [quote_data, quote_data1]

def get_quote():
    return quote_data
