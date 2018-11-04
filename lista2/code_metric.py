def calculate_distance(begin, end, base=10):
    distance = 0
    begin = [int(i) for i in begin]
    end = [int(i) for i in end]
    for begin_i, end_i in zip(begin, end):
        sub_1 = abs(begin_i - end_i)
        if sub_1 > 5:
            sub_2 = abs(base - sub_1)
            distance += sub_2
        else:
            distance += sub_1
    return distance


def calculate_distance_from_file(file_name):
    """
    Expect file with numbers writen like:
    code_1,code_2\n
    code_1,code_2\n
    """
    with open(file_name) as file:
        codes = [line.split(',') for line in file.read().splitlines()]
        return [calculate_distance(code_1, code_2) for code_1, code_2 in codes]

# print(calculate_distance_from_file('codes.txt'))