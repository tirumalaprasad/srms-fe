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

const resApiClient = new APIClient<Result>("/result");

export const getResults = () =>
    useQuery({
        queryKey: ["results"],
        queryFn: resApiClient.getAll,
    });

export const createResult = async (data: any) =>
        await resApiClient.createNew({}, data);

export default getResults;


const evalApiClient = new APIClient<Result>("/result/toeval");

export const getEvalObjects = () =>
    useQuery({
        queryKey: ["getEvalObjects"],
        queryFn: evalApiClient.getAll,
    });

