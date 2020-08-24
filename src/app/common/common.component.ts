
export class CommonComponent {
    public static validateEmail(email): boolean {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

export interface User {
    Id: number;
    Name: string;
    Email: string;
    RoleType: number;
    Status: string;
    MobileNumber: string;
}







