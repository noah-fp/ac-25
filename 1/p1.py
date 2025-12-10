data = open('1/in.txt', 'r')
lines = data.read().split()

dn = 50
count = 0

for line in lines:
    dir = -1 if line[0] == "L" else 1
    move = int(line[1:]) * dir

    while move < 0:
        move += 100

    dn += move

    if dn >= 100:
        dn = int(str(dn)[1:])

    count += dn == 0

print(count)
