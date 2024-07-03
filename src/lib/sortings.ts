import { isDate } from "util/types";
import { z, ZodSchema } from "zod";

type quickSortByDateParams = {
    direction: "Asc" | "Des"
} & ({ array: any[] | Date[], sortKey: string, } | { array: Date[] })

const quickSortByDateParamsSchema = z.object({
    direction: z.enum(["Asc", "Des"]).default("Des"),
    array: z.array(z.any() || Date),
    sortKey: z.string().optional(),
}).refine(data => {
    if (data.sortKey)
        return data.array.every((date: any | Date) => isDate(date));
});


export const quickSortByDate = (params: typeof quickSortByDateParamsSchema) => {


}
