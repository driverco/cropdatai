import { Injectable } from '@angular/core';

@Injectable()
export class SensorsService {
    generateRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private mapsIds: string[] = ['11', '12', '13', '14', '15'];
    private mapsSensorsTemp: number[] = [3, 2, 1, 4, 3];
    private mapsSensorsTempBasic: number[] = [-10, 32, 25, 24, 26];

    private mapsSensorsHum: number[] = [2, 2, 2, 2, 2];
    private mapsSensorsHumBasic: number[] = [20, 5, 20, 22, 20];

    getSensorsTemperatureData(type:String) {
        let outputVar: any[] = [];
        let sensorsCount = (type==="TEMP"?this.mapsSensorsTemp:this.mapsSensorsHum);
        let sensorsBasic = (type==="TEMP"?this.mapsSensorsTempBasic:this.mapsSensorsHumBasic);

        for (const mapId of this.mapsIds) {
            for (var sensor = 0; sensor < sensorsCount[this.mapsIds.indexOf(mapId)]; sensor++) {
                outputVar.push({
                    id: mapId + '-0' + sensor,
                    mapId: mapId,
                    type: type,
                    label: (type==="TEMP"?'Temperatura (°C)':'Humedad (%)'),
                    value: this.generateRandomNumber(sensorsBasic[this.mapsIds.indexOf(mapId)]-3, sensorsBasic[this.mapsIds.indexOf(mapId)]+3)
                });
            }
        }
        return (outputVar);
    }

    getTempSensorsbyMap(mapId: string) {
        return Promise.resolve(this.getSensorsTemperatureData("TEMP").filter(sensor => sensor.mapId === mapId));
    }

    getTempSensors() {
        return Promise.resolve(this.getSensorsTemperatureData("TEMP"));
    }

    getHumSensorsbyMap(mapId: string) {
        return Promise.resolve(this.getSensorsTemperatureData("HUM").filter(sensor => sensor.mapId === mapId));
    }

    getHumSensors() {
        return Promise.resolve(this.getSensorsTemperatureData("HUM"));
    }

};