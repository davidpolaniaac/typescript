namespace Validation {
    
    export function date(date:Date): boolean {
        if (isNaN(date.valueOf())) {
            return false;
        }else{
            return true;
        }
    }
}