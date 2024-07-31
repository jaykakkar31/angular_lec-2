import { AbstractControl, ValidationErrors } from "@angular/forms";

export function invalidEmail(control: AbstractControl): ValidationErrors|null {

    const value = control.value?.toLowerCase()
    const hosts=['gmail.com','yahoo.com']
    if (!value) {
        return null;
    }
    const matches=hosts.some((h)=>value.indexOf(`@${h}`)>-1)
    return matches?{invalidEmail:true}:null


}