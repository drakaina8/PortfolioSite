import miniAppType from './miniAppTypeEnum';

interface miniApp {
    id: number;
    name: string;
    iconURL: string;
    type: miniAppType;
}

export default miniApp;
