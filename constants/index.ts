import { QuadrantConfig } from '@/types';

export const QUADRANTS: QuadrantConfig[] = [
  {
    id: 'urgent-important',
    title: 'DO FIRST',
    subtitle: 'Urgent & Important',
    color: '#FF6B6B',
  },
  {
    id: 'not-urgent-important',
    title: 'SCHEDULE',
    subtitle: 'Not Urgent but Important',
    color: '#6FC2FF',
  },
  {
    id: 'urgent-not-important',
    title: 'DELEGATE',
    subtitle: 'Urgent but Not Important',
    color: '#FFD500',
  },
  {
    id: 'not-urgent-not-important',
    title: 'ELIMINATE',
    subtitle: 'Not Urgent & Not Important',
    color: '#4DD4D0',
  },
];

export const COLORS = {
  yellow: '#FFD500',
  blue: '#6FC2FF',
  cyan: '#4DD4D0',
  red: '#FF6B6B',
  beige: '#F4EFEA',
  dark: '#383838',
  white: '#FFFFFF',
  lightBlue: '#E5F4FF',
} as const;

export const DEMO_TASKS = {
  'urgent-important': [
    {
      id: Date.now() + 1,
      text: 'Fix critical production bug',
      completed: false,
    },
  ],
  'not-urgent-important': [
    {
      id: Date.now() + 2,
      text: 'Plan quarterly goals and OKRs',
      completed: false,
    },
  ],
  'urgent-not-important': [
    {
      id: Date.now() + 3,
      text: 'Respond to non-critical emails',
      completed: false,
    },
  ],
  'not-urgent-not-important': [
    {
      id: Date.now() + 4,
      text: 'Browse social media mindlessly',
      completed: false,
    },
  ],
};
