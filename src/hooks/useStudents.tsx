import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Student {
    studentId: number;
    studentFullName:string;
    studentDoB: string;
    studentEmail: string;
}

const apiClient = new APIClient<Student>("/student");

export const getStudents = () =>
    useQuery({
        queryKey: ["students"],
        queryFn: apiClient.getAll,
    });

export const createStudent = async (data: any) =>
    await apiClient.createNew({}, data);

export const deleteStudent = async (data: any) =>
    await apiClient.delete({}, data);
