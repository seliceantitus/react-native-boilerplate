import { AxiosResponse } from 'axios';

abstract class RestService<T> {
	abstract get(): Promise<AxiosResponse<T>>;
	abstract getAll(): Promise<AxiosResponse<T[]>>;
	abstract getOne(id: string | number): Promise<AxiosResponse<T>>;
	abstract create(entity: T): Promise<AxiosResponse<unknown>>;
	abstract update(entity: T): Promise<AxiosResponse<unknown>>;
	abstract delete(id: string | number): Promise<AxiosResponse<unknown>>;
}

export { RestService };
