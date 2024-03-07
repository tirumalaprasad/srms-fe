import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Course {
    courseId: number;
    courseName: string;
}

const apiClient = new APIClient<Course>("/course");

export const useCourses = () =>
    useQuery({
        queryKey: ["courses"],
        queryFn: apiClient.getAll,
    });

export default useCourses;
