import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Student {
    studentId: number;
    studentFullName:string;
    studentDoB: string;
    studentEmail: string;
}

const apiClient = new APIClient<Student>("/student");

export const useStudents = () =>
    useQuery({
        queryKey: ["students"],
        queryFn: apiClient.getAll,
    });

export default useStudents;
