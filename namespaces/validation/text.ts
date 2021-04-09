namespace Validation {
    
    export function text(text:string): boolean {
        if (text.length > 0) {
            return true;
        }else{
            return false;
        }
    }
}

export const MESSAGE : string[] = [
    "Error one",
    "Error two"
]

export function error(numberError: number): string {
    return MESSAGE[numberError];
}