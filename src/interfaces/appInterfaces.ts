export interface RestaurantsResponse {
    restaurants: Restaurant[];
}

export interface Restaurant {
    id:          number;
    userId:      number;
    address:     string;
    image:       string;
    description: string;
    name:        string;
    rating:      number;
    comentarios: number;
}


export interface CommentsResponse {
    comments: Comment[];
}

export interface Comment {
    id:           number;
    userId:       number;
    restaurantId: number;
    rating:       number;
    description:  string;
    user:         string;
}

