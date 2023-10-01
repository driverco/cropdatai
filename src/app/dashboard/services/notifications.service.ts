import { Injectable } from '@angular/core';

@Injectable()
export class NotificationsService {
    getNotificationsData() {
        return [
            {
                id: '999',
                mapId: '11',
                name: 'Cambio esperado de temperatura para cultivo de rosas 1',
                description: 'El cultivo de rosas 1 en 5 dias tendra un 80% de probabilidades de baja temperatura',
                date: '10-sep-2023 12:00',
                color: "#2196F3",
                icon: "pi-calendar",
                routerLink: "/maps/11"
            },
            {
                id: '1000',
                mapId: '12',
                name: 'Humedad de cultivo de rosas 2 Baja',
                description: 'El cultivo de rosas 2 debe ser regado en las próximas horas, su humedad ha bajado en un 10% del límite',
                date: '15-sep-2023 14:25',
                color: "#f43333",
                icon: "pi-exclamation-triangle",
                routerLink: "/maps/12"
            },
            {
                id: '1001',
                mapId: '11',
                name: 'Temperatura de cultivo de rosas 1 muy baja',
                description: 'La temperatura del cultivo de rosas 1 está muy por debajo del umbral',
                date: '15-sep-2023 02:30',
                color: "#f43333",
                icon: "pi-exclamation-triangle",
                routerLink: "/maps/11"
            },
            {
                id: '1002',
                name: 'Se ha detectado una nueva plaga en su región',
                description: 'Estimado Agricultor, la mosca de la fruta ha sido detectada en la región y puede afectar sus cultivos',
                date: '16-sep-2023',
                color: "#2196F3",
                icon: "pi-bell"
            },
            {
                id: '1002',
                name: 'Se aproximan heladas',
                description: 'Heladas en la sabana de Bogotá',
                date: '14-sep-2023',
                color: "#2196F3",
                icon: "pi-calendar",
                routerLink: "/news"
            },
            {
                id: '1003',
                mapId: '13',
                name: 'Reporte de Riego pendiente',
                description: 'El ultimo reporte de Riego fue hace 15 dias, recuerde que el riego debe ser semanal',
                date: '16-sep-2023',
                color: "#2196F3",
                routerLink: "/maps/13",
                icon: "pi-calendar"
            },

        ];
    }

    getNotificationsSmall() {
        return Promise.resolve(this.getNotificationsData().slice(0, 10));
    }

    getNotifications() {
        return Promise.resolve(this.getNotificationsData());
    }
    getNotificationsByMap(id: string) {
        return Promise.resolve(this.getNotificationsData().filter(notif => notif.mapId === id));
    }

};