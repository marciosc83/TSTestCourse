export class StringUtils {
    public toUpperCase(arg: string) {
        if(!arg){
            throw Error('Invalid argument!');
        }
        
        return toUpperCase(arg);
    } 
}

export function toUpperCase(arg: string) {
    return arg.toUpperCase();
}

export function tolowerCase(arg: string) {
    return arg.toLowerCase();
}

export function length (arg: string) {
    return arg.length;
}

export type stringInfo = {
    uppercase: string,
    lowercase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

/* istanbul ignore next */
export function getStringInfo(arg: string): stringInfo {
    return {
        uppercase: arg.toUpperCase(),
        lowercase: arg.toLowerCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo: {}
    }
}