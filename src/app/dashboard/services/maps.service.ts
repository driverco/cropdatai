import { Injectable } from '@angular/core';
    
@Injectable()
export class MapsService {
    getMapsData() {
        return [
            {
                id: '1000',
                code: '1',
                name: 'Cultivo rosas 1',
                messages:3
            },
            {
                id: '1001',
                code: '2',
                name: 'Cultivo rosas 2',
                messages:1
            },
            {
                id: '1002',
                code: '3',
                name: 'Cultivo rosas 3',
                messages:0
            },
            {
                id: '1003',
                code: '4',
                name: 'Cultivo rosas 4',
                messages:0
            },
            {
                id: '1004',
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