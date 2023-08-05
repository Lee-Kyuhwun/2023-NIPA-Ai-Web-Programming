import pandas as pd

# csv 파일 불러오기
df = pd.read_csv('my_data.csv')

# 'Unnamed: 0' 컬럼 삭제하기
df = df.drop(columns=['Unnamed: 0'])  # 'Unnamed: 0' 대신 실제 컬럼 이름 입력

# index 재설정하기
df.reset_index(drop=True, inplace=True)

# name 컬럼의 값을 한글로 변경하기 (예시: 'John' -> '존', 'Alice' -> '앨리스')
name_mapping = {'John': '존', 'Alice': '앨리스'}  # 실제 영문 이름과 한글 이름 매핑 정보 입력
df['name'] = df['name'].map(name_mapping)

# salary 컬럼의 값을 세자리 단위로 콤마 찍기
df['salary'] = df['salary'].apply(lambda x: "{:,}".format(x))

# csv 파일로 저장하기
df.to_csv('my_data_modified.csv', index=False)
