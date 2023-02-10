let count=2;
function doCode(num){
  //ブロックからプログラム（文字列）を作成
  hum=num;
  eval("var code = Blockly.JavaScript.workspaceToCode(workspace"+num+");");
  //プログラムを実行
  try{
    eval(code);
  }
  catch(e){
    alert(e);
  }
}
function addWorkspace(){
  let nstr=count.toString();
  d3.select("#room").append("div").attr("id", "desk"+nstr).attr("class", "desk");
  d3.select("#desk"+nstr).append("input").attr("type", "text").attr("id", "t"+nstr).attr("class", "title").attr("size", "50").attr("placeholder","title");
  d3.select("#desk"+nstr).append("div").attr("id", "blocklyDiv"+nstr).attr("class", "blocklyDiv").attr("style","height: 300px;");
  d3.select("#desk"+nstr).append("textarea").attr("id", "codebox"+nstr).attr("class", "codebox").attr("style","height: 100px;");
  d3.select("#desk"+nstr).append("button").attr("id", "b"+nstr).attr("class", "arrow enBtn").attr("onclick","doCode("+nstr+")");
  // d3.select("#desk"+nstr).append("input").attr("type", "button").attr("value", "+").attr("class", "plus").attr("onclick", "addWorkspace()");
  d3.select("#desk"+nstr).append("button").attr("id", "btc"+nstr).attr("class", "copyB").attr("onclick","copyW("+nstr+")").text("Copy");
  d3.select("#desk"+nstr).append("button").attr("id", "btp"+nstr).attr("class", "pasteB").attr("onclick","pasteW("+nstr+")").text("診断");
  d3.select("#desk"+nstr).append("div").attr("id", "consolearea"+nstr).attr("class", "consolearea");
  //divタグとtextareaタグとbuttonタグを挿入
  eval("workspace"+nstr+"=Blockly.inject('blocklyDiv"+nstr+"',{toolbox: document.getElementById('toolbox'),theme: Blockly.Themes.Argentina});");
 eval("workspace"+nstr+".addChangeListener(function() {const codebox = document.getElementById('codebox"+nstr+"');const code = Blockly.JavaScript.workspaceToCode(workspace"+nstr+");codebox.value = code;});");
 eval("workspace"+count+".registerToolboxCategoryCallback('COLOUR_PALETTE', RirekiCallback);") 
 //addChangeListener
  count++;
}

let coppiedBlock=null;

const copyW=(num)=>{
  eval("coppiedBlock=Blockly.Xml.workspaceToDom(workspace"+num+");");
  BlockText=Blockly.Xml.domToPrettyText(coppiedBlock);
  console.log(BlockText);
 
}



const pasteW=(num)=>{
  $('#checkarea').children().remove();
  // eval("targetBlock=Blockly.Xml.workspaceToDom(workspace"+num+");");
  // let BlockText=Blockly.Xml.domToPrettyText(targetBlock);
  //sindan(num,"親ブロック","子ブロック"); 親ブロックの中に子ブロックがあるか判断．なければtrueを返す
  let f1=sindan0(num,"tv");
  let f2=sindan0(num,"_2t1");
  let f3=sindan0(num,"_2t2");
  let f4=sindan0(num,"_2t3");
  let f5=sindan0(num,"_3t1");
  let f6=sindan0(num,"_3t2");
  let fs=[f1,f2,f3,f4,f5,f6];
  let fl1=sindan2(num,"root");
  let fl2=sindan2(num,"s210");
  let fl3=sindan2(num,"s211");
  let fl4=sindan2(num,"s213");
  let fl5=sindan2(num,"s220");
  let fl6=sindan2(num,"s221");
  let fl7=sindan2(num,"s223");
  let fl8=sindan2(num,"s230");
  let fl9=sindan2(num,"s231");
  let fl10=sindan2(num,"s233");
  let fl11=sindan2(num,"s310");
  let fl12=sindan2(num,"s311");
  let fl13=sindan2(num,"s313");
  let fl14=sindan2(num,"s320");
  let fl15=sindan2(num,"s321");
  let fl16=sindan2(num,"s323");

  // if(sindan2(num,rulearray[i])){
    
  // }

  // else{

  // }

  // let flag1=sindan1(num,"tv","_2t1");
  // let flag2=sindan1(num,"tv","_2t2");
  // let flag3=sindan1(num,"tv","_2t3");
  // let flag4=sindan1(num,"_2t1","_3t1");
  // let flag5=sindan1(num,"_2t1","_3t2");
  // let flag6=sindan1(num,"","");
  // let flags=[flag1,flag2,flag3,flag4,flag5];
  let flagRelation={};
  let k1="テレビの売れ行きが減少した";
  let k2="テレビを見る人が減少した";
  let k3="テレビの価格が高くなった";
  let k4="テレビを持たない一人暮らしの世帯が増加した";
  let k5="テレビの番組の人気がない";
  let k6="ネットの利用が増加した";
  let relation=[[k1,k2],[k1,k3],[k1,k4],[k2,k5],[k2,k6]];

  let d1="平均視聴時間";
  let d2="4K液晶テレビの平均単価";
  let d3="世帯別テレビ普及率";
  let d4="世帯別平均保有台数";
  let d5="テレビ番組意識調査";
  let d6="インターネット利用時間";

  let a1="折れ線グラフ";
  let a2="棒グラフ";
  let a3="円グラフ";
  let a4="散布図";

  let kaisou={
    fl1:{}
  };

if(fl1){
  if(sindan1(num,"root","_2t1")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k1+"」原因は「"+k2+"」と考えられそうです．</p></br>");};
  if(sindan1(num,"root","_2t2")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k1+"」原因は「"+k3+"」と考えられそうです．</p></br>");};
  if(sindan1(num,"root","_2t3")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k1+"」原因は「"+k4+"」と考えられそうです．</p></br>");};
  if(!sindan1(num,"root","_2t1")&&!sindan1(num,"root","_2t2")&&!sindan1(num,"root","_2t3")){$("#checkarea").append("<p class='message'>｛正しい因果｝"+k1+"」原因に関する考察はよくできています．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝問題を置こう．</p></br>");
};

