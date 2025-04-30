import { LookupEnum } from "../enums/lookup.enum";

export interface Lookup {
    id?: string; 
    name: string;
    type: LookupEnum;
    parentId?: string;
}