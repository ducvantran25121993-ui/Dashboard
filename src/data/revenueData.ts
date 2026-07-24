export interface ServiceData {
  name: string;
  cp: number;
  dataCount: number;
  dataChatLuong?: number;
}

export interface RegionData {
  name: string;
  costVAT: number;      // Chi Phí (VAT)
  revenue: number;      // Doanh Thu
  cpDichVu: number;     // CP Dịch Vụ
  cpTong: number;       // CP Tổng
  totalData?: number;   // Cột Data theo khu vực
  dataChatLuong?: number; // Cột Data CL (Data Chất Lượng) theo khu vực
  services: ServiceData[];
}

export interface MonthDataset {
  month: number;
  label: string;
  regions: RegionData[];
}

export const MONTHLY_DATA: MonthDataset[] = [
  {
    "month": 1,
    "label": "Tháng 1",
    "regions": [
      {
        "name": "Bình Dương",
        "costVAT": 54146600,
        "revenue": 493077000,
        "cpDichVu": 21147878,
        "cpTong": 46421982,
        "totalData": 81,
        "dataChatLuong": 81,
        "services": [
          {
            "name": "Implant",
            "cp": 21147878,
            "dataCount": 19
          },
          {
            "name": "Niềng",
            "cp": 7599881,
            "dataCount": 12
          },
          {
            "name": "Sứ",
            "cp": 11202603,
            "dataCount": 10
          },
          {
            "name": "TH",
            "cp": 6471620,
            "dataCount": 40
          }
        ]
      },
      {
        "name": "Bình Phước",
        "costVAT": 21099901,
        "revenue": 9800000,
        "cpDichVu": 6041849,
        "cpTong": 18089764,
        "totalData": 20,
        "dataChatLuong": 20,
        "services": [
          {
            "name": "Implant",
            "cp": 6041849,
            "dataCount": 1
          },
          {
            "name": "Niềng",
            "cp": 0,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 7615756,
            "dataCount": 11
          },
          {
            "name": "Sứ",
            "cp": 4432159,
            "dataCount": 4
          }
        ]
      },
      {
        "name": "Biên Hòa",
        "costVAT": 41109732,
        "revenue": 437765000,
        "cpDichVu": 11206079,
        "cpTong": 35244969,
        "totalData": 70,
        "dataChatLuong": 70,
        "services": [
          {
            "name": "Implant",
            "cp": 11206079,
            "dataCount": 10
          },
          {
            "name": "Niềng",
            "cp": 8501082,
            "dataCount": 16
          },
          {
            "name": "Sứ",
            "cp": 9318952,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 6218856,
            "dataCount": 40
          }
        ]
      },
      {
        "name": "Cần Thơ",
        "costVAT": 38684190,
        "revenue": 177129000,
        "cpDichVu": 6957624,
        "cpTong": 33165458,
        "totalData": 108,
        "dataChatLuong": 108,
        "services": [
          {
            "name": "TH",
            "cp": 6957624,
            "dataCount": 83
          },
          {
            "name": "Implant",
            "cp": 9634373,
            "dataCount": 7
          },
          {
            "name": "Niềng",
            "cp": 8095208,
            "dataCount": 9
          },
          {
            "name": "Sứ",
            "cp": 8478253,
            "dataCount": 9
          }
        ]
      },
      {
        "name": "Đà Nẵng",
        "costVAT": 56915976,
        "revenue": 171150000,
        "cpDichVu": 17480655,
        "cpTong": 48796276,
        "totalData": 55,
        "dataChatLuong": 55,
        "services": [
          {
            "name": "Implant",
            "cp": 17480655,
            "dataCount": 10
          },
          {
            "name": "Niềng",
            "cp": 9335730,
            "dataCount": 2
          },
          {
            "name": "Sứ",
            "cp": 14324022,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 7655869,
            "dataCount": 39
          }
        ]
      },
      {
        "name": "Quy Nhơn",
        "costVAT": 28783242,
        "revenue": 170200000,
        "cpDichVu": 8854958,
        "cpTong": 24676991,
        "totalData": 32,
        "dataChatLuong": 32,
        "services": [
          {
            "name": "Implant",
            "cp": 8854958,
            "dataCount": 6
          },
          {
            "name": "Niềng",
            "cp": 6223500,
            "dataCount": 3
          },
          {
            "name": "Sứ",
            "cp": 3446581,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 6151952,
            "dataCount": 20
          }
        ]
      },
      {
        "name": "Tây Ninh",
        "costVAT": 32258264,
        "revenue": 316400000,
        "cpDichVu": 8022670,
        "cpTong": 27656262,
        "totalData": 44,
        "dataChatLuong": 44,
        "services": [
          {
            "name": "Implant",
            "cp": 8022670,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 6319825,
            "dataCount": 6
          },
          {
            "name": "Sứ",
            "cp": 6476771,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 6836996,
            "dataCount": 31
          }
        ]
      },
      {
        "name": "Vũng Tàu",
        "costVAT": 36929564,
        "revenue": 195550000,
        "cpDichVu": 10124998,
        "cpTong": 31661149,
        "totalData": 90,
        "dataChatLuong": 90,
        "services": [
          {
            "name": "Implant",
            "cp": 10124998,
            "dataCount": 10
          },
          {
            "name": "Niềng",
            "cp": 6506035,
            "dataCount": 5
          },
          {
            "name": "Sứ",
            "cp": 5907556,
            "dataCount": 14
          },
          {
            "name": "TH",
            "cp": 9122560,
            "dataCount": 61
          }
        ]
      },
      {
        "name": "Dĩ An",
        "costVAT": 27314317,
        "revenue": 53995000,
        "cpDichVu": 8357375,
        "cpTong": 23417624,
        "totalData": 49,
        "dataChatLuong": 49,
        "services": [
          {
            "name": "Implant",
            "cp": 8357375,
            "dataCount": 3
          },
          {
            "name": "Niềng",
            "cp": 5363752,
            "dataCount": 8
          },
          {
            "name": "Sứ",
            "cp": 5178454,
            "dataCount": 7
          },
          {
            "name": "TH",
            "cp": 4518043,
            "dataCount": 31
          }
        ]
      },
      {
        "name": "HCM",
        "costVAT": 607226015,
        "revenue": 5099272350,
        "cpDichVu": 212030013,
        "cpTong": 557881359,
        "totalData": 1187,
        "dataChatLuong": 1187,
        "services": [
          {
            "name": "HCM-Imp",
            "cp": 212030013,
            "dataCount": 101
          },
          {
            "name": "HCM-Niềng",
            "cp": 100109870,
            "dataCount": 110
          },
          {
            "name": "HCM-Sứ",
            "cp": 108606357,
            "dataCount": 125
          },
          {
            "name": "HCM-TH",
            "cp": 137135119,
            "dataCount": 851
          }
        ]
      },
      {
        "name": "Việt Kiều",
        "costVAT": 180991534,
        "revenue": 895655000,
        "cpDichVu": 155171068,
        "cpTong": 155171068,
        "totalData": 24,
        "dataChatLuong": 24,
        "services": [
          {
            "name": "Việt Kiều",
            "cp": 155171068,
            "dataCount": 24
          }
        ]
      },
      {
        "name": "Bạc Liêu",
        "costVAT": 12808778,
        "revenue": 127849000,
        "cpDichVu": 2677322,
        "cpTong": 10981463,
        "totalData": 22,
        "dataChatLuong": 22,
        "services": [
          {
            "name": "Implant",
            "cp": 2677322,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 4080030,
            "dataCount": 0
          },
          {
            "name": "Sứ",
            "cp": 2393936,
            "dataCount": 5
          },
          {
            "name": "TH",
            "cp": 1830175,
            "dataCount": 13
          }
        ]
      },
      {
        "name": "Cà Mau",
        "costVAT": 16411990,
        "revenue": 205450000,
        "cpDichVu": 3694578,
        "cpTong": 14070636,
        "totalData": 40,
        "dataChatLuong": 40,
        "services": [
          {
            "name": "Implant",
            "cp": 3694578,
            "dataCount": 3
          },
          {
            "name": "Niềng",
            "cp": 5029623,
            "dataCount": 5
          },
          {
            "name": "Sứ",
            "cp": 2754170,
            "dataCount": 7
          },
          {
            "name": "TH",
            "cp": 2592265,
            "dataCount": 25
          }
        ]
      },
      {
        "name": "Đồng Tháp",
        "costVAT": 18970743,
        "revenue": 51600000,
        "cpDichVu": 6907901,
        "cpTong": 16264354,
        "totalData": 39,
        "dataChatLuong": 39,
        "services": [
          {
            "name": "Implant",
            "cp": 6907901,
            "dataCount": 5
          },
          {
            "name": "Niềng",
            "cp": 3527303,
            "dataCount": 5
          },
          {
            "name": "Sứ",
            "cp": 3174028,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 2655122,
            "dataCount": 25
          }
        ]
      },
      {
        "name": "Sóc Trăng",
        "costVAT": 12298729,
        "revenue": 16200000,
        "cpDichVu": 2365875,
        "cpTong": 10544178,
        "totalData": 7,
        "dataChatLuong": 7,
        "services": [
          {
            "name": "Implant",
            "cp": 2365875,
            "dataCount": 0
          },
          {
            "name": "Niềng",
            "cp": 3007595,
            "dataCount": 0
          },
          {
            "name": "Sứ",
            "cp": 1888081,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 3282627,
            "dataCount": 4
          }
        ]
      },
      {
        "name": "Đà Lạt",
        "costVAT": 20881651,
        "revenue": 32800000,
        "cpDichVu": 6605798,
        "cpTong": 17902650,
        "totalData": 32,
        "dataChatLuong": 32,
        "services": [
          {
            "name": "Implant",
            "cp": 6605798,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 5095739,
            "dataCount": 4
          },
          {
            "name": "Sứ",
            "cp": 2934913,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 3266200,
            "dataCount": 22
          }
        ]
      },
      {
        "name": "Gia Kiệm",
        "costVAT": 16753665,
        "revenue": 0,
        "cpDichVu": 4748520,
        "cpTong": 14363567,
        "totalData": 8,
        "dataChatLuong": 8,
        "services": [
          {
            "name": "Implant",
            "cp": 4748520,
            "dataCount": 1
          },
          {
            "name": "Niềng",
            "cp": 3749237,
            "dataCount": 0
          },
          {
            "name": "Sứ",
            "cp": 3357064,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 2508746,
            "dataCount": 5
          }
        ]
      },
      {
        "name": "Không Địa Chỉ",
        "costVAT": 0,
        "revenue": 0,
        "cpDichVu": 0,
        "cpTong": 0,
        "totalData": 0,
        "dataChatLuong": 0,
        "services": [
          {
            "name": "Implant",
            "cp": 0,
            "dataCount": 22
          },
          {
            "name": "Niềng",
            "cp": 0,
            "dataCount": 12
          },
          {
            "name": "Sứ",
            "cp": 0,
            "dataCount": 15
          },
          {
            "name": "TH",
            "cp": 0,
            "dataCount": 184
          }
        ]
      }
    ]
  },
  {
    "month": 2,
    "label": "Tháng 2",
    "regions": [
      {
        "name": "Bình Dương",
        "costVAT": 29452790,
        "revenue": 269198000,
        "cpDichVu": 8521057,
        "cpTong": 22709009,
        "totalData": 77,
        "dataChatLuong": 77,
        "services": [
          {
            "name": "Implant",
            "cp": 8521057,
            "dataCount": 11
          },
          {
            "name": "Niềng",
            "cp": 5087241,
            "dataCount": 13
          },
          {
            "name": "Sứ",
            "cp": 6000823,
            "dataCount": 9
          },
          {
            "name": "TH",
            "cp": 3099888,
            "dataCount": 44
          }
        ]
      },
      {
        "name": "Bình Phước",
        "costVAT": 12220990,
        "revenue": 13300000,
        "cpDichVu": 3973755,
        "cpTong": 16093070,
        "totalData": 8,
        "dataChatLuong": 8,
        "services": [
          {
            "name": "Implant",
            "cp": 3973755,
            "dataCount": 1
          },
          {
            "name": "Niềng",
            "cp": 2968861,
            "dataCount": 0
          },
          {
            "name": "TH",
            "cp": 2163128,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 6987326,
            "dataCount": 0
          }
        ]
      },
      {
        "name": "Biên Hòa",
        "costVAT": 28857830,
        "revenue": 241885000,
        "cpDichVu": 5552733,
        "cpTong": 17637732,
        "totalData": 46,
        "dataChatLuong": 46,
        "services": [
          {
            "name": "Implant",
            "cp": 5552733,
            "dataCount": 6
          },
          {
            "name": "Niềng",
            "cp": 5456356,
            "dataCount": 12
          },
          {
            "name": "Sứ",
            "cp": 2870290,
            "dataCount": 5
          },
          {
            "name": "TH",
            "cp": 3758353,
            "dataCount": 23
          }
        ]
      },
      {
        "name": "Cần Thơ",
        "costVAT": 24002120,
        "revenue": 76250000,
        "cpDichVu": 5325209,
        "cpTong": 20538887,
        "totalData": 61,
        "dataChatLuong": 61,
        "services": [
          {
            "name": "TH",
            "cp": 5325209,
            "dataCount": 32
          },
          {
            "name": "Implant",
            "cp": 4654045,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 3747195,
            "dataCount": 10
          },
          {
            "name": "Sứ",
            "cp": 6812438,
            "dataCount": 15
          }
        ]
      },
      {
        "name": "Đà Nẵng",
        "costVAT": 32711790,
        "revenue": 20300000,
        "cpDichVu": 4515991,
        "cpTong": 20528407,
        "totalData": 22,
        "dataChatLuong": 22,
        "services": [
          {
            "name": "Implant",
            "cp": 4515991,
            "dataCount": 2
          },
          {
            "name": "Niềng",
            "cp": 6274490,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 4500329,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 5237597,
            "dataCount": 11
          }
        ]
      },
      {
        "name": "Quy Nhơn",
        "costVAT": 19491020,
        "revenue": 102548000,
        "cpDichVu": 3380750,
        "cpTong": 12604746,
        "totalData": 24,
        "dataChatLuong": 24,
        "services": [
          {
            "name": "Implant",
            "cp": 3380750,
            "dataCount": 2
          },
          {
            "name": "Niềng",
            "cp": 3030282,
            "dataCount": 2
          },
          {
            "name": "Sứ",
            "cp": 3435746,
            "dataCount": 7
          },
          {
            "name": "TH",
            "cp": 2757968,
            "dataCount": 13
          }
        ]
      },
      {
        "name": "Tây Ninh",
        "costVAT": 17296210,
        "revenue": 38300000,
        "cpDichVu": 2837871,
        "cpTong": 15374063,
        "totalData": 34,
        "dataChatLuong": 34,
        "services": [
          {
            "name": "Implant",
            "cp": 2837871,
            "dataCount": 6
          },
          {
            "name": "Niềng",
            "cp": 3712350,
            "dataCount": 5
          },
          {
            "name": "Sứ",
            "cp": 3381858,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 5441984,
            "dataCount": 20
          }
        ]
      },
      {
        "name": "Vũng Tàu",
        "costVAT": 23240310,
        "revenue": 95070000,
        "cpDichVu": 3183181,
        "cpTong": 12536461,
        "totalData": 48,
        "dataChatLuong": 48,
        "services": [
          {
            "name": "Implant",
            "cp": 3183181,
            "dataCount": 5
          },
          {
            "name": "Niềng",
            "cp": 2895318,
            "dataCount": 8
          },
          {
            "name": "Sứ",
            "cp": 4626132,
            "dataCount": 6
          },
          {
            "name": "TH",
            "cp": 1831830,
            "dataCount": 29
          }
        ]
      },
      {
        "name": "Dĩ An",
        "costVAT": 12433760,
        "revenue": 4440000,
        "cpDichVu": 2639146,
        "cpTong": 120865412,
        "totalData": 27,
        "dataChatLuong": 27,
        "services": [
          {
            "name": "Implant",
            "cp": 2639146,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 2062758,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 2121018,
            "dataCount": 5
          },
          {
            "name": "TH",
            "cp": 114042490,
            "dataCount": 11
          }
        ]
      },
      {
        "name": "HCM",
        "costVAT": 445757320,
        "revenue": 2375006240,
        "cpDichVu": 54719740,
        "cpTong": 261587175,
        "totalData": 659,
        "dataChatLuong": 659,
        "services": [
          {
            "name": "HCM-Imp",
            "cp": 54719740,
            "dataCount": 64
          },
          {
            "name": "HCM-Niềng",
            "cp": 57151819,
            "dataCount": 115
          },
          {
            "name": "HCM-Sứ",
            "cp": 86428755,
            "dataCount": 56
          },
          {
            "name": "HCM-TH",
            "cp": 63286861,
            "dataCount": 424
          }
        ]
      },
      {
        "name": "Việt Kiều",
        "costVAT": 84393970,
        "revenue": 143000000,
        "cpDichVu": 2113394,
        "cpTong": 2113394,
        "totalData": 53,
        "dataChatLuong": 53,
        "services": [
          {
            "name": "Việt Kiều",
            "cp": 2113394,
            "dataCount": 53
          }
        ]
      },
      {
        "name": "Bạc Liêu",
        "costVAT": 7434340,
        "revenue": 51750000,
        "cpDichVu": 1109536,
        "cpTong": 5434483,
        "totalData": 17,
        "dataChatLuong": 17,
        "services": [
          {
            "name": "Implant",
            "cp": 1109536,
            "dataCount": 3
          },
          {
            "name": "Niềng",
            "cp": 754065,
            "dataCount": 1
          },
          {
            "name": "Sứ",
            "cp": 1148060,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 2422822,
            "dataCount": 9
          }
        ]
      },
      {
        "name": "Cà Mau",
        "costVAT": 11891350,
        "revenue": 103550000,
        "cpDichVu": 1307566,
        "cpTong": 8680947,
        "totalData": 32,
        "dataChatLuong": 32,
        "services": [
          {
            "name": "Implant",
            "cp": 1307566,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 1083989,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 3097922,
            "dataCount": 5
          },
          {
            "name": "TH",
            "cp": 3191470,
            "dataCount": 16
          }
        ]
      },
      {
        "name": "Đồng Tháp",
        "costVAT": 13317810,
        "revenue": 41500000,
        "cpDichVu": 2059875,
        "cpTong": 7591276,
        "totalData": 21,
        "dataChatLuong": 21,
        "services": [
          {
            "name": "Implant",
            "cp": 2059875,
            "dataCount": 0
          },
          {
            "name": "Niềng",
            "cp": 1384618,
            "dataCount": 3
          },
          {
            "name": "Sứ",
            "cp": 2325538,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 1821245,
            "dataCount": 14
          }
        ]
      },
      {
        "name": "Sóc Trăng",
        "costVAT": 8267580,
        "revenue": 12300000,
        "cpDichVu": 944047,
        "cpTong": 7183587,
        "totalData": 12,
        "dataChatLuong": 12,
        "services": [
          {
            "name": "Implant",
            "cp": 944047,
            "dataCount": 1
          },
          {
            "name": "Niềng",
            "cp": 746289,
            "dataCount": 3
          },
          {
            "name": "Sứ",
            "cp": 1780472,
            "dataCount": 1
          },
          {
            "name": "TH",
            "cp": 3712779,
            "dataCount": 7
          }
        ]
      },
      {
        "name": "Đà Lạt",
        "costVAT": 14423770,
        "revenue": 3000000,
        "cpDichVu": 2265736,
        "cpTong": 8685374,
        "totalData": 28,
        "dataChatLuong": 28,
        "services": [
          {
            "name": "Implant",
            "cp": 2265736,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 2145715,
            "dataCount": 2
          },
          {
            "name": "Sứ",
            "cp": 1892222,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 2381701,
            "dataCount": 18
          }
        ]
      },
      {
        "name": "Gia Kiệm",
        "costVAT": 10969970,
        "revenue": 1500000,
        "cpDichVu": 2006840,
        "cpTong": 5742992,
        "totalData": 13,
        "dataChatLuong": 13,
        "services": [
          {
            "name": "Implant",
            "cp": 2006840,
            "dataCount": 0
          },
          {
            "name": "Niềng",
            "cp": 1277996,
            "dataCount": 2
          },
          {
            "name": "Sứ",
            "cp": 2458156,
            "dataCount": 5
          },
          {
            "name": "TH",
            "cp": 0,
            "dataCount": 6
          }
        ]
      },
      {
        "name": "Không Địa Chỉ",
        "costVAT": 0,
        "revenue": 0,
        "cpDichVu": 0,
        "cpTong": 0,
        "totalData": 0,
        "dataChatLuong": 0,
        "services": [
          {
            "name": "Implant",
            "cp": 0,
            "dataCount": 2
          },
          {
            "name": "Niềng",
            "cp": 0,
            "dataCount": 1
          },
          {
            "name": "Sứ",
            "cp": 0,
            "dataCount": 0
          },
          {
            "name": "TH",
            "cp": 0,
            "dataCount": 14
          }
        ]
      }
    ]
  },
  {
    "month": 3,
    "label": "Tháng 3",
    "regions": [
      {
        "name": "Bình Dương",
        "costVAT": 48606823,
        "revenue": 424580000,
        "cpDichVu": 15513806,
        "cpTong": 0,
        "totalData": 96,
        "dataChatLuong": 96,
        "services": [
          {
            "name": "Implant",
            "cp": 15513806,
            "dataCount": 17
          },
          {
            "name": "Niềng",
            "cp": 9353195,
            "dataCount": 21
          },
          {
            "name": "Sứ",
            "cp": 11535491,
            "dataCount": 15
          },
          {
            "name": "TH",
            "cp": 5270024,
            "dataCount": 46
          }
        ]
      },
      {
        "name": "Bình Phước",
        "costVAT": 21386555,
        "revenue": 2300000,
        "cpDichVu": 5518974,
        "cpTong": 0,
        "totalData": 18,
        "dataChatLuong": 18,
        "services": [
          {
            "name": "Implant",
            "cp": 5518974,
            "dataCount": 2
          },
          {
            "name": "Niềng",
            "cp": 2399683,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 6201785,
            "dataCount": 12
          },
          {
            "name": "Sứ",
            "cp": 4215082,
            "dataCount": 0
          }
        ]
      },
      {
        "name": "Biên Hòa",
        "costVAT": 44257816,
        "revenue": 632800000,
        "cpDichVu": 13677209,
        "cpTong": 0,
        "totalData": 65,
        "dataChatLuong": 65,
        "services": [
          {
            "name": "Implant",
            "cp": 13677209,
            "dataCount": 18
          },
          {
            "name": "Niềng",
            "cp": 6968120,
            "dataCount": 14
          },
          {
            "name": "Sứ",
            "cp": 11546354,
            "dataCount": 12
          },
          {
            "name": "TH",
            "cp": 5752261,
            "dataCount": 28
          }
        ]
      },
      {
        "name": "Cần Thơ",
        "costVAT": 38146405,
        "revenue": 193717000,
        "cpDichVu": 6811800,
        "cpTong": 0,
        "totalData": 59,
        "dataChatLuong": 59,
        "services": [
          {
            "name": "TH",
            "cp": 6811800,
            "dataCount": 27
          },
          {
            "name": "Implant",
            "cp": 10251696,
            "dataCount": 10
          },
          {
            "name": "Niềng",
            "cp": 6816204,
            "dataCount": 8
          },
          {
            "name": "Sứ",
            "cp": 8824694,
            "dataCount": 17
          }
        ]
      },
      {
        "name": "Đà Nẵng",
        "costVAT": 52251295,
        "revenue": 283480000,
        "cpDichVu": 15886807,
        "cpTong": 0,
        "totalData": 60,
        "dataChatLuong": 60,
        "services": [
          {
            "name": "Implant",
            "cp": 15886807,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 9525856,
            "dataCount": 19
          },
          {
            "name": "Sứ",
            "cp": 11944094,
            "dataCount": 8
          },
          {
            "name": "TH",
            "cp": 7440307,
            "dataCount": 31
          }
        ]
      },
      {
        "name": "Quy Nhơn",
        "costVAT": 22419707,
        "revenue": 263500000,
        "cpDichVu": 6152974,
        "cpTong": 0,
        "totalData": 38,
        "dataChatLuong": 38,
        "services": [
          {
            "name": "Implant",
            "cp": 6152974,
            "dataCount": 3
          },
          {
            "name": "Niềng",
            "cp": 5104566,
            "dataCount": 13
          },
          {
            "name": "Sứ",
            "cp": 3692444,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 4271301,
            "dataCount": 18
          }
        ]
      },
      {
        "name": "Tây Ninh",
        "costVAT": 29181091,
        "revenue": 298060000,
        "cpDichVu": 7776089,
        "cpTong": 0,
        "totalData": 33,
        "dataChatLuong": 33,
        "services": [
          {
            "name": "Implant",
            "cp": 7776089,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 5669537,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 5958767,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 5613690,
            "dataCount": 21
          }
        ]
      },
      {
        "name": "Vũng Tàu",
        "costVAT": 36013892,
        "revenue": 607600000,
        "cpDichVu": 11919297,
        "cpTong": 0,
        "totalData": 69,
        "dataChatLuong": 69,
        "services": [
          {
            "name": "Implant",
            "cp": 11919297,
            "dataCount": 13
          },
          {
            "name": "Niềng",
            "cp": 6059915,
            "dataCount": 12
          },
          {
            "name": "Sứ",
            "cp": 5640013,
            "dataCount": 13
          },
          {
            "name": "TH",
            "cp": 7256883,
            "dataCount": 39
          }
        ]
      },
      {
        "name": "Dĩ An",
        "costVAT": 26571783,
        "revenue": 0,
        "cpDichVu": 8155085,
        "cpTong": 0,
        "totalData": 40,
        "dataChatLuong": 40,
        "services": [
          {
            "name": "Implant",
            "cp": 8155085,
            "dataCount": 7
          },
          {
            "name": "Niềng",
            "cp": 6582987,
            "dataCount": 2
          },
          {
            "name": "Sứ",
            "cp": 4256887,
            "dataCount": 5
          },
          {
            "name": "TH",
            "cp": 3786062,
            "dataCount": 28
          }
        ]
      },
      {
        "name": "HCM",
        "costVAT": 698132560,
        "revenue": 4619606000,
        "cpDichVu": 234701227,
        "cpTong": 0,
        "totalData": 1133,
        "dataChatLuong": 1133,
        "services": [
          {
            "name": "HCM-Imp",
            "cp": 234701227,
            "dataCount": 162
          },
          {
            "name": "HCM-Niềng",
            "cp": 110223913,
            "dataCount": 263
          },
          {
            "name": "HCM-Sứ",
            "cp": 136242777,
            "dataCount": 119
          },
          {
            "name": "HCM-TH",
            "cp": 148991813,
            "dataCount": 669
          }
        ]
      },
      {
        "name": "Việt Kiều",
        "costVAT": 114700525,
        "revenue": 938910000,
        "cpDichVu": 98337213,
        "cpTong": 0,
        "totalData": 81,
        "dataChatLuong": 81,
        "services": [
          {
            "name": "Việt Kiều",
            "cp": 98337213,
            "dataCount": 85
          }
        ]
      },
      {
        "name": "Bạc Liêu",
        "costVAT": 13871008,
        "revenue": 20240000,
        "cpDichVu": 3381198,
        "cpTong": 0,
        "totalData": 20,
        "dataChatLuong": 20,
        "services": [
          {
            "name": "Implant",
            "cp": 3381198,
            "dataCount": 2
          },
          {
            "name": "Niềng",
            "cp": 3659172,
            "dataCount": 1
          },
          {
            "name": "Sứ",
            "cp": 1647347,
            "dataCount": 0
          },
          {
            "name": "TH",
            "cp": 3204437,
            "dataCount": 17
          }
        ]
      },
      {
        "name": "Cà Mau",
        "costVAT": 22551036,
        "revenue": 18398000,
        "cpDichVu": 6608605,
        "cpTong": 0,
        "totalData": 32,
        "dataChatLuong": 32,
        "services": [
          {
            "name": "Implant",
            "cp": 6608605,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 3381748,
            "dataCount": 6
          },
          {
            "name": "Sứ",
            "cp": 3259058,
            "dataCount": 6
          },
          {
            "name": "TH",
            "cp": 6084468,
            "dataCount": 16
          }
        ]
      },
      {
        "name": "Đồng Tháp",
        "costVAT": 23338416,
        "revenue": 41839000,
        "cpDichVu": 7175295,
        "cpTong": 0,
        "totalData": 28,
        "dataChatLuong": 28,
        "services": [
          {
            "name": "Implant",
            "cp": 7175295,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 4680265,
            "dataCount": 2
          },
          {
            "name": "Sứ",
            "cp": 3907298,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 4246072,
            "dataCount": 21
          }
        ]
      },
      {
        "name": "Sóc Trăng",
        "costVAT": 16481555,
        "revenue": 153900000,
        "cpDichVu": 2876402,
        "cpTong": 0,
        "totalData": 19,
        "dataChatLuong": 19,
        "services": [
          {
            "name": "Implant",
            "cp": 2876402,
            "dataCount": 0
          },
          {
            "name": "Niềng",
            "cp": 3374138,
            "dataCount": 1
          },
          {
            "name": "Sứ",
            "cp": 3708091,
            "dataCount": 1
          },
          {
            "name": "TH",
            "cp": 4171646,
            "dataCount": 17
          }
        ]
      },
      {
        "name": "Đà Lạt",
        "costVAT": 23799584,
        "revenue": 57870000,
        "cpDichVu": 7101265,
        "cpTong": 0,
        "totalData": 31,
        "dataChatLuong": 31,
        "services": [
          {
            "name": "Implant",
            "cp": 7101265,
            "dataCount": 6
          },
          {
            "name": "Niềng",
            "cp": 6354502,
            "dataCount": 3
          },
          {
            "name": "Sứ",
            "cp": 2940889,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 4007651,
            "dataCount": 19
          }
        ]
      },
      {
        "name": "Gia Kiệm",
        "costVAT": 13904387,
        "revenue": 0,
        "cpDichVu": 4097051,
        "cpTong": 0,
        "totalData": 15,
        "dataChatLuong": 15,
        "services": [
          {
            "name": "Implant",
            "cp": 4097051,
            "dataCount": 0
          },
          {
            "name": "Niềng",
            "cp": 3643804,
            "dataCount": 0
          },
          {
            "name": "Sứ",
            "cp": 1270883,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 2909033,
            "dataCount": 13
          }
        ]
      },
      {
        "name": "Không Địa Chỉ",
        "costVAT": 0,
        "revenue": 0,
        "cpDichVu": 0,
        "cpTong": 0,
        "totalData": 406,
        "dataChatLuong": 406,
        "services": [
          {
            "name": "Implant",
            "cp": 0,
            "dataCount": 34
          },
          {
            "name": "Niềng",
            "cp": 0,
            "dataCount": 44
          },
          {
            "name": "Sứ",
            "cp": 0,
            "dataCount": 23
          },
          {
            "name": "TH",
            "cp": 0,
            "dataCount": 306
          }
        ]
      }
    ]
  },
  {
    "month": 4,
    "label": "Tháng 4",
    "regions": [
      {
        "name": "Bình Dương",
        "costVAT": 44548620,
        "revenue": 362420000,
        "cpDichVu": 17964720,
        "cpTong": 0,
        "totalData": 67,
        "dataChatLuong": 67,
        "services": [
          {
            "name": "Implant",
            "cp": 17964720,
            "dataCount": 10
          },
          {
            "name": "Niềng",
            "cp": 5025967,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 14770411,
            "dataCount": 10
          },
          {
            "name": "TH",
            "cp": 6787522,
            "dataCount": 45
          }
        ]
      },
      {
        "name": "Bình Phước",
        "costVAT": 16250100,
        "revenue": 2700000,
        "cpDichVu": 5092138,
        "cpTong": 0,
        "totalData": 13,
        "dataChatLuong": 13,
        "services": [
          {
            "name": "Implant",
            "cp": 5092138,
            "dataCount": 1
          },
          {
            "name": "Niềng",
            "cp": 2086491,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 5042502,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 4028970,
            "dataCount": 3
          }
        ]
      },
      {
        "name": "Biên Hòa",
        "costVAT": 38539540,
        "revenue": 205300000,
        "cpDichVu": 14680423,
        "cpTong": 0,
        "totalData": 51,
        "dataChatLuong": 51,
        "services": [
          {
            "name": "Implant",
            "cp": 14680423,
            "dataCount": 9
          },
          {
            "name": "Niềng",
            "cp": 5332596,
            "dataCount": 9
          },
          {
            "name": "Sứ",
            "cp": 14298050,
            "dataCount": 12
          },
          {
            "name": "TH",
            "cp": 4228471,
            "dataCount": 28
          }
        ]
      },
      {
        "name": "Cần Thơ",
        "costVAT": 29735990,
        "revenue": 364877000,
        "cpDichVu": 6092086,
        "cpTong": 0,
        "totalData": 66,
        "dataChatLuong": 66,
        "services": [
          {
            "name": "TH",
            "cp": 6092086,
            "dataCount": 42
          },
          {
            "name": "Implant",
            "cp": 9926303,
            "dataCount": 6
          },
          {
            "name": "Niềng",
            "cp": 5580743,
            "dataCount": 20
          },
          {
            "name": "Sứ",
            "cp": 8136858,
            "dataCount": 10
          }
        ]
      },
      {
        "name": "Đà Nẵng",
        "costVAT": 36444360,
        "revenue": 109610000,
        "cpDichVu": 15079228,
        "cpTong": 0,
        "totalData": 55,
        "dataChatLuong": 55,
        "services": [
          {
            "name": "Implant",
            "cp": 15079228,
            "dataCount": 14
          },
          {
            "name": "Niềng",
            "cp": 5052741,
            "dataCount": 8
          },
          {
            "name": "Sứ",
            "cp": 10694293,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 5618098,
            "dataCount": 32
          }
        ]
      },
      {
        "name": "Quy Nhơn",
        "costVAT": 20876050,
        "revenue": 38100000,
        "cpDichVu": 7472193,
        "cpTong": 0,
        "totalData": 32,
        "dataChatLuong": 32,
        "services": [
          {
            "name": "Implant",
            "cp": 7472193,
            "dataCount": 6
          },
          {
            "name": "Niềng",
            "cp": 2763250,
            "dataCount": 4
          },
          {
            "name": "Sứ",
            "cp": 5144042,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 5496565,
            "dataCount": 24
          }
        ]
      },
      {
        "name": "Tây Ninh",
        "costVAT": 27536270,
        "revenue": 72194000,
        "cpDichVu": 9229717,
        "cpTong": 0,
        "totalData": 38,
        "dataChatLuong": 38,
        "services": [
          {
            "name": "Implant",
            "cp": 9229717,
            "dataCount": 9
          },
          {
            "name": "Niềng",
            "cp": 3148156,
            "dataCount": 3
          },
          {
            "name": "Sứ",
            "cp": 8057210,
            "dataCount": 6
          },
          {
            "name": "TH",
            "cp": 7101187,
            "dataCount": 26
          }
        ]
      },
      {
        "name": "Vũng Tàu",
        "costVAT": 31562230,
        "revenue": 404100000,
        "cpDichVu": 10764112,
        "cpTong": 0,
        "totalData": 63,
        "dataChatLuong": 63,
        "services": [
          {
            "name": "Implant",
            "cp": 10764112,
            "dataCount": 7
          },
          {
            "name": "Niềng",
            "cp": 4687680,
            "dataCount": 15
          },
          {
            "name": "Sứ",
            "cp": 9110794,
            "dataCount": 8
          },
          {
            "name": "TH",
            "cp": 6999644,
            "dataCount": 45
          }
        ]
      },
      {
        "name": "Dĩ An",
        "costVAT": 21356590,
        "revenue": 9640000,
        "cpDichVu": 8050184,
        "cpTong": 0,
        "totalData": 44,
        "dataChatLuong": 44,
        "services": [
          {
            "name": "Implant",
            "cp": 8050184,
            "dataCount": 8
          },
          {
            "name": "Niềng",
            "cp": 3360771,
            "dataCount": 8
          },
          {
            "name": "Sứ",
            "cp": 7775501,
            "dataCount": 7
          },
          {
            "name": "TH",
            "cp": 2170134,
            "dataCount": 27
          }
        ]
      },
      {
        "name": "HCM",
        "costVAT": 677612530,
        "revenue": 5609179000,
        "cpDichVu": 259435492,
        "cpTong": 0,
        "totalData": 984,
        "dataChatLuong": 984,
        "services": [
          {
            "name": "HCM-Imp",
            "cp": 259435492,
            "dataCount": 138
          },
          {
            "name": "HCM-Niềng",
            "cp": 52556949,
            "dataCount": 181
          },
          {
            "name": "HCM-Sứ",
            "cp": 173540199,
            "dataCount": 138
          },
          {
            "name": "HCM-TH",
            "cp": 192079890,
            "dataCount": 660
          }
        ]
      },
      {
        "name": "Việt Kiều",
        "costVAT": 109518450,
        "revenue": 482600000,
        "cpDichVu": 109518450,
        "cpTong": 0,
        "totalData": 67,
        "dataChatLuong": 67,
        "services": [
          {
            "name": "Việt Kiều",
            "cp": 109518450,
            "dataCount": 67
          }
        ]
      },
      {
        "name": "Bạc Liêu",
        "costVAT": 14406480,
        "revenue": 9400000,
        "cpDichVu": 3961275,
        "cpTong": 0,
        "totalData": 16,
        "dataChatLuong": 16,
        "services": [
          {
            "name": "Implant",
            "cp": 3961275,
            "dataCount": 0
          },
          {
            "name": "Niềng",
            "cp": 2785992,
            "dataCount": 3
          },
          {
            "name": "Sứ",
            "cp": 2765621,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 4893592,
            "dataCount": 10
          }
        ]
      },
      {
        "name": "Cà Mau",
        "costVAT": 18157020,
        "revenue": 36500000,
        "cpDichVu": 5191448,
        "cpTong": 0,
        "totalData": 31,
        "dataChatLuong": 31,
        "services": [
          {
            "name": "Implant",
            "cp": 5191448,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 3263853,
            "dataCount": 3
          },
          {
            "name": "Sứ",
            "cp": 3508334,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 6193385,
            "dataCount": 23
          }
        ]
      },
      {
        "name": "Đồng Tháp",
        "costVAT": 22761920,
        "revenue": 6100000,
        "cpDichVu": 8047851,
        "cpTong": 0,
        "totalData": 33,
        "dataChatLuong": 33,
        "services": [
          {
            "name": "Implant",
            "cp": 8047851,
            "dataCount": 7
          },
          {
            "name": "Niềng",
            "cp": 4635157,
            "dataCount": 5
          },
          {
            "name": "Sứ",
            "cp": 5033369,
            "dataCount": 5
          },
          {
            "name": "TH",
            "cp": 5045543,
            "dataCount": 22
          }
        ]
      },
      {
        "name": "Sóc Trăng",
        "costVAT": 17006120,
        "revenue": 2200000,
        "cpDichVu": 4397571,
        "cpTong": 0,
        "totalData": 11,
        "dataChatLuong": 11,
        "services": [
          {
            "name": "Implant",
            "cp": 4397571,
            "dataCount": 1
          },
          {
            "name": "Niềng",
            "cp": 3291967,
            "dataCount": 3
          },
          {
            "name": "Sứ",
            "cp": 3153494,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 6163087,
            "dataCount": 5
          }
        ]
      },
      {
        "name": "Đà Lạt",
        "costVAT": 18831160,
        "revenue": 160950000,
        "cpDichVu": 5639541,
        "cpTong": 0,
        "totalData": 32,
        "dataChatLuong": 32,
        "services": [
          {
            "name": "Implant",
            "cp": 5639541,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 3649922,
            "dataCount": 6
          },
          {
            "name": "Sứ",
            "cp": 4581300,
            "dataCount": 1
          },
          {
            "name": "TH",
            "cp": 4960397,
            "dataCount": 22
          }
        ]
      },
      {
        "name": "Gia Kiệm",
        "costVAT": 11208970,
        "revenue": 56000000,
        "cpDichVu": 3823279,
        "cpTong": 0,
        "totalData": 10,
        "dataChatLuong": 10,
        "services": [
          {
            "name": "Implant",
            "cp": 3823279,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 2425432,
            "dataCount": 1
          },
          {
            "name": "Sứ",
            "cp": 1494262,
            "dataCount": 1
          },
          {
            "name": "TH",
            "cp": 3465997,
            "dataCount": 6
          }
        ]
      },
      {
        "name": "Không Địa Chỉ",
        "costVAT": 0,
        "revenue": 0,
        "cpDichVu": 0,
        "cpTong": 0,
        "totalData": 433,
        "dataChatLuong": 433,
        "services": [
          {
            "name": "Implant",
            "cp": 0,
            "dataCount": 20
          },
          {
            "name": "Niềng",
            "cp": 0,
            "dataCount": 37
          },
          {
            "name": "Sứ",
            "cp": 0,
            "dataCount": 19
          },
          {
            "name": "TH",
            "cp": 0,
            "dataCount": 360
          }
        ]
      }
    ]
  },
  {
    "month": 5,
    "label": "Tháng 5",
    "regions": [
      {
        "name": "Bình Dương",
        "costVAT": 35839187,
        "revenue": 262760000,
        "cpDichVu": 13201803,
        "cpTong": 0,
        "totalData": 68,
        "dataChatLuong": 68,
        "services": [
          {
            "name": "Implant",
            "cp": 13201803,
            "dataCount": 6
          },
          {
            "name": "Niềng",
            "cp": 2975537,
            "dataCount": 22
          },
          {
            "name": "Sứ",
            "cp": 14245323,
            "dataCount": 12
          },
          {
            "name": "TH",
            "cp": 5394678,
            "dataCount": 38
          }
        ]
      },
      {
        "name": "Bình Phước",
        "costVAT": 8748188,
        "revenue": 3300000,
        "cpDichVu": 2732970,
        "cpTong": 0,
        "totalData": 16,
        "dataChatLuong": 16,
        "services": [
          {
            "name": "Implant",
            "cp": 2732970,
            "dataCount": 3
          },
          {
            "name": "Niềng",
            "cp": 0,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 4351984,
            "dataCount": 8
          },
          {
            "name": "Sứ",
            "cp": 1686076,
            "dataCount": 3
          }
        ]
      },
      {
        "name": "Biên Hòa",
        "costVAT": 39951401,
        "revenue": 413549000,
        "cpDichVu": 13383728,
        "cpTong": 0,
        "totalData": 76,
        "dataChatLuong": 76,
        "services": [
          {
            "name": "Implant",
            "cp": 13383728,
            "dataCount": 10
          },
          {
            "name": "Niềng",
            "cp": 6492146,
            "dataCount": 19
          },
          {
            "name": "Sứ",
            "cp": 12961681,
            "dataCount": 11
          },
          {
            "name": "TH",
            "cp": 7130585,
            "dataCount": 39
          }
        ]
      },
      {
        "name": "Cần Thơ",
        "costVAT": 58363444,
        "revenue": 268819000,
        "cpDichVu": 17944032,
        "cpTong": 0,
        "totalData": 66,
        "dataChatLuong": 66,
        "services": [
          {
            "name": "TH",
            "cp": 17944032,
            "dataCount": 42
          },
          {
            "name": "Implant",
            "cp": 19273059,
            "dataCount": 12
          },
          {
            "name": "Niềng",
            "cp": 6635641,
            "dataCount": 10
          },
          {
            "name": "Sứ",
            "cp": 15370717,
            "dataCount": 9
          }
        ]
      },
      {
        "name": "Đà Nẵng",
        "costVAT": 32786091,
        "revenue": 457650000,
        "cpDichVu": 14616754,
        "cpTong": 0,
        "totalData": 46,
        "dataChatLuong": 46,
        "services": [
          {
            "name": "Implant",
            "cp": 14616754,
            "dataCount": 13
          },
          {
            "name": "Niềng",
            "cp": 1101855,
            "dataCount": 11
          },
          {
            "name": "Sứ",
            "cp": 10173952,
            "dataCount": 5
          },
          {
            "name": "TH",
            "cp": 7039339,
            "dataCount": 22
          }
        ]
      },
      {
        "name": "Quy Nhơn",
        "costVAT": 22339621,
        "revenue": 249220000,
        "cpDichVu": 7372725,
        "cpTong": 0,
        "totalData": 42,
        "dataChatLuong": 42,
        "services": [
          {
            "name": "Implant",
            "cp": 7372725,
            "dataCount": 11
          },
          {
            "name": "Niềng",
            "cp": 5014060,
            "dataCount": 3
          },
          {
            "name": "Sứ",
            "cp": 6163760,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 3748245,
            "dataCount": 31
          }
        ]
      },
      {
        "name": "Tây Ninh",
        "costVAT": 30629595,
        "revenue": 44500000,
        "cpDichVu": 10616745,
        "cpTong": 0,
        "totalData": 33,
        "dataChatLuong": 33,
        "services": [
          {
            "name": "Implant",
            "cp": 10616745,
            "dataCount": 6
          },
          {
            "name": "Niềng",
            "cp": 2447741,
            "dataCount": 5
          },
          {
            "name": "Sứ",
            "cp": 12204672,
            "dataCount": 8
          },
          {
            "name": "TH",
            "cp": 5322032,
            "dataCount": 17
          }
        ]
      },
      {
        "name": "Vũng Tàu",
        "costVAT": 22672091,
        "revenue": 467800000,
        "cpDichVu": 9715282,
        "cpTong": 0,
        "totalData": 93,
        "dataChatLuong": 93,
        "services": [
          {
            "name": "Implant",
            "cp": 9715282,
            "dataCount": 12
          },
          {
            "name": "Niềng",
            "cp": 2172417,
            "dataCount": 16
          },
          {
            "name": "Sứ",
            "cp": 6397980,
            "dataCount": 14
          },
          {
            "name": "TH",
            "cp": 4349762,
            "dataCount": 65
          }
        ]
      },
      {
        "name": "Dĩ An",
        "costVAT": 15490678,
        "revenue": 59500000,
        "cpDichVu": 6536360,
        "cpTong": 0,
        "totalData": 47,
        "dataChatLuong": 47,
        "services": [
          {
            "name": "Implant",
            "cp": 6536360,
            "dataCount": 3
          },
          {
            "name": "Niềng",
            "cp": 1942688,
            "dataCount": 9
          },
          {
            "name": "Sứ",
            "cp": 4495877,
            "dataCount": 9
          },
          {
            "name": "TH",
            "cp": 2505475,
            "dataCount": 29
          }
        ]
      },
      {
        "name": "HCM",
        "costVAT": 734154173,
        "revenue": 3754820000,
        "cpDichVu": 282000390,
        "cpTong": 0,
        "totalData": 1043,
        "dataChatLuong": 1043,
        "services": [
          {
            "name": "HCM-Imp",
            "cp": 282000390,
            "dataCount": 142
          },
          {
            "name": "HCM-Niềng",
            "cp": 42397721,
            "dataCount": 144
          },
          {
            "name": "HCM-Sứ",
            "cp": 189543254,
            "dataCount": 114
          },
          {
            "name": "HCM-TH",
            "cp": 219015985,
            "dataCount": 766
          }
        ]
      },
      {
        "name": "Việt Kiều",
        "costVAT": 153909066,
        "revenue": 566800000,
        "cpDichVu": 153827090,
        "cpTong": 0,
        "totalData": 61,
        "dataChatLuong": 61,
        "services": [
          {
            "name": "Việt Kiều",
            "cp": 153827090,
            "dataCount": 68
          }
        ]
      },
      {
        "name": "Bạc Liêu",
        "costVAT": 8819903,
        "revenue": 228350000,
        "cpDichVu": 1665167,
        "cpTong": 0,
        "totalData": 22,
        "dataChatLuong": 22,
        "services": [
          {
            "name": "Implant",
            "cp": 1665167,
            "dataCount": 2
          },
          {
            "name": "Niềng",
            "cp": 2532786,
            "dataCount": 3
          },
          {
            "name": "Sứ",
            "cp": 1598008,
            "dataCount": 5
          },
          {
            "name": "TH",
            "cp": 3094209,
            "dataCount": 13
          }
        ]
      },
      {
        "name": "Cà Mau",
        "costVAT": 20643988,
        "revenue": 96070000,
        "cpDichVu": 3596850,
        "cpTong": 0,
        "totalData": 24,
        "dataChatLuong": 24,
        "services": [
          {
            "name": "Implant",
            "cp": 3596850,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 7191864,
            "dataCount": 4
          },
          {
            "name": "Sứ",
            "cp": 6340314,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 3527943,
            "dataCount": 15
          }
        ]
      },
      {
        "name": "Đồng Tháp",
        "costVAT": 14770423,
        "revenue": 142200000,
        "cpDichVu": 6563133,
        "cpTong": 0,
        "totalData": 17,
        "dataChatLuong": 17,
        "services": [
          {
            "name": "Implant",
            "cp": 6563133,
            "dataCount": 3
          },
          {
            "name": "Niềng",
            "cp": 2879558,
            "dataCount": 6
          },
          {
            "name": "Sứ",
            "cp": 3712167,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 1607651,
            "dataCount": 8
          }
        ]
      },
      {
        "name": "Sóc Trăng",
        "costVAT": 12268889,
        "revenue": 88429000,
        "cpDichVu": 2741487,
        "cpTong": 0,
        "totalData": 14,
        "dataChatLuong": 14,
        "services": [
          {
            "name": "Implant",
            "cp": 2741487,
            "dataCount": 2
          },
          {
            "name": "Niềng",
            "cp": 3876906,
            "dataCount": 2
          },
          {
            "name": "Sứ",
            "cp": 2566093,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 2934704,
            "dataCount": 7
          }
        ]
      },
      {
        "name": "Đà Lạt",
        "costVAT": 21111233,
        "revenue": 10150000,
        "cpDichVu": 4949087,
        "cpTong": 0,
        "totalData": 36,
        "dataChatLuong": 36,
        "services": [
          {
            "name": "Implant",
            "cp": 4949087,
            "dataCount": 6
          },
          {
            "name": "Niềng",
            "cp": 9278138,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 2545355,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 4275240,
            "dataCount": 22
          }
        ]
      },
      {
        "name": "Gia Kiệm",
        "costVAT": 8840522,
        "revenue": 7100000,
        "cpDichVu": 1383300,
        "cpTong": 0,
        "totalData": 4,
        "dataChatLuong": 4,
        "services": [
          {
            "name": "Implant",
            "cp": 1383300,
            "dataCount": 0
          },
          {
            "name": "Niềng",
            "cp": 1823222,
            "dataCount": 0
          },
          {
            "name": "Sứ",
            "cp": 2109340,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 3530578,
            "dataCount": 2
          }
        ]
      },
      {
        "name": "Không Địa Chỉ",
        "costVAT": 0,
        "revenue": 0,
        "cpDichVu": 0,
        "cpTong": 0,
        "totalData": 506,
        "dataChatLuong": 506,
        "services": [
          {
            "name": "Implant",
            "cp": 0,
            "dataCount": 21
          },
          {
            "name": "Niềng",
            "cp": 0,
            "dataCount": 35
          },
          {
            "name": "Sứ",
            "cp": 0,
            "dataCount": 20
          },
          {
            "name": "TH",
            "cp": 0,
            "dataCount": 444
          }
        ]
      }
    ]
  },
  {
    "month": 6,
    "label": "Tháng 6",
    "regions": [
      {
        "name": "Bình Dương",
        "costVAT": 30103289,
        "revenue": 521012000,
        "cpDichVu": 13402365,
        "cpTong": 0,
        "totalData": 84,
        "dataChatLuong": 84,
        "services": [
          {
            "name": "Implant",
            "cp": 13402365,
            "dataCount": 11
          },
          {
            "name": "Niềng",
            "cp": 145704,
            "dataCount": 18
          },
          {
            "name": "Sứ",
            "cp": 11236402,
            "dataCount": 13
          },
          {
            "name": "TH",
            "cp": 5318817,
            "dataCount": 56
          }
        ]
      },
      {
        "name": "Bình Phước",
        "costVAT": 8441639,
        "revenue": 5500000,
        "cpDichVu": 1877689,
        "cpTong": 0,
        "totalData": 22,
        "dataChatLuong": 22,
        "services": [
          {
            "name": "Implant",
            "cp": 1877689,
            "dataCount": 2
          },
          {
            "name": "Niềng",
            "cp": 0,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 5687180,
            "dataCount": 12
          },
          {
            "name": "Sứ",
            "cp": 876770,
            "dataCount": 6
          }
        ]
      },
      {
        "name": "Biên Hòa",
        "costVAT": 37553754,
        "revenue": 494100000,
        "cpDichVu": 14632103,
        "cpTong": 0,
        "totalData": 65,
        "dataChatLuong": 65,
        "services": [
          {
            "name": "Implant",
            "cp": 14632103,
            "dataCount": 11
          },
          {
            "name": "Niềng",
            "cp": 1429384,
            "dataCount": 14
          },
          {
            "name": "Sứ",
            "cp": 14398028,
            "dataCount": 13
          },
          {
            "name": "TH",
            "cp": 7094240,
            "dataCount": 31
          }
        ]
      },
      {
        "name": "Cần Thơ",
        "costVAT": 58914171,
        "revenue": 351009000,
        "cpDichVu": 23767963,
        "cpTong": 0,
        "totalData": 66,
        "dataChatLuong": 66,
        "services": [
          {
            "name": "TH",
            "cp": 23767963,
            "dataCount": 57
          },
          {
            "name": "Implant",
            "cp": 18455812,
            "dataCount": 9
          },
          {
            "name": "Niềng",
            "cp": 861333,
            "dataCount": 9
          },
          {
            "name": "Sứ",
            "cp": 15829064,
            "dataCount": 12
          }
        ]
      },
      {
        "name": "Đà Nẵng",
        "costVAT": 28887373,
        "revenue": 260120000,
        "cpDichVu": 14947597,
        "cpTong": 0,
        "totalData": 55,
        "dataChatLuong": 55,
        "services": [
          {
            "name": "Implant",
            "cp": 14947597,
            "dataCount": 13
          },
          {
            "name": "Niềng",
            "cp": 33537,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 9473446,
            "dataCount": 8
          },
          {
            "name": "TH",
            "cp": 4432792,
            "dataCount": 36
          }
        ]
      },
      {
        "name": "Quy Nhơn",
        "costVAT": 18974996,
        "revenue": 207300000,
        "cpDichVu": 6962398,
        "cpTong": 0,
        "totalData": 38,
        "dataChatLuong": 38,
        "services": [
          {
            "name": "Implant",
            "cp": 6962398,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 933910,
            "dataCount": 1
          },
          {
            "name": "Sứ",
            "cp": 6568332,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 4510357,
            "dataCount": 36
          }
        ]
      },
      {
        "name": "Tây Ninh",
        "costVAT": 35340653,
        "revenue": 384720000,
        "cpDichVu": 13572102,
        "cpTong": 0,
        "totalData": 46,
        "dataChatLuong": 46,
        "services": [
          {
            "name": "Implant",
            "cp": 13572102,
            "dataCount": 3
          },
          {
            "name": "Niềng",
            "cp": 209706,
            "dataCount": 6
          },
          {
            "name": "Sứ",
            "cp": 14520517,
            "dataCount": 4
          },
          {
            "name": "TH",
            "cp": 7038328,
            "dataCount": 40
          }
        ]
      },
      {
        "name": "Vũng Tàu",
        "costVAT": 24161758,
        "revenue": 495120000,
        "cpDichVu": 7495783,
        "cpTong": 0,
        "totalData": 104,
        "dataChatLuong": 104,
        "services": [
          {
            "name": "Implant",
            "cp": 7495783,
            "dataCount": 15
          },
          {
            "name": "Niềng",
            "cp": 181385,
            "dataCount": 23
          },
          {
            "name": "Sứ",
            "cp": 11655342,
            "dataCount": 14
          },
          {
            "name": "TH",
            "cp": 4829248,
            "dataCount": 66
          }
        ]
      },
      {
        "name": "Dĩ An",
        "costVAT": 12375436,
        "revenue": 318110000,
        "cpDichVu": 4750151,
        "cpTong": 0,
        "totalData": 44,
        "dataChatLuong": 44,
        "services": [
          {
            "name": "Implant",
            "cp": 4750151,
            "dataCount": 5
          },
          {
            "name": "Niềng",
            "cp": 177934,
            "dataCount": 6
          },
          {
            "name": "Sứ",
            "cp": 4311789,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 3135562,
            "dataCount": 38
          }
        ]
      },
      {
        "name": "HCM",
        "costVAT": 673841377,
        "revenue": 3794528000,
        "cpDichVu": 262557514,
        "cpTong": 0,
        "totalData": 1069,
        "dataChatLuong": 1069,
        "services": [
          {
            "name": "HCM-Imp",
            "cp": 262557514,
            "dataCount": 141
          },
          {
            "name": "HCM-Niềng",
            "cp": 16166565,
            "dataCount": 168
          },
          {
            "name": "HCM-Sứ",
            "cp": 207296104,
            "dataCount": 156
          },
          {
            "name": "HCM-TH",
            "cp": 187821194,
            "dataCount": 791
          }
        ]
      },
      {
        "name": "Việt Kiều",
        "costVAT": 139846215,
        "revenue": 579500000,
        "cpDichVu": 139846215,
        "cpTong": 0,
        "totalData": 43,
        "dataChatLuong": 43,
        "services": [
          {
            "name": "Việt Kiều",
            "cp": 139846215,
            "dataCount": 55
          }
        ]
      },
      {
        "name": "Bạc Liêu",
        "costVAT": 3371608,
        "revenue": 53200000,
        "cpDichVu": 691061,
        "cpTong": 0,
        "totalData": 15,
        "dataChatLuong": 15,
        "services": [
          {
            "name": "Implant",
            "cp": 691061,
            "dataCount": 3
          },
          {
            "name": "Niềng",
            "cp": 53975,
            "dataCount": 1
          },
          {
            "name": "Sứ",
            "cp": 438702,
            "dataCount": 6
          },
          {
            "name": "TH",
            "cp": 2187870,
            "dataCount": 10
          }
        ]
      },
      {
        "name": "Cà Mau",
        "costVAT": 18990079,
        "revenue": 126018000,
        "cpDichVu": 6524249,
        "cpTong": 0,
        "totalData": 47,
        "dataChatLuong": 47,
        "services": [
          {
            "name": "Implant",
            "cp": 6524249,
            "dataCount": 11
          },
          {
            "name": "Niềng",
            "cp": 1033820,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 3716928,
            "dataCount": 7
          },
          {
            "name": "TH",
            "cp": 7715082,
            "dataCount": 31
          }
        ]
      },
      {
        "name": "Đồng Tháp",
        "costVAT": 9040293,
        "revenue": 48200000,
        "cpDichVu": 3816808,
        "cpTong": 0,
        "totalData": 26,
        "dataChatLuong": 26,
        "services": [
          {
            "name": "Implant",
            "cp": 3816808,
            "dataCount": 2
          },
          {
            "name": "Niềng",
            "cp": 1530228,
            "dataCount": 7
          },
          {
            "name": "Sứ",
            "cp": 1877513,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 1815745,
            "dataCount": 20
          }
        ]
      },
      {
        "name": "Sóc Trăng",
        "costVAT": 5833995,
        "revenue": 53380000,
        "cpDichVu": 448915,
        "cpTong": 0,
        "totalData": 13,
        "dataChatLuong": 13,
        "services": [
          {
            "name": "Implant",
            "cp": 448915,
            "dataCount": 3
          },
          {
            "name": "Niềng",
            "cp": 735828,
            "dataCount": 0
          },
          {
            "name": "Sứ",
            "cp": 231908,
            "dataCount": 3
          },
          {
            "name": "TH",
            "cp": 4417346,
            "dataCount": 7
          }
        ]
      },
      {
        "name": "Đà Lạt",
        "costVAT": 21275290,
        "revenue": 359370000,
        "cpDichVu": 10752226,
        "cpTong": 0,
        "totalData": 44,
        "dataChatLuong": 44,
        "services": [
          {
            "name": "Implant",
            "cp": 10752226,
            "dataCount": 4
          },
          {
            "name": "Niềng",
            "cp": 140078,
            "dataCount": 10
          },
          {
            "name": "Sứ",
            "cp": 4516186,
            "dataCount": 7
          },
          {
            "name": "TH",
            "cp": 5866800,
            "dataCount": 29
          }
        ]
      },
      {
        "name": "Gia Kiệm",
        "costVAT": 7109540,
        "revenue": 91640000,
        "cpDichVu": 2781455,
        "cpTong": 0,
        "totalData": 13,
        "dataChatLuong": 13,
        "services": [
          {
            "name": "Implant",
            "cp": 2781455,
            "dataCount": 2
          },
          {
            "name": "Niềng",
            "cp": 56909,
            "dataCount": 1
          },
          {
            "name": "Sứ",
            "cp": 2255357,
            "dataCount": 2
          },
          {
            "name": "TH",
            "cp": 2015820,
            "dataCount": 8
          }
        ]
      },
      {
        "name": "Không Địa Chỉ",
        "costVAT": 0,
        "revenue": 0,
        "cpDichVu": 0,
        "cpTong": 0,
        "totalData": 562,
        "dataChatLuong": 562,
        "services": [
          {
            "name": "Implant",
            "cp": 0,
            "dataCount": 18
          },
          {
            "name": "Niềng",
            "cp": 0,
            "dataCount": 34
          },
          {
            "name": "Sứ",
            "cp": 0,
            "dataCount": 21
          },
          {
            "name": "TH",
            "cp": 0,
            "dataCount": 498
          }
        ]
      }
    ]
  },
  {
    "month": 7,
    "label": "Tháng 7",
    "regions": [
      {
        "name": "Bình Dương",
        "costVAT": 32150000,
        "revenue": 545000000,
        "cpDichVu": 14200000,
        "cpTong": 0,
        "totalData": 88,
        "dataChatLuong": 85,
        "services": [
          { "name": "Implant", "cp": 14200000, "dataCount": 12 },
          { "name": "Niềng", "cp": 200000, "dataCount": 20 },
          { "name": "Sứ", "cp": 12100000, "dataCount": 14 },
          { "name": "TH", "cp": 5650000, "dataCount": 58 }
        ]
      },
      {
        "name": "Bình Phước",
        "costVAT": 9100000,
        "revenue": 62000000,
        "cpDichVu": 2100000,
        "cpTong": 0,
        "totalData": 24,
        "dataChatLuong": 22,
        "services": [
          { "name": "Implant", "cp": 2100000, "dataCount": 3 },
          { "name": "Niềng", "cp": 150000, "dataCount": 5 },
          { "name": "Sứ", "cp": 3500000, "dataCount": 4 },
          { "name": "TH", "cp": 3350000, "dataCount": 12 }
        ]
      },
      {
        "name": "Biên Hòa",
        "costVAT": 38500000,
        "revenue": 480000000,
        "cpDichVu": 17800000,
        "cpTong": 0,
        "totalData": 72,
        "dataChatLuong": 68,
        "services": [
          { "name": "Implant", "cp": 17800000, "dataCount": 10 },
          { "name": "Niềng", "cp": 450000, "dataCount": 15 },
          { "name": "Sứ", "cp": 11200000, "dataCount": 11 },
          { "name": "TH", "cp": 9050000, "dataCount": 36 }
        ]
      },
      {
        "name": "Cần Thơ",
        "costVAT": 42100000,
        "revenue": 260000000,
        "cpDichVu": 18500000,
        "cpTong": 0,
        "totalData": 82,
        "dataChatLuong": 75,
        "services": [
          { "name": "Implant", "cp": 18500000, "dataCount": 14 },
          { "name": "Niềng", "cp": 350000, "dataCount": 18 },
          { "name": "Sứ", "cp": 12800000, "dataCount": 12 },
          { "name": "TH", "cp": 10450000, "dataCount": 38 }
        ]
      },
      {
        "name": "Tây Ninh",
        "costVAT": 37800000,
        "revenue": 285000000,
        "cpDichVu": 16200000,
        "cpTong": 0,
        "totalData": 60,
        "dataChatLuong": 58,
        "services": [
          { "name": "Implant", "cp": 16200000, "dataCount": 9 },
          { "name": "Niềng", "cp": 280000, "dataCount": 12 },
          { "name": "Sứ", "cp": 11500000, "dataCount": 10 },
          { "name": "TH", "cp": 9820000, "dataCount": 29 }
        ]
      },
      {
        "name": "Mỹ Tho",
        "costVAT": 39500000,
        "revenue": 310000000,
        "cpDichVu": 17100000,
        "cpTong": 0,
        "totalData": 68,
        "dataChatLuong": 64,
        "services": [
          { "name": "Implant", "cp": 17100000, "dataCount": 11 },
          { "name": "Niềng", "cp": 310000, "dataCount": 14 },
          { "name": "Sứ", "cp": 11800000, "dataCount": 11 },
          { "name": "TH", "cp": 10290000, "dataCount": 32 }
        ]
      },
      {
        "name": "Bến Tre",
        "costVAT": 36200000,
        "revenue": 290000000,
        "cpDichVu": 15800000,
        "cpTong": 0,
        "totalData": 58,
        "dataChatLuong": 55,
        "services": [
          { "name": "Implant", "cp": 15800000, "dataCount": 8 },
          { "name": "Niềng", "cp": 260000, "dataCount": 11 },
          { "name": "Sứ", "cp": 10900000, "dataCount": 9 },
          { "name": "TH", "cp": 9240000, "dataCount": 30 }
        ]
      },
      {
        "name": "Vũng Tàu",
        "costVAT": 29800000,
        "revenue": 395000000,
        "cpDichVu": 12900000,
        "cpTong": 0,
        "totalData": 80,
        "dataChatLuong": 76,
        "services": [
          { "name": "Implant", "cp": 12900000, "dataCount": 12 },
          { "name": "Niềng", "cp": 290000, "dataCount": 16 },
          { "name": "Sứ", "cp": 9800000, "dataCount": 14 },
          { "name": "TH", "cp": 6810000, "dataCount": 38 }
        ]
      },
      {
        "name": "Rạch Giá",
        "costVAT": 34100000,
        "revenue": 275000000,
        "cpDichVu": 14900000,
        "cpTong": 0,
        "totalData": 52,
        "dataChatLuong": 49,
        "services": [
          { "name": "Implant", "cp": 14900000, "dataCount": 7 },
          { "name": "Niềng", "cp": 220000, "dataCount": 10 },
          { "name": "Sứ", "cp": 10200000, "dataCount": 8 },
          { "name": "TH", "cp": 8780000, "dataCount": 27 }
        ]
      },
      {
        "name": "HCM",
        "costVAT": 625000000,
        "revenue": 5200000000,
        "cpDichVu": 215000000,
        "cpTong": 0,
        "totalData": 1100,
        "dataChatLuong": 1050,
        "services": [
          { "name": "HCM-Imp", "cp": 215000000, "dataCount": 95 },
          { "name": "HCM-Niềng", "cp": 105000000, "dataCount": 105 },
          { "name": "HCM-Sứ", "cp": 112000000, "dataCount": 120 },
          { "name": "HCM-TH", "cp": 193000000, "dataCount": 780 }
        ]
      },
      {
        "name": "Việt Kiều",
        "costVAT": 135000000,
        "revenue": 620000000,
        "cpDichVu": 85000000,
        "cpTong": 0,
        "totalData": 48,
        "dataChatLuong": 45,
        "services": [
          { "name": "Việt Kiều", "cp": 85000000, "dataCount": 48 }
        ]
      },
      {
        "name": "Đà Nẵng",
        "costVAT": 26800000,
        "revenue": 320000000,
        "cpDichVu": 11500000,
        "cpTong": 0,
        "totalData": 48,
        "dataChatLuong": 46,
        "services": [
          { "name": "Implant", "cp": 11500000, "dataCount": 6 },
          { "name": "Niềng", "cp": 180000, "dataCount": 9 },
          { "name": "Sứ", "cp": 8200000, "dataCount": 8 },
          { "name": "TH", "cp": 6920000, "dataCount": 25 }
        ]
      },
      {
        "name": "Nha Trang",
        "costVAT": 24500000,
        "revenue": 295000000,
        "cpDichVu": 10800000,
        "cpTong": 0,
        "totalData": 42,
        "dataChatLuong": 40,
        "services": [
          { "name": "Implant", "cp": 10800000, "dataCount": 5 },
          { "name": "Niềng", "cp": 160000, "dataCount": 8 },
          { "name": "Sứ", "cp": 7600000, "dataCount": 7 },
          { "name": "TH", "cp": 5940000, "dataCount": 22 }
        ]
      },
      {
        "name": "Đà Lạt",
        "costVAT": 22800000,
        "revenue": 375000000,
        "cpDichVu": 11200000,
        "cpTong": 0,
        "totalData": 46,
        "dataChatLuong": 44,
        "services": [
          { "name": "Implant", "cp": 11200000, "dataCount": 5 },
          { "name": "Niềng", "cp": 150000, "dataCount": 10 },
          { "name": "Sứ", "cp": 4800000, "dataCount": 8 },
          { "name": "TH", "cp": 6650000, "dataCount": 23 }
        ]
      },
      {
        "name": "Gia Kiệm",
        "costVAT": 7800000,
        "revenue": 98000000,
        "cpDichVu": 2900000,
        "cpTong": 0,
        "totalData": 15,
        "dataChatLuong": 14,
        "services": [
          { "name": "Implant", "cp": 2900000, "dataCount": 3 },
          { "name": "Niềng", "cp": 60000, "dataCount": 2 },
          { "name": "Sứ", "cp": 2400000, "dataCount": 3 },
          { "name": "TH", "cp": 2440000, "dataCount": 7 }
        ]
      },
      {
        "name": "Không Địa Chỉ",
        "costVAT": 0,
        "revenue": 0,
        "cpDichVu": 0,
        "cpTong": 0,
        "totalData": 580,
        "dataChatLuong": 550,
        "services": [
          { "name": "Implant", "cp": 0, "dataCount": 20 },
          { "name": "Niềng", "cp": 0, "dataCount": 38 },
          { "name": "Sứ", "cp": 0, "dataCount": 24 },
          { "name": "TH", "cp": 0, "dataCount": 498 }
        ]
      }
    ]
  }
];
