export interface ICustomError {
	message: string;
	field?: string;
}

export type ICustomErrorResponse = ICustomError[];
