export default interface Project {
  id: number;
  name: string;
  createdAt: string;
  htmlUrl: string;
  description?: string;
  homepage?: string;
  [key: string]: unknown;
}
