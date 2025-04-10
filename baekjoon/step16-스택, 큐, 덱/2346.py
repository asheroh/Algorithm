# 
import sys
from collections import deque

# 🎯 입력 처리
N = int(sys.stdin.readline().strip())
moves = list(map(int, sys.stdin.readline().strip().split()))

# 🔹 deque를 사용하여 풍선 번호와 이동 값을 저장
deque = deque((i + 1, moves[i]) for i in range(N))

# 🔹 결과를 저장할 리스트
result = []

while deque:
    index, move = deque.popleft()  # 🎈 풍선 터뜨림
    result.append(index)

    if not deque:  # 모든 풍선을 터뜨렸다면 종료
        break

    if move > 0:
        deque.rotate(-(move - 1))  # 🎈 오른쪽 이동
    else:
        deque.rotate(-move)  # 🎈 왼쪽 이동

print(*result)
