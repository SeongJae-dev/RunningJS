/* eslint-disable no-empty */
let tree = [
  {
    say: "hello",
    gender: "man",
    innerArray: []
  }
];

console.log(tree);
console.log("hello");
let test = { no: 1 };
tree[0].innerArray.push(test);
console.log(tree[0].innerArray);
console.log(tree[0].innerArray[0].no);

for (let i = 0; i < 3; i++) {
  tree[i] = {
    lang: "java",
    innerArray: []
  };

  // eslint-disable-next-line no-empty
  for (let index = 0; index < tree.length; index++) {
    tree[index].innerArray.push({ test: "test" });
  }
}

console.log(tree[0].innerArray[0].test);
[
  {
    lang: "java",
    innerArray: [
      {
        test: "test"
      }
    ]
  }
];

// console.log(tree);

var obj = [
  {
    menuCl: "CA10",
    menuNm: "축산관계시설관리",
    menuSe: "01",
    menuDp: 2,
    menuSn: 1,
    upperMenuCl: "M321",
    linkUrlNm: "/sce/carenroll/1",
    ordNum: 1
  },
  {
    menuCl: "CA11",
    menuNm: "축산관계시설등록",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CA10",
    linkUrlNm: "/sce/carenroll/facMg/facReg.do",
    ordNum: 2
  },
  {
    menuCl: "CA12",
    menuNm: "축산시설좌표변경",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CA10",
    linkUrlNm: "/sce/carenroll/facMg/facLocationModi.do",
    ordNum: 3
  },
  {
    menuCl: "CA13",
    menuNm: "축산관계시설현황",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CA10",
    linkUrlNm: "/sce/carenroll/facMg/facStatus.do",
    ordNum: 4
  },
  {
    menuCl: "CA14",
    menuNm: "축산관계좌표확인",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CA10",
    linkUrlNm: "/sce/carenroll/facMg/facLocationConfirm.do",
    ordNum: 5
  },
  {
    menuCl: "CA15",
    menuNm: "축산관계시설",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CA10",
    linkUrlNm: "/sce/carenroll/facMg/facSearch.do",
    ordNum: 6
  },
  {
    menuCl: "CB10",
    menuNm: "(운영센터)축산시설관리",
    menuSe: "01",
    menuDp: 2,
    menuSn: 1,
    upperMenuCl: "M321",
    linkUrlNm: "/sce/carenroll/2",
    ordNum: 7
  },
  {
    menuCl: "CB11",
    menuNm: "(운영센터)축산시설등록",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CB10",
    linkUrlNm: "/sce/carenroll/smFacMg/facReg.do",
    ordNum: 8
  },
  {
    menuCl: "CD10",
    menuNm: "(V3)차량무선인식장치 제어",
    menuSe: "01",
    menuDp: 2,
    menuSn: 1,
    upperMenuCl: "M321",
    linkUrlNm: "/sce/carenroll/4",
    ordNum: 9
  },
  {
    menuCl: "CD11",
    menuNm: "환경설정",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CD10",
    linkUrlNm: "/sce/carenroll/wirelessControl/environSet.do",
    ordNum: 10
  },
  {
    menuCl: "CD12",
    menuNm: "App관리",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CD10",
    linkUrlNm: "/sce/carenroll/wirelessControl/appMg.do",
    ordNum: 11
  },
  {
    menuCl: "CD13",
    menuNm: "음성안내관리",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CD10",
    linkUrlNm: "/sce/carenroll/wirelessControl/voiceGuideMg.do",
    ordNum: 12
  },
  {
    menuCl: "CD14",
    menuNm: "음성안내관리(시군)",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CD10",
    linkUrlNm: "/sce/carenroll/wirelessControl/voiceGuideAreaMg.do",
    ordNum: 13
  },
  {
    menuCl: "CD15",
    menuNm: "농장조회",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CD10",
    linkUrlNm: "/sce/carenroll/wirelessControl/farmSearch.do",
    ordNum: 14
  },
  {
    menuCl: "CD16",
    menuNm: "농장조회확인",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CD10",
    linkUrlNm: "/sce/carenroll/wirelessControl/farmUploadInfo.do",
    ordNum: 15
  },
  {
    menuCl: "CD17",
    menuNm: "단말농장 업로드 요청",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CD10",
    linkUrlNm: "/sce/carenroll/wirelessControl/terminalFarmUploadRequest.do",
    ordNum: 16
  },
  {
    menuCl: "CD18",
    menuNm: "단말농장 업로드 확인",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CD10",
    linkUrlNm: "/sce/carenroll/wirelessControl/terminalFarmUploadHist.do",
    ordNum: 17
  },
  {
    menuCl: "CE10",
    menuNm: "축산차량 모니터링",
    menuSe: "01",
    menuDp: 2,
    menuSn: 1,
    upperMenuCl: "M321",
    linkUrlNm: "/sce/carenroll/5",
    ordNum: 18
  },
  {
    menuCl: "CE11",
    menuNm: "긴급 축산차량 위치관제 요청",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CE10",
    linkUrlNm: "/sce/carenroll/carMonitoring/emergencyCarRequest.do",
    ordNum: 19
  },
  {
    menuCl: "CE12",
    menuNm: "긴급 축산차량 조회",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CE10",
    linkUrlNm: "/sce/carenroll/carMonitoring/emergencyCarSetStatus.do",
    ordNum: 20
  },
  {
    menuCl: "CE13",
    menuNm: "축산차량 모니터링 현황",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CE10",
    linkUrlNm: "/sce/carenroll/carMonitoring/carMonitoring.do",
    ordNum: 21
  },
  {
    menuCl: "CF10",
    menuNm: "선별통제",
    menuSe: "01",
    menuDp: 2,
    menuSn: 1,
    upperMenuCl: "M321",
    linkUrlNm: "/sce/carenroll/6",
    ordNum: 22
  },
  {
    menuCl: "CF11",
    menuNm: "초소 통제구역현황",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CF10",
    linkUrlNm: "/sce/carenroll/selectControl/controlAreaStatus.do",
    ordNum: 23
  },
  {
    menuCl: "CF12",
    menuNm: "초소 통제구역진입결과",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CF10",
    linkUrlNm: "/sce/carenroll/selectControl/controlAreaResultStatus.do",
    ordNum: 24
  },
  {
    menuCl: "CF13",
    menuNm: "(V3)농장 통제구역현황",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CF10",
    linkUrlNm: "/sce/carenroll/farmSelectControl/farmControlAreaStatus.do",
    ordNum: 25
  },
  {
    menuCl: "CF14",
    menuNm: "(V3)농장 통제구역진입결과",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CF10",
    linkUrlNm:
      "/sce/carenroll/farmSelectControl/farmControlAreaResultStatus.do",
    ordNum: 26
  },
  {
    menuCl: "CH10",
    menuNm: "이력 관리",
    menuSe: "01",
    menuDp: 2,
    menuSn: 1,
    upperMenuCl: "M321",
    linkUrlNm: "/sce/carenroll/8",
    ordNum: 27
  },
  {
    menuCl: "CH11",
    menuNm: "업로드 요청",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CH10",
    linkUrlNm: "/sce/carenroll/histMg/uploadRequest.do",
    ordNum: 28
  },
  {
    menuCl: "CH12",
    menuNm: "농장방문 이력 조회",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CH10",
    linkUrlNm: "/sce/carenroll/histMg/visitHist.do",
    ordNum: 29
  },
  {
    menuCl: "CH13",
    menuNm: "초소 선별통제 이력 조회",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CH10",
    linkUrlNm: "/sce/carenroll/histMg/selectControlHist.do",
    ordNum: 30
  },
  {
    menuCl: "CH14",
    menuNm: "농장 선별통제 이력 조회",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CH10",
    linkUrlNm: "/sce/carenroll/histMg/farmSelectControlHist.do",
    ordNum: 31
  },
  {
    menuCl: "CI10",
    menuNm: "M2M통계",
    menuSe: "01",
    menuDp: 2,
    menuSn: 1,
    upperMenuCl: "M321",
    linkUrlNm: "/sce/carenroll/9",
    ordNum: 32
  },
  {
    menuCl: "CI11",
    menuNm: "M2M통계",
    menuSe: "01",
    menuDp: 3,
    menuSn: 2,
    upperMenuCl: "CI10",
    linkUrlNm: "/sce/carenroll/m2mStatistics/m2mStatistics.do",
    ordNum: 33
  }
];

