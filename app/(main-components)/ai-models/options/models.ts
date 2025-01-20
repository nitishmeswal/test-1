import { ImageIcon, Zap, Box, Video, Brain, MessageSquare, Music, Upload, Bot } from 'lucide-react';
import type { AIModel } from '@/services/types';

export const models: AIModel[] = [
  {
    id: 'flux-image',
    name: 'Flux Image Gen',
    description: 'High-performance image generation and manipulation with support for multiple styles and formats',
    type: 'image',
    tags: ['Image Generation', 'Fast'],
    icon: ImageIcon,
    iconBg: 'bg-blue-500/10',
    features: [
      'Multiple style support',
      'Real-time image manipulation',
      'Batch processing',
      'Custom style training'
    ],
    defaultConfig: {
      containerImage: 'adhikjoshi/pytorch-gpulab:latest',
      exposedPorts: [8080, 3754],
      minDisk: 10,
      minVram: 24
    }
  },
  {
    id: 'fast-api',
    name: 'Fast API',
    description: 'High-speed API development and deployment with automatic documentation',
    type: 'api',
    tags: ['Fast', 'API'],
    icon: Zap,
    iconBg: 'bg-yellow-500/10',
    features: [
      'Automatic API documentation',
      'High-performance endpoints',
      'OpenAPI integration',
      'Real-time validation'
    ],
    defaultConfig: {
      containerImage: 'adhikjoshi/fastapi-gpulab:latest',
      exposedPorts: [8000],
      minDisk: 5,
      minVram: 8
    }
  },
  {
    id: 'super-agents',
    name: 'AI Super Agents',
    description: 'Advanced AI agents for task automation and decision making',
    type: 'agent',
    tags: ['AI', 'Automation'],
    icon: Bot,
    iconBg: 'bg-purple-500/10',
    features: [
      'Task automation',
      'Decision making',
      'Multi-agent coordination',
      'Custom agent training'
    ],
    defaultConfig: {
      containerImage: 'adhikjoshi/agents-gpulab:latest',
      exposedPorts: [8888],
      minDisk: 15,
      minVram: 16
    }
  },
  {
    id: 'video-gen',
    name: 'Video Generator',
    description: 'AI-powered video generation and editing with real-time processing',
    type: 'video',
    tags: ['Video', 'Generation'],
    icon: Video,
    iconBg: 'bg-red-500/10',
    features: [
      'Real-time video generation',
      'Style transfer',
      'Video editing',
      'Custom effects'
    ],
    defaultConfig: {
      containerImage: 'adhikjoshi/video-gpulab:latest',
      exposedPorts: [8080, 50051],
      minDisk: 20,
      minVram: 32
    }
  },
  {
    id: 'llm-server',
    name: 'LLM Server',
    description: 'Large Language Model server for text generation and analysis',
    type: 'text',
    tags: ['LLM', 'Text'],
    icon: MessageSquare,
    iconBg: 'bg-green-500/10',
    features: [
      'Text generation',
      'Language analysis',
      'Custom model training',
      'API integration'
    ],
    defaultConfig: {
      containerImage: 'adhikjoshi/llm-gpulab:latest',
      exposedPorts: [8000, 8080],
      minDisk: 30,
      minVram: 24
    }
  },
  {
    id: 'music-gen',
    name: 'Music Generator',
    description: 'AI-powered music generation and audio processing',
    type: 'audio',
    tags: ['Music', 'Audio'],
    icon: Music,
    iconBg: 'bg-pink-500/10',
    features: [
      'Music generation',
      'Audio processing',
      'Style transfer',
      'Custom training'
    ],
    defaultConfig: {
      containerImage: 'adhikjoshi/music-gpulab:latest',
      exposedPorts: [8080],
      minDisk: 15,
      minVram: 16
    }
  },
  {
    id: 'deepfake',
    name: 'Deepfake Studio',
    description: 'Professional video synthesis and face swapping with advanced controls',
    type: 'video',
    tags: ['Video', 'AI'],
    icon: Video,
    iconBg: 'bg-red-500/10',
    features: [
      'Face swapping',
      'Video synthesis',
      'Real-time processing',
      'High-quality output'
    ],
    defaultConfig: {
      containerImage: 'adhikjoshi/deepfake-gpulab:latest',
      exposedPorts: [8080],
      minDisk: 30,
      minVram: 32
    }
  },
  {
    id: 'pytorch-server',
    name: 'PyTorch Server',
    description: 'Deploy PyTorch models with high performance and scalability',
    type: 'server',
    tags: ['PyTorch', 'Server'],
    icon: Brain,
    iconBg: 'bg-orange-500/10',
    features: [
      'Model serving',
      'Dynamic batching',
      'GPU optimization',
      'Model versioning'
    ],
    defaultConfig: {
      containerImage: 'huggingface/transformers-pytorch-gpu:latest',
      exposedPorts: [8888],
      minDisk: 15,
      minVram: 16
    }
  },
  {
    id: '3d-server',
    name: '3D Server',
    description: '3D model generation and rendering with real-time capabilities',
    type: '3d',
    tags: ['3D', 'Rendering'],
    icon: Box,
    iconBg: 'bg-blue-500/10',
    features: [
      '3D model generation',
      'Real-time rendering',
      'Texture synthesis',
      'Animation support'
    ],
    defaultConfig: {
      containerImage: 'adhikjoshi/3d-gpulab:latest',
      exposedPorts: [8080, 3754],
      minDisk: 20,
      minVram: 24
    }
  },
  {
    id: 'audio-server',
    name: 'Audio Server',
    description: 'Audio processing and generation with support for multiple formats',
    type: 'audio',
    tags: ['Audio', 'Generation'],
    icon: Music,
    iconBg: 'bg-green-500/10',
    features: [
      'Audio generation',
      'Format conversion',
      'Real-time processing',
      'Voice synthesis'
    ],
    defaultConfig: {
      containerImage: 'adhikjoshi/audio-gpulab:latest',
      exposedPorts: [8080],
      minDisk: 20,
      minVram: 16
    }
  },
  {
    id: 'custom-model',
    name: 'Custom Model',
    description: 'Deploy your own AI model with custom configuration',
    type: 'custom',
    tags: ['Custom', 'Flexible'],
    icon: Upload,
    iconBg: 'bg-purple-500/10',
    features: [
      'Custom model deployment',
      'Flexible configuration',
      'Resource optimization',
      'API customization'
    ],
    defaultConfig: {
      containerImage: 'nvidia/cuda:11.8.0-runtime-ubuntu22.04',
      exposedPorts: [8080],
      minDisk: 10,
      minVram: 8
    }
  }
];
