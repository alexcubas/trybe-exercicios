# def maior(a, b):
#     result = a
#     if b > a:
#         result = b
#     return result

# print(maior(11, 5))

# def media_arit(array):
#     length = len(array)
#     contagem = 0
#     for res in array:
#         contagem += res

#     return contagem / length


# print(media_arit([11, 5, 2, 4]))

# def asterisco(n):
#     for row in range(n):
#         print(n * '*')


# asterisco(8)


# def maior_nome(array):
#     mn = ''
#     for name in array:
#         if len(name) > len(mn):
#             mn = name
#     return mn


# print(maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


# from math import ceil


# def calculo_metragem(n):
#     litros = n / 3
#     latas = ceil(litros / 18)
#     valor = latas * 80
#     tuplita = (latas, valor)
#     return tuplita


# print(calculo_metragem(100))


# nome = input("Digite seu nome:")

# for letter in nome:
#     print(letter)

# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         break
#     except ValueError:
#         print("Oops!  That was no valid number.  Try again...")


arr_objt = [
    {'Marcos', 10},
    {'Felipe', 4},
    {'José', 6},
    {'Ana', 10},
    {'Maria', 9},
    {'Miguel', 5}
    ]

other = []

for nota in arr_objt:
    arr = nota
    print(arr)
