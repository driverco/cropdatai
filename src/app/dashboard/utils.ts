import { Map } from "./models/maps";

export const bgColorsTempUnder = [5, 30, 1000];
export const bgColorsTempDefs = ['rgba(132, 132, 255, 0.8)', 'rgba(132, 255, 132, 0.8)', 'rgba(255, 132, 132, 0.8)'];
export const bgColorsHumUnder = [5, 10, 1000];
export const bgColorsHumDefs = ['rgba(200, 50, 220, 0.8)', 'rgba(100, 50, 220, 0.8)', 'rgba(50, 50, 220, 0.7)'];
export const basicGraphOptions = {
    plugins: {
      /*legend: { display: false },*/
      datalabels: { color: "#333344" },
      tooltip: { enabled: false },
    },
    scales: {
      y: {
        max: 50,
        min: -20,
        ticks: {
          stepSize: 5
        }
      }
    }

  };

export function groupByValue(arr: any[], key: any, prefix:any) {
    var ret = [];
    for (const x of arr) {
      if (x.hasOwnProperty(key)) {
        ret.push(prefix+x[key]);
      }
    }
    return ret;
  }
  export  function colorsByValue(arr: number[], limits: number[], defs: string[]) {
    var ret: string[] = [];
    for (let i = 0; i < arr.length; i++) {
      /*console.log("find:"+arr[i]);
      console.log(limits.find((element) => arr[i] < element));
      console.log(defs[ limits.indexOf(limits.find((element) => arr[i] < element)!)]);*/
      ret.push(defs[limits.indexOf(limits.find((element) => arr[i] < element)!)]);
    }
    return ret;
  }
  export function addSensors(maps: Map[], sensorsData: any[], items: any[], verbose:boolean) {
    //console.log(this.sensorsData);
    for (const map of maps) {
      let sensorsbyMap = sensorsData.filter(sensor => sensor.mapId === map.id);
      let sensorsLabels = groupByValue(sensorsbyMap, "id", (verbose?"Sensor:":""));
      let sensorsValues = groupByValue(sensorsbyMap, "value","");
      let colors = (sensorsbyMap[0].type==="TEMP"?bgColorsTempUnder:bgColorsHumUnder);
      let defs = (sensorsbyMap[0].type==="TEMP"?bgColorsTempDefs:bgColorsHumDefs)
      let bgColorsSensors = colorsByValue(sensorsValues, colors, defs);

      items.push(
        {
          "name": map.name,
          "mapId": map.id,
          "basicData": {
            labels: sensorsLabels,
            datasets: [
              {
                label: sensorsbyMap[0].label,
                data: sensorsValues,
                backgroundColor: bgColorsSensors,
                borderColor: bgColorsSensors,
                borderWidth: 1
              }
            ]
          }

          , "basicOptions": basicGraphOptions
        }

      );
    }
  }