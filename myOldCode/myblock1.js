Blockly.defineBlocksWithJsonArray(
  [{
    "type": "setdata1",
    "message0": "データ(昔)を設定する %1 項目： %2 地域： %3 時期： %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "v1",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "v2",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "v3",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 200,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "setdata2",
    "message0": "データ（今）を設定する %1 項目： %2 地域： %3 時期： %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "v1",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "v2",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "v3",
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "kion",
    "message0": "年平均気温",
    "inputsInline": false,
    "output": "String",
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "tukikion",
    "message0": "最寒月平均気温",
    "inputsInline": false,
    "output": "String",
    "colour": 345,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "hokkaido",
    "message0": "北海道",
    "inputsInline": false,
    "output": "String",
    "colour": 75,
    "tooltip": "",
    "helpUrl": ""
  },
  {
  "type": "timefromto",
  "message0": "%1 %2 %3 ～ %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "time",
      "options": [
        [
          "past",
          "past"
        ],
        [
          "now",
          "now"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Array",
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
  },
  {
    "type": "visualizedata",
    "message0": "データをみる %1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "time",
        "options": [
          [
            "データ（昔）",
            "past"
          ],
          [
            "データ（今）",
            "now"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "view",
        "options": [
          [
            "折れ線グラフ",
            "LineChart"
          ],
          [
            "円グラフ",
            "PieChart"
          ],
          [
            "棒グラフ",
            "BarChart"
          ],
          [
            "散布図",
            "ScatterChart"
          ]
        ]
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "getdata",
    "message0": "データを取得する",
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "compare1",
    "message0": "%1 %2 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "v1"
      },
      {
        "type": "input_value",
        "name": "v2"
      },
      {
        "type": "input_value",
        "name": "v3"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "timefromto",
    "message0": "%1 %2 %3 ～ %4",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "time",
        "options": [
          [
            "past",
            "past"
          ],
          [
            "now",
            "now"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "v1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "v2",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": "Array",
    "colour": 270,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "condition",
    "message0": "%1 <X< %2",
    "args0": [
      {
        "type": "input_value",
        "name": "v1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "v2",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 270,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "number",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "2000"
      }
    ],
    "inputsInline": true,
    "output": "Number",
    "colour": 195,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "hypothesis",
    "message0": "仮説の設定 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "hypothesisft",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "-仮説-"
      }
    ],
    "output": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "objset",
    "message0": "データ名： %1 %2 時期： %3 %4 絞り込み： %5 %6 %7",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "オプション",
            "v"
          ],
          [
            "個数",
            "n"
          ],
          [
            "平均値",
            "a"
          ],
          [
            "合計",
            "s"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 315,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "hyg",
    "message0": "仮説の詳細 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "area",
    "message0": "%1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "北海道",
            "'01000'"
          ],
          [
            "青森県",
            "'02000'"
          ],
          [
            "秋田県",
            "'03000'"
          ],
          [
            "岩手県",
            "'04000'"
          ], 
          [
            "宮城県",
            "'05000'"
          ],
          [
            "山形県",
            "'06000'"
          ],
          [
            "福島県",
            "'07000'"
          ],
          [
            "option",
            "OPTIONNAME"
          ],
          [
            "option",
            "OPTIONNAME"
          ],
          [
            "option",
            "OPTIONNAME"
          ],
        ]
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "setdata",
    "message0": "SETDATA %1 name: %2 raw： %3 area： %4 time： %5 %6 %7 filter: %8",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "name",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "raw",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "area",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "time",
        "check": "Array",
        "align": "RIGHT"
      },
      {
        "type": "field_dropdown",
        "name": "stats",
        "options": [
          [
            "array",
            "array"
          ],
          [
            "count",
            "count"
          ],
          [
            "average",
            "average"
          ],
          [
            "sum",
            "sum"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "filter"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]
)

function getdropdown(){

}
Blockly.JavaScript['setdata1'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name3 = Blockly.JavaScript.valueToCode(block, 'v3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='let idcode_past='+value_name1+';\n'+'let areacode_past='+value_name2+';\n'+value_name3+'const data_past=getData(idcode_past,areacode_past,TimeFrom_past,TimeTo_past,"$");\n'+'const time_past=getData(idcode_past,areacode_past,TimeFrom_past,TimeTo_past,"@time");\n'
  return code;
};

Blockly.JavaScript['setdata2'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name3 = Blockly.JavaScript.valueToCode(block, 'v3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='let idcode_now='+value_name1+';\n'+'let areacode_now='+value_name2+';\n'+value_name3
  return code;
};

Blockly.JavaScript['kion'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "'0102010000000010010'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['tukikion'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "'0102010000000010030'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['hokkaido'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "'01000'";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['visualizedata'] = function(block) {
  var dropdown_time = block.getFieldValue('time');
  var dropdown_view = block.getFieldValue('view');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Visualize(idcode_'+dropdown_time+',areacode_'+dropdown_time+',TimeFrom_'+dropdown_time+',TimeTo_'+dropdown_time+',"'+dropdown_view+'");';
  return code;
};

Blockly.JavaScript['getdata'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "const array=getData(idcode,areacode,TimeFrom,TimeTo,'$');\n";
  return code;
};

Blockly.JavaScript['compare1'] = function(block) {
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v3 = Blockly.JavaScript.valueToCode(block, 'v3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
// Blockly.JavaScript['timefromto'] = function(block) {
//   var dropdown_time = block.getFieldValue('time');
//   var value_name1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_name2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
//   var obj={
//     dropdown_time:dropdown_time,
//     v1:value_name1,
//     v2:value_name2
//   }
//   // TODO: Assemble JavaScript into code variable.
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [obj,Blockly.JavaScript.ORDER_ATOMIC];
// };

Blockly.JavaScript['timefromto'] = function(block) {
  var dropdown_time = block.getFieldValue('time');
  var value_past = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_now = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'let TimeFrom_'+dropdown_time+'='+value_past+';\n'+'let TimeTo_'+dropdown_time+'='+value_now+';\n'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Blockly.JavaScript['timefromto'] = function(block) {
//   var value_name1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_name2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = 'let TimeFrom='+value_name1+';\n'+'let TimeTo='+value_name2+';\n'
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

Blockly.JavaScript['condition'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name1+'<'+'x&x<'+value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['number'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['hypothesis'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['hypothesisft'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['objset'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['hyg'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['area'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['setdata'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_raw = Blockly.JavaScript.valueToCode(block, 'raw', Blockly.JavaScript.ORDER_ATOMIC);
  var value_area = Blockly.JavaScript.valueToCode(block, 'area', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_stats = block.getFieldValue('stats');
  var value_filter = Blockly.JavaScript.valueToCode(block, 'filter', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};