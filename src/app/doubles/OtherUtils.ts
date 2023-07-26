import { v4 } from 'uuid';

export type stringInfo = {
    uppercase: string,
    lowercase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}  

type LoggerServiceCallBack = (arg: string) => void;

export function toUpperCase(arg: string){
    return arg.toUpperCase();
}

export function toLowerCaseWithID(arg: string){
    return arg.toLowerCase() + v4();
}

export function calculateComplexity(stringInfo: stringInfo){
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCallBack(arg: string, callback: LoggerServiceCallBack){
    if(!arg){
        callback('Invalid argument');
        return;
    }
    callback(`called function with ${arg}`);
    return arg.toUpperCase();
}

export class OtherStringUtils {
    public toUpperCase(arg:string){
        return arg.toUpperCase();
    }

    public logString(arg:string){
        console.log(arg);
    }

    public callExternalService(){
        console.log('Calling external service!');
    }
}