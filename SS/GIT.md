# GIT

> Git은 분산버전관리 시스템
>
> 코드의 버전이랑 이력을 관리할 수 있음



## 기본 설정

- 윈도우에서 git을 활용하기 위해 git bash를 설치
- 처음 설치 후, 컴퓨터한테 계정 정보를 입력해야 함

```bash
$ git config --global user.email '메일주소'
$ git config --global user.name '유저명'
```



- 설정 확인

```bash
$ git config --global -l
```



# 로컬 저장소 지정

## 저장소 초기화

```bash
JWJ@DESKTOP-1AIVFG1 MINGW64 ~/Desktop/startcamp
$ git init

JWJ@DESKTOP-1AIVFG1 MINGW64 ~/Desktop/startcamp
(master)
```

- .git 이라는 숨김파일이 하나 생성됨 -> git과 관련된 모든 정보가 저장됨
- git bash에 (master) 라는 문구가 나타남 -> master 브랜치 라는 뜻

> 주의사항
>
> - git으로 관리하고 있는 폴더 내에 다시 git init 금지
> - git init 할 때 master 떠있으면 절대 git init 금지



## add

- 작업공간의 변경사항 및 수정사항을 git으로 관리하기 위해서 staging are로 옮기는 것이 필요

```bash
$ git add 파일명
$ git add . # 현재 폴더 (내 하위폴더 모두 포함)
$ git add day01/ # 특정 폴더
```



## commit

- commit은 내 수정사항, 변경사항들을 확정짓는 명령어
- create a snapShot
- commit을 작성할 때는 반드시 메시지를 작성해야 함
- 그 메시지는 어떤 수정사항이 있었는지 확실하게 작성

```bash
$ git commit -m "message"
```

- 커밋 후, status

```bash
$ git status
on branch master
nothing to commit, working tree clean
```

- 커밋 후, 커밋 목록들을 확인하기 위해서는

```bash
$ git log
$ git log --oneline
```



# 원격 저장소 (remote repository)

## 기본설정 (github)

1. 로컬 git 저장소 있어야 함
2. repository 생성 해야 함
3. Repository branch 변경 해줘야 함
   1. main -> master

## 원격 저장소 주소 추가

```bash
$ git remote add origin url
# git이 저장소 추가 origin 이라는 이름으로, 거기가 url
```

붙여넣기 (shift + insert)



## 원격 저장소 목록

```bash
$ git remote -v
# 잘못 추가했다
$ git remote rm origin
```



## push

- 원격 저장소에 업로드

```bash
$ git push -u origin master
```



## pull

- 원격 저장소의 변경사항만 받아옴 (업데이트)

```bash
$ git pull origin master
```



## clone

- 원격 저장소 전체를 복제

```bash
$ git clone 저장소URL
```

> 주의사항
>
> clone 받은 프로젝트는 이미 git init이 되어 있는 상태
>
> remote도 추가되어 있는 상태



