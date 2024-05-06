import restaurantApi from "../api/api";
import { Comment, CommentsResponse, Restaurant } from "../interfaces/appInterfaces";

export const getRestaurant = async (id: number): Promise<Restaurant> => {
  const { data } = await restaurantApi.get<Restaurant>(`/restaurants/${id}`);
  return data;
};

export const getComments = async (id: number) => {
  const { data } = await restaurantApi.get<CommentsResponse>(`/comments/${id}`);
  return data.comments
};
