import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Result {
    resultId: number;
    courseId: number;
    courseName: string;
    studentId: number;
    studentFullName: string;
    score: string;
}

const apiClient = new APIClient<Result>("/result");

export const useResults = () =>
    useQuery({
        queryKey: ["results"],
        queryFn: apiClient.getAll,
    });

export default useResults;
