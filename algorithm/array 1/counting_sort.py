a = [0, 4, 1, 3, 1, 2, 4, 1]    # 입력
b = [0] * len(a)                # 정렬
c = [0] * 5                     # count

for i in range(len(b)): # a의 각 원소 개수 세기
    c[a[i]] += 1 # [1 3 1 1 2]

for j in range(1, len(c)):  # b에 넣기 위한 인덱스 만들기
    c[j] += c[j-1] # [1 4 5 6 8]

for k in range(len(b)-1, -1, -1):
    b[c[a[k]]-1] = a[k]
    c[a[k]] -= 1

print(b)