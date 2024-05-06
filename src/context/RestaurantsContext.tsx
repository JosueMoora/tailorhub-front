"use client"
import React, {Dispatch, SetStateAction, createContext, useEffect, useState} from 'react';
import { Comment, CommentsResponse, Restaurant, RestaurantsResponse } from '../interfaces/appInterfaces';
import restaurantApi from '../api/api';
import { redirect, useRouter } from 'next/navigation';

type RestaurantContextProps = {
  restaurants: Restaurant[];
  comments: Comment[];
  currentRestaurant: Restaurant;
  myRestaurants: Restaurant[];
  loadRestaurants: () => Promise<void>;
  loadComments: (id: number) => Promise<void>
  loadMyRestaurants: (id: number) => Promise<void>;
  loadRestaurantById: (id: number) => Promise<void>;
  addRestaurant: ({}: any) => Promise<Restaurant>;
  addComment: ({}: any) => void;
  updateRestaurant: ({}: any ) => Promise<void>;
  updateComment: ({}: any ) => Promise<void>;
  deleteRestaurant: (id: number) => Promise<any>;
  deleteComment: ({}: any) => Promise<any>;

  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>
};

export const RestaurantContext = createContext({} as RestaurantContextProps);

export const RestaurantProvider = ({children}: any) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentRestaurant, setCurrentRestaurant] = useState<Restaurant>({
    id:          0,
    userId:      0,
    address:     '',
    image:       '',
    description: '',
    name:        '',
    rating:      0,
    comentarios: 0,
  });
  const [myRestaurants, setMyRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    loadRestaurants();
  },[loading]);

  const loadRestaurants = async () => {
    const res = await restaurantApi.get<RestaurantsResponse>('/restaurants');
    setRestaurants(res.data.restaurants);
    setLoading(false)
  };
  const loadMyRestaurants = async (id: number) => {
    const res = await restaurantApi.get<RestaurantsResponse>(`/restaurants/myrestaurants/${id}`);
    setMyRestaurants(res.data.restaurants);
    setLoading(false)
  };

  const addRestaurant = async ({ address, description, name, image }: any) => {
    
    const formData = new FormData();
    formData.append('address', address);
    formData.append('description', description);
    formData.append('name', name);
    formData.append('image', image);
  
    try {
      const res = await restaurantApi.post<Restaurant | any>('/restaurants', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      setRestaurants([...restaurants, res.data]);
      setLoading(false);
      router.push("/restaurant/saved");
      return res.data;
    } catch (error) {
      console.error('Error al añadir restaurante:', error);
      router.push("/restaurant/404")
    }
  };
  const loadComments = async (id: number) => {
    const { data } = await restaurantApi.get<CommentsResponse>(`/comments/${id}`);
    setComments(data.comments)
  };
  const loadRestaurantById = async (id: number) => {
    try {
      const {data} = await restaurantApi.get<Restaurant>(`/restaurants/${id}`);
      setCurrentRestaurant(data)
    } catch (error) {
      console.log(error);
    }
  };
  const addComment = async ({ rating, description, id }: any) => {
    try {
      const {data} = await restaurantApi.post<Comment>(`/comments/`, {
        rating,
        description,
        restaurantId: id
      });
      return await loadComments(id)
    } catch (error: any) {
      console.log(error)
      setLoading(false)
    }
    
  };
  const updateComment = async ({ rating, description, id, userId }: any) => {
    try {
      const {data} = await restaurantApi.put<Comment>(`/comments/${id}`, {
        rating,
        description,
        userId
      });
      return await loadComments(id)
    } catch (error: any) {
      console.log(error)
      setLoading(false)
    }
    
  };
  const updateRestaurant = async ( { address, description, name, image, id, userId }: any ) => {
    const formData = new FormData();
    formData.append('address', address);
    formData.append('description', description);
    formData.append('name', name);
    formData.append('image', image);
    formData.append('userId', userId);

    try {
      const {data} = await restaurantApi.put<Restaurant>(`/restaurants/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      });
      setRestaurants(restaurants.map(r => (r.id === id ? data : r)));
      setLoading(false)
      router.push("/restaurant/saved");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRestaurant = async (id: number) => {
    try {
      const {data} = await restaurantApi.delete<Restaurant>(`/restaurants/${id}`);
      setRestaurants(restaurants.filter(r => r.id !== data.id));
      setLoading(false)
      router.push("/restaurant/deleted")
      // return data;
    } catch (error: any) {
      return error.response.data.msg;
    }
  };
  const deleteComment = async ({id, userId}: any) => {
    try {
      const {data} = await restaurantApi.delete<Comment>(`/comments/${id}`, userId);
      setComments(comments.filter(r => r.id !== data.id));
      setLoading(false)
      // return data;
    } catch (error: any) {
      return error.response.data.msg;
    }
  };

  
  return (
    <RestaurantContext.Provider
      value={{
        addRestaurant,
        addComment,
        deleteRestaurant,
        deleteComment,
        loadRestaurants,
        loadComments,
        comments,
        currentRestaurant,
        restaurants,
        updateRestaurant,
        updateComment,
        loadRestaurantById,
        loading,
        setLoading,
        myRestaurants,
        loadMyRestaurants
      }}>
      {children}
    </RestaurantContext.Provider>
  );
};
