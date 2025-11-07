export type QuadrantType =
  | 'urgent-important'
  | 'not-urgent-important'
  | 'urgent-not-important'
  | 'not-urgent-not-important';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export interface TasksByQuadrant {
  'urgent-important': Task[];
  'not-urgent-important': Task[];
  'urgent-not-important': Task[];
  'not-urgent-not-important': Task[];
}

export interface QuadrantConfig {
  id: QuadrantType;
  title: string;
  subtitle: string;
  color: string;
}
