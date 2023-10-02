import { Map } from "./models/maps";

const bgColorsTempUnder = [5, 30, 1000];
const bgColorsTempDefs = ['rgba(132, 132, 255, 0.8)', 'rgba(132, 255, 132, 0.8)', 'rgba(255, 132, 132, 0.8)'];
const bgColorsHumUnder = [5, 10, 1000];
const bgColorsHumDefs = ['rgba(200, 50, 220, 0.8)', 'rgba(100, 50, 220, 0.8)', 'rgba(50, 50, 220, 0.7)'];
const basicGraphOptions = {
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
const basicGraphPredictOptions = {
  plugins: {
    /*legend: { display: false },*/
    datalabels: { color: "#333344" },
    tooltip: { enabled: false },
  },
  scales: {
    y: {
      max: 50,
      min: 0,
      ticks: {
        stepSize: 5
      }
    }
  }

};


export function groupByValue(arr: any[], key: any, prefix: any) {
  var ret = [];
  for (const x of arr) {
    if (x.hasOwnProperty(key)) {
      ret.push(prefix + x[key]);
    }
  }
  return ret;
}
export function colorsByValue(arr: number[], limits: number[], defs: string[]) {
  var ret: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    /*console.log("find:"+arr[i]);
    console.log(limits.find((element) => arr[i] < element));
    console.log(defs[ limits.indexOf(limits.find((element) => arr[i] < element)!)]);*/
    ret.push(defs[limits.indexOf(limits.find((element) => arr[i] < element)!)]);
  }
  return ret;
}
export function addSensors(maps: Map[], sensorsData: any[], items: any[], verbose: boolean) {
  //console.log(this.sensorsData);
  for (const map of maps) {
    let sensorsbyMap = sensorsData.filter(sensor => sensor.mapId === map.id);
    let sensorsLabels = groupByValue(sensorsbyMap, "id", (verbose ? "Sensor:" : ""));
    let sensorsValues = groupByValue(sensorsbyMap, "value", "");
    let colors = (sensorsbyMap[0].type === "TEMP" ? bgColorsTempUnder : bgColorsHumUnder);
    let defs = (sensorsbyMap[0].type === "TEMP" ? bgColorsTempDefs : bgColorsHumDefs)
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
export function addPredict(map: Map, items: any[]) {
  const documentStyle = getComputedStyle(document.documentElement);
  //console.log(this.sensorsData);
  items.push(
    {
      "name": "Modelo predictivo para " + map.name,
      "mapId": map.id,
      "basicData": {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Temperatura promedio',
            data: [20, 22, 25, 28, 25, 22, 20, 22, 25, 30, 25, 22],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4
          },
          {
            label: 'Crecimiento de la flor',
            data: [25, 0, 15, 20, 22, 25, 0, 15, 20, 22, 23, 25],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.4
          },
          {
            label: 'periodo de Recoleccion',
            data: [0,0,0,10,20,0,0,0,0,10,20,0],
            fill: true,
            borderColor: documentStyle.getPropertyValue('--orange-500'),
            tension: 0.4,
            backgroundColor: 'rgba(255,167,38,0.2)'
          }
        ]
      }

      , "basicOptions": basicGraphPredictOptions
    }

  );
}
