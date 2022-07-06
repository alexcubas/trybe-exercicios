# alturas = [1.78, 1.64, 1.89, 1.71]

# a, *b, c = alturas

# print(a, b, c)

cities = {"Caio": "Salvador", "Gabriel": "Aracaju"}

# cities["Matheus"] = "Salvador"

# if ('Matheus', 'Salvador') in cities.items():
#     print("Contém no dict")

# for name, city in cities.items():
#     print(f"{name} mora em {city}")

# print(cities.get("Matheus", "Usuario nao encontrado"))

city_list = [["Alex", "Curitiba"], ["Thiago", "São Paulo"]]

# a, b = city_list

# print(a, b)

# dikiti = {}

dikiti = {a: b for a, b in city_list}

print(dikiti)
