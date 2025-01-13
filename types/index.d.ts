export interface TechStack {
  name: string;
  icon: React.ElementType;
}

export interface Project {
  id: string;
  image?: string;
  github?: string;
  demo?: string;
  tech?: TechStack[];
  devMode: boolean;
}
