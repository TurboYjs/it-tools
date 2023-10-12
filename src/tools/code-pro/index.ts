import { IconCodeAsterix } from '@tabler/icons-vue';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Code pro',
  path: '/code-pro',
  description: 'Collaboration coding',
  keywords: ['code', 'collaboration'],
  component: () => import('./code-pro.vue'),
  icon: IconCodeAsterix,
  createdAt: new Date('2023-10-12'),
});
