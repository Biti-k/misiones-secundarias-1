export type Player = {
    id:         number;
    attributes: Attributes;
}

export type Attributes = {
    name:        string;
    points:      number;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    emoji:       null;
}