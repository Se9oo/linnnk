import ky, { KyResponse, Options, ResponsePromise } from 'ky';

const instance = ky.create({
	hooks: {},
});

export const HTTP = {
	get: async <T>(url: string, config?: Options): Promise<T> => {
		return await instance.get(`${process.env.BACKEND_URL}/${url}`, config).json();
	},
	post: async <T, P = undefined>(
		url: string,
		params?: P,
		config?: Options,
		returnType?: keyof ResponsePromise<T>,
	): Promise<T> => {
		const parameter = params instanceof FormData ? { body: params, ...config } : { json: params, ...config };

		const response = await instance.post(`${process.env.BACKEND_URL}/${url}`, parameter);

		switch (returnType) {
			case 'blob':
				return response.blob() as Promise<T>;
			case 'arrayBuffer':
				return response.arrayBuffer() as Promise<T>;
			case 'formData':
				return response.formData() as Promise<T>;
			case 'text':
				return response.text() as Promise<T>;
			case 'json':
			default:
				return response.json();
		}
	},
	delete: async <T>(url: string, config?: Options): Promise<KyResponse<T>> => {
		return await instance.delete(`${process.env.BACKEND_URL}/${url}`, config);
	},
	put: async <T, P>(url: string, params?: P, config?: Options): Promise<KyResponse<T>> => {
		return await instance.put(`${process.env.BACKEND_URL}/${url}`, { json: params, ...config });
	},
	patch: async <T, P>(url: string, params?: P, config?: Options): Promise<KyResponse<T>> => {
		return await instance.patch(`${process.env.BACKEND_URL}/${url}`, { json: params, ...config });
	},
};