console.log(obj[0]["menuCl"]);
let menuTree = [];
console.log(typeof menuTree);

for (let i = 0; i < obj.length; i++) {
  if (obj[i]["upperMenuCl"] === "M321") {
    menuTree[i] = {
      menuLabel: obj[i]["menuNm"],
      anchor: obj[i]["linkUrlNm"],
      subMenu: []
    };
    console.log("if");
  }
}

menuTree = menuTree.filter(item => item != undefined);
// console.log(menuTree);

for (let index = 0; index < menuTree.length; index++) {
  if (obj[index]["upperMenuCl"] != "M321") {
    menuTree[index]["subMenu"] = {
      menuLabel: obj[index]["menuNm"],
      anchor: obj[index]["linkUrlNm"],
      subMenu: []
    };
  }
}

console.log(menuTree);

// for (let index = 0; index < menuTree.length; index++) {
//   // if (obj[index]["upperMenuCl"] != "M321") {
//   console.log(menuTree[index]);

// }
// console.log(menuTree);
// menuTree[0]["subMenu"] = {
//   subMenu: []
// };
// console.log(menuTree[0]["subMenu"]);

// for (let i = 0; i < obj.length; i++) {
//   if (obj[i]["upperMenuCl"] === "M321") {
//     menuTree[i] = {
//       menuLabel: obj[i]["menuNm"],
//       anchor: obj[i]["linkUrlNm"],
//       subMenu: []
//     };
//     console.log(typeof menuTree[i]["subMenu"]);
//   } else {
//     for (let j = 0; j < obj.length; j++) {
//       menuTree[j]["subMenu"] = {
//         menuLabel: obj[j]["menuNm"],
//         anchor: obj[j]["linkUrlNm"],
//         subMenu: []
//       };
//     }
//   }
//
sx;
