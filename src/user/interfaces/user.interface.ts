export interface UserData {
    uuid: string;
    name: string;
    username: string;
    token: string;
    schoolUuid: string;
    tenantUuid: string;
}

export interface UserRO {
    user: UserData;
}