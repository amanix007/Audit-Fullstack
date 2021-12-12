
export interface SiteInterface {
    id?: number;
    name: string;
    city: string;
    description: string;
    latitude: number;
    longitude: number;
    creator_id?: number;
    editor_id?: number;
    creatorUserName?: string;
    editorUserName?: string;
    createdAt?: string;
    updatedAt?: string;
}


export interface EditorInterface {
    id: number;
    userName: string;

}