export const GET_COLUMNS = [
  {
    id: 1,
    title: "할 일",
  },
  {
    id: 2,
    title: "하고 있는 일",
  },
  {
    id: 3,
    title: "완료한 일",
  },
];

export const GET_CARD = (id) => {
  if (id === 1) {
    return [
      {
        id: 1,
        userId: "damon",
        title: "github 공부하기",
        contents: "add, commit, push 공부",
        cardStatusName: "해야할 일",
      },
      {
        id: 2,
        userId: "ader",
        title: "공부하기",
        contents: "뭐든 좀 하기",
        cardStatusName: "해야할 일",
      },
      {
        id: 3,
        userId: "honux",
        title: "운동하기",
        contents: "주짓수 하러가기",
        cardStatusName: "해야할 일",
      },
    ];
  }
  if (id === 2) {
    return [
      {
        id: 4,
        userId: "rumka",
        title: "카드 생성",
        contents: "하기",
        cardStatusName: "해야할 일",
      },
      {
        id: 5,
        userId: "rumka",
        title: "카드 수정",
        contents: "좀 하기",
        cardStatusName: "해야할 일",
      },
      {
        id: 6,
        userId: "honux",
        title: "카드 삭제",
        contents: "도 하기",
        cardStatusName: "해야할 일",
      },
    ];
  }
  if (id === 3) {
    return [
      {
        id: 7,
        userId: "rumka",
        title: "OS 공부하기",
        contents: "강의 듣기",
        cardStatusName: "해야할 일",
      },
      {
        id: 8,
        userId: "rumka",
        title: "알고리즘 문제풀기",
        contents: "구현 문제",
        cardStatusName: "해야할 일",
      },
      {
        id: 9,
        userId: "rumka",
        title: "운동하기",
        contents: "점심에 산책 나가기",
        cardStatusName: "해야할 일",
      },
    ];
  }
};

export const GET_HISTORY = [
  {
    cardAction: "MOVE",
    userId: "test1",
    cardTitle: "카드 제목 1",
    cardTitleBefore: "카드 제목 1",
    cardStatus: "TODO",
    cardStatusBefore: "ONGOING",
    createdAt: "2022-04-11T10:52:29.248343",
  },
  {
    cardAction: "UPDATE",
    userId: "test2",
    cardTitle: "카드 제목 2",
    cardTitleBefore: "카드 제목 이전 2",
    cardStatus: "DONE",
    cardStatusBefore: "DONE",
    createdAt: "2022-04-11T10:52:29.24877",
  },
];
