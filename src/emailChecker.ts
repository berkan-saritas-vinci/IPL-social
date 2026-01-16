export function emailChecker(mail:string): boolean {

    if(!mail.includes("@")){
        return false;
    }

    const checker =  mail.split("@");
    if(!checker[1].includes(".")){
        return false;
    }

    if(checker[1].endsWith(".")){
        return false;
    }

    if(mail.includes(" ")){
        return false;
    }

    if(checker[0].length == 0){
        return false;
    }

return true;
}