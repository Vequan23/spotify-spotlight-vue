import { apiController } from '@/lib/http/apiController'

interface ExampleData {
  id: number
  title: string
  completed: boolean
}

export const getExampleData = async (id: number): Promise<ExampleData> => {
  const response = await apiController.get(`/todos/${id}`)
  return response.data
} 