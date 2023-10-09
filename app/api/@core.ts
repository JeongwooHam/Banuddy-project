export const GET = async <T>(url: string): Promise<T> => {
  const results = await fetch(url, { cache: 'no-store' })
  const response: T = await results.json()
  return response
}
