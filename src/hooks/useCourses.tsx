import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Course {
    courseId: number;
    courseName: string;
}

const apiClient = new APIClient<Course>("/course");

export const getCourses = () =>
    useQuery({
        queryKey: ["courses"],
        queryFn: apiClient.getAll,
    });

export const postCourse = async (data: any) =>
    await apiClient.createNew({}, data);

export const deleteCourse = async (data: any) =>
    await apiClient.delete({}, data);
