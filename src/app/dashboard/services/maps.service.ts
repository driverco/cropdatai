import { Injectable } from '@angular/core';
    
@Injectable()
export class MapsService {
    getMapsData() {
        return [
            {
                id: '11',
                code: '1',
                name: 'Cultivo rosas 1',
                messages:3
            },
            {
                id: '12',
                code: '2',
                name: 'Cultivo rosas 2',
                messages:1
            },
            {
                id: '13',
                code: '3',
                name: 'Cultivo rosas 3',
                messages:0
            },
            {
                id: '14',
                code: '4',
                name: 'Cultivo rosas 4',
                messages:0
            },
            {
                id: '15',
                code: '5',
                name: 'Cultivo rosas 5',
                messages:0
            },

        ];
    }

    getMapsSmall() {
        return Promise.resolve(this.getMapsData().slice(0, 10));
    }
    getMap(id: string) {
        return Promise.resolve(this.getMapsData().find(map=>map.id===id));
    }

    getMaps() {
        return Promise.resolve(this.getMapsData());
    }

};