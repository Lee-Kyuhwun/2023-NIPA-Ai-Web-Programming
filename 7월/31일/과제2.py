
# 중복 요소를 포함한 파이썬 배열 생성
original_array = [1, 2, 3, 4, 5, 3, 7, 2, 9, 10]

# 중복 값 제거를 위한 빈 리스트 생성
unique_array = []

# for in 문을 사용하여 중복 값을 제거하는 코드
for element in original_array:
    if element not in unique_array:
        unique_array.append(element)

print("중복 제거 후 배열:", unique_array)
