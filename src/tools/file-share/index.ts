import { IconCloudUpload } from '@tabler/icons-vue';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'File share',
  path: '/file-share',
  description: '',
  keywords: ['file', 'share'],
  component: () => import('./file-share.vue'),
  icon: IconCloudUpload,
  createdAt: new Date('2023-10-12'),
});