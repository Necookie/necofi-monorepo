import { queryOptions } from '@tanstack/react-query';
import type { ApiHealth } from '@necofi/types';
import { normalizeBaseUrl } from '@necofi/utils';
import { apiHealthSchema } from '@necofi/validation';

export const createApiClient = (baseUrl: string) => {
  const resolvedBaseUrl = normalizeBaseUrl(baseUrl);

  return {
    getHealth: async (): Promise<ApiHealth> => {
      const response = await fetch(`${resolvedBaseUrl}/health`);

      if (!response.ok) {
        throw new Error(`Health check failed with status ${response.status}`);
      }

      return apiHealthSchema.parse(await response.json());
    },
  };
};

export const createHealthQueryOptions = (baseUrl: string) =>
  queryOptions({
    queryKey: ['health', baseUrl],
    queryFn: async () => createApiClient(baseUrl).getHealth(),
  });
