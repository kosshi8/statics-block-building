

const getPromise = async(id1,id2,id3,id4) => {
  let requestUrl="https://dashboard.e-stat.go.jp/api/1.0/Json/getData?IndicatorCode="+id1+"&RegionCode="+id2;
  if(Number.isNaN(id3)||Number.isNaN(id4)){
    console.log("適切な形で数値を入力してください");
  }
  else{
    if(!(Number.isNaN(id4))&&id3==undefined){
      requestUrl=requestUrl+"&TimeTo="+id4+"CY00"+"&MetaGetFlg=Y";
    }
    else if(!(Number.isNaN(id3))&&id4==undefined){
      requestUrl=requestUrl+"&TimeFrom="+id3+"CY00"+"&MetaGetFlg=Y";
    }
    else if(id3==undefined&&id4==undefined){
      console.log("数値を入力してください");
    }
    else{
      requestUrl=requestUrl+"&TimeFrom="+id3+"CY00"+"&TimeTo="+id4+"CY00"+"&MetaGetFlg=Y";
    }
  }

    console.log("右のURLからデータを取得します"+requestUrl);
    const response = await fetch(requestUrl, { method: "get"});
    const text = response.text();
    if (response.status == 200) {
        return text;
    } else {
      return Promise.reject(json.error);
    }
}

const getData = async(id1,id2,id3,id4,id5,id6,id7,option) => {
  const text= await getPromise(id1,id2,id3,id4);
  const rawdata=JSON.parse(text);
  const arraylength=rawdata["GET_STATS"]["STATISTICAL_DATA"]["DATA_INF"]["DATA_OBJ"].length;

  let array=[];
  if(id5=="array"){
  for(let step=0;step<arraylength;step++){
    const value=rawdata["GET_STATS"]["STATISTICAL_DATA"]["DATA_INF"]["DATA_OBJ"][step]["VALUE"]["$"];
    const revalue=Number(value);
    const t=rawdata["GET_STATS"]["STATISTICAL_DATA"]["DATA_INF"]["DATA_OBJ"][step]["VALUE"]["@time"];
    if(option=="$"){
      if(revalue>id6&&revalue<id7){array.push(revalue);}
      else{}
      }
    else if(option=="@time"){const ret=t.match(/\d+/g)[0];if(revalue>id6&&revalue<id7){array.push(ret);}}
    else{array.push(value);}
  }
  console.log("値の配列は"+array);
  return array;
}

 
  else{
    let average=0;
    let sum=0;
    let count=0;
    for(let step=0;step<arraylength;step++){
      const value=rawdata["GET_STATS"]["STATISTICAL_DATA"]["DATA_INF"]["DATA_OBJ"][step]["VALUE"]["$"];
      const revalue=Number(value);
      const t=rawdata["GET_STATS"]["STATISTICAL_DATA"]["DATA_INF"]["DATA_OBJ"][step]["VALUE"]["@time"];
      if(option=="$"){
        const revalue=Number(value);
          if(revalue>id6&&revalue<id7){count++;sum+=revalue;average=sum/count;}
          else{}
        }
        else if(option=="@time"){
          const ret=t.match(/\d+/g)[0];
          if(revalue>id6&&revalue<id7){array.push(ret);}
          else{}
        }
    }
    if(option=="$"){
      if(id5=="count"){
        console.log("個数は"+count);
        return count;
      }
      else if(id5=="average"){
        console.log("平均は"+average);
        return average;      
      }
      else if(id5=="sum"){
        console.log("合計は"+sum);
        return sum;
      }
    }
    else if(option=="@time"){
      console.log("年の配列は"+array);
      return array;
    }
  }

}

const getMeta = async(id1,id2,id3,id4,option) => {
  const text= await getPromise(id1,id2,id3,id4);
  const rawdata=JSON.parse(text);
  const termDetail=rawdata["GET_STATS"]["STATISTICAL_DATA"]["CLASS_INF"]["CLASS_OBJ"][0]["CLASS"][0]["TERM_DETAILS"]["TERM_DETAIL"][0][option];
  // ["TERM_DETAILS"]["TERM_DETAIL"][0]["@name"]
  return termDetail;
}

const shapeData = (array1,array2) => {
  let length=array1.length;
  let array=new Array(length);
  for(let i=0;i<length;i++){
    array[i]=new Array(2);
    array[i][0]=array1[i];
    array[i][1]=array2[i];
  }
  return array;
}

const shapeData2 = (array1,array2) => {
  let length=array1.length;
  let array=[];
  for(let i=0;i<length;i++){
        const obj={};
        obj.name=array1[i];
        obj.value=array2[i];
        array.push(obj);
      }
      return array;
}

const AAA = async() => {
  // const IndicatorCode="0102010000000010010"
  // const RegionCode="01000"
  // const TimeFrom="1985"
  // const TimeTo="2018"
  // const j=await getMeta(IndicatorCode,RegionCode,TimeFrom,TimeTo,"@name");
  // console.log(j);
  console.log(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
}

const Visualize =async(idcode,areacode,TimeFrom,TimeTo,stats,fmi,fma,way) => {
  const dataT=await getData(idcode,areacode,TimeFrom,TimeTo,stats,fmi,fma,"@time");
  const data1=await getData(idcode,areacode,TimeFrom,TimeTo,stats,fmi,fma,"$");
  const dataName=await getMeta(idcode,areacode,TimeFrom,TimeTo,"@name");
  if(way=="LineChart"&&stats=="array"){
    const dataset=await shapeData(dataT,data1);
    DrawLineChart(dataset,dataName);
  }
  else if(way=="PieChart"&&stats=="array"){
    const dataset=shapeData2(dataT,data1);
    DrawPieChart(dataset);
  }
  else if(way=="BarChart"&&stats=="array"){
    const dataset=shapeData2(dataT,data1);
    DrawBarChart(dataset);
  }
  else if(way=="ScatterChart"&&stats=="array"){
    const dataset=shapeData(dataT,data1);
    DrawScatterChart(dataset);
  }
  else if(way=="StaTable"){
    const dataA=await getData(idcode,areacode,TimeFrom,TimeTo,"array",fmi,fma,"$");
    DrawStaTable(data1,dataA,dataT,stats);
  }
  else{alert("Not appropriate for VISUALIZE");}
}

const getIdcode = async() => {
    
}

const getAreacode =async() => {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  return value_name;
}

const getTimeCycle =async(tcname) => {

}

