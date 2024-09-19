import { z } from "zod";

const isObject = <T>(value: T): boolean => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

const quickSort = <T>(a: T[], sortKey?: string): T[] => {
    let pivot = a[0];

    if (sortKey && isObject(pivot))
        pivot = (a[0] as Record<string, any>)[sortKey];
    if (a.length <= 1)
        return a

    const leftArray = [];
    const rightArray = [];

    for (let i = 1; i < a.length; i++) {
        if (a[i] < pivot || sortKey && (a[i] as Record<string, any>)?.[sortKey] < pivot) {
            leftArray.push(a[i]);
            continue;
        }
        rightArray.push(a[i])
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

const dataSchema = z.array(z.record(z.any())) || z.array(z.date());

const quickSortByDateParamsSchema = z.object({
    data: dataSchema,
    direction: z.enum(["Asc", "Des"]).default("Des"),
    sortKey: z.string().optional(),
})


// accepts both array of date and a record containing a feild as date and returns a sorted one.
export const quickSortByDate = (params: z.infer<typeof quickSortByDateParamsSchema>) => {
    const isArray = Array.isArray(params.data);
    const sortedData = isArray && params.sortKey
        ? quickSort<Date>(params.data as Date[])
        : quickSort<Record<string, any>>(params.data, params.sortKey);

    return params.direction === "Asc"
        ? sortedData
        : sortedData.toReversed();
}

