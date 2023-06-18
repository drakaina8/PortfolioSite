import miniAppType from './miniAppTypeEnum';

interface miniApp {
    id: number;
    name: string;
    faClasses: string;
    type: miniAppType;
}

export default miniApp;