if(fl2){
  if(sindan1(num,"s210","data1")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k2+"」の証拠として「"+d1+"」が考えられそうです．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k2+"」の証拠として「"+d1+"」が考えられそうです．</p></br>");
};

if(fl3){
  if(sindan1(num,"s211","bunseki")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k2+"」の分析として「"+a1+"」が考えられそうです．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k2+"」の分析として「"+a1+"」が考えられそうです．</p></br>");
};

if(fl4){
  if(sindan1(num,"s213","_3t1")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k2+"」原因は「"+k5+"」と考えられそうです．</p></br>");};
  if(sindan1(num,"s213","_3t2")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k2+"」原因は「"+k6+"」と考えられそうです．</p></br>");};
  if(!sindan1(num,"s213","_3t1")&&!sindan1(num,"s213","_3t2")){$("#checkarea").append("<p class='message'>｛正しい因果｝"+k2+"」原因に関する考察はよくできています．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k2+"」原因は「"+k5+"」と考えられそうです．</p></br>");
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k2+"」原因は「"+k6+"」と考えられそうです．</p></br>");
};

if(fl5){
  if(sindan1(num,"s220","data2")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k3+"」の証拠として「"+d2+"」が考えられそうです．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k3+"」の証拠として「"+d2+"」が考えられそうです．</p></br>");
};

if(fl6){
  if(sindan1(num,"s221","bunseki3")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k3+"」の分析として「"+a2+"」が考えられそうです．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k3+"」の分析として「"+a2+"」が考えられそうです．</p></br>");
};

if(fl7){

}

else{

};

if(fl8){
  if(sindan1(num,"s230","data3")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k4+"」の証拠として「"+d3+"」が考えられそうです．</p></br>");};
  if(sindan1(num,"s230","data4")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k4+"」の証拠として「"+d4+"」が考えられそうです．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k4+"」の証拠として「"+d3+"」が考えられそうです．</p></br>");
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k4+"」の証拠として「"+d4+"」が考えられそうです．</p></br>");
};

if(fl9){
  if(sindan1(num,"s231","bunseki1")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k4+"」の分析として「"+a2+"」が考えられそうです．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k4+"」の分析として「"+a2+"」が考えられそうです．</p></br>");
};

if(fl10){

}

else{

};

if(fl11){
  if(sindan1(num,"s310","data5")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k5+"」の証拠として「"+d5+"」が考えられそうです．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k5+"」の証拠として「"+d5+"」が考えられそうです．</p></br>");
};

if(fl12){
  if(sindan1(num,"s311","bunseki3")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k5+"」の分析として「"+a2+"」が考えられそうです．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k5+"」の分析として「"+a2+"」が考えられそうです．</p></br>");
};

if(fl13){

}

else{

};

if(fl14){
  if(sindan1(num,"s320","data6")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k6+"」の証拠として「"+d6+"」が考えられそうです．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k6+"」の証拠として「"+d6+"」が考えられそうです．</p></br>");
};

if(fl15){
  if(sindan1(num,"s321","bunseki")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k6+"」の分析として「"+a1+"」が考えられそうです．</p></br>");};
}

else{
  $("#checkarea").append("<p class='message'>｛空白箇所の指摘｝「"+k6+"」の分析として「"+a1+"」が考えられそうです．</p></br>");
};

if(fl16){

}

else{

};

const messageV=()=>{
  for(let i=0;i<messageArray.length;i++){
    
  }
}


// if(f1){
//   if(sindan1(num,"tv","_2t1")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k1+"」原因は「"+k2+"」と考えられそうです．</p></br>");}
//   else if(sindan1(num,"tv","_2t2")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k1+"」原因は「"+k3+"」と考えられそうです．</p></br>");}
//   else if(sindan1(num,"tv","_2t3")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k1+"」原因は「"+k4+"」と考えられそうです．</p></br>");}

//   else if(f2){
//     if(sindan1(num,"_2t1","_3t1")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k2+"」原因は「"+k5+"」と考えられそうです．</p></br>");};
//     if(sindan1(num,"_2t1","_3t2")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k2+"」原因は「"+k6+"」と考えられそうです．</p></br>");};
//     if(sindan1(num,"_2t1","data1")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k2+"」の証拠として「"+d1+"」が考えられそうです．</p></br>");};
//     if(sindan1(num,"_2t1","bunseki")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k2+"」の分析として「"+a1+"」が考えられそうです．</p></br>");};
//   }

// }

// else if(f1==false){
//   console.log("問題を置こう");
//   if(f2){
//     if(sindan1(num,"_2t1","_3t1")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k2+"」原因は「"+k5+"」と考えられそうです．</p></br>");}
//     else if(sindan1(num,"_2t1","_3t2")){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k2+"」原因は「"+k6+"」と考えられそうです．</p></br>");}
//   }
// }

// else if(f1==false){$("#checkarea").append("<p class='message'>｛欠落・誤りの指摘｝"+k1+"」を置こう．</p></br>");}

  // for(let i=0;i<fs.length;i++){
  //   if(fs[i]){}
  //   for(let j=0;j<flags.length;j++){
  //     if(flags[i]){
  //       console.log("<p class='message'>｛欠落・誤りの指摘｝"+relation[i][0]+"」原因は「"+relation[i][1]+"」と考えられそうです．</p></br>");
  //     }
  //   }
  // }

  // if(flag1){
  //   console.log("液晶売れん原因に「見る人が少なった」ってのは考えられそうです");
  // }
}

  // let block = document.getElementsByClassName("block");
  // block.[i]
  const sindan0=(num,target)=>{
    eval("targetBlock=Blockly.Xml.workspaceToDom(workspace"+num+");");
    // console.log(targetBlock);
    var papaiya=$(targetBlock).html();
    // console.log("fだよ"+papaiya);
    let Loc=papaiya.indexOf(target);
    if(Loc!==-1){
      return true;
    }
    else{
      return false;
    }
  }

const sindan1=(num,outer,target)=>{
  eval("targetBlock=Blockly.Xml.workspaceToDom(workspace"+num+");");
  // console.log(targetBlock);
  var papaiya=$(targetBlock).find("statement[name='"+outer+"']").html();
  // console.log(outer+"穴の中身："+papaiya);
  let Loc=papaiya.indexOf(target);
  if(Loc==-1){
    return true;
  }
  else{
    return false;
  }
}

const sindan2=(num,target)=>{
  eval("targetBlock=Blockly.Xml.workspaceToDom(workspace"+num+");");
  // console.log(targetBlock);
  var papaiya=$(targetBlock).html();
  // console.log(outer+"ブロックの中身："+papaiya);
  let Loc=papaiya.indexOf(target);
  if(Loc!==-1){
    console.log(target+"のstatementはある");
    return true;
  }
  else{
    console.log(target+"のstatementはない");
    return false;
  }
}
  // let BlockText=Blockly.Xml.domToPrettyText(targetBlock);
  // let Dom=targetBlock.getElementsByName(outer);
  // console.log(Dom);
  // let Loc=nakami.indexOf(target);


//試し関数
const AAA = async() => {

  }

  function postForm(value) {
 
    var form = document.createElement('form');
    var request = document.createElement('input');
 
    form.method = 'POST';
    form.action = 'https://httpbin.org/post';
 
    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;
 
    form.appendChild(request);
    document.body.appendChild(form);
 
    form.submit();
 
}