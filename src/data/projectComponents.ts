import type { ComponentType } from 'react';
import type { Project } from '@/data/homeData';
import Plukkers from '@/components/projects/Plukkers';
import DimMak from '@/components/projects/DimMak';
import Res from '@/components/projects/Res';
import Oatified from '@/components/projects/Oatified';
import AbleBiolabs from '@/components/projects/AbleBiolabs';
import HeavenScent from '@/components/projects/HeavenScent';
import Mojo from '@/components/projects/Mojo';
import Strippies from '@/components/projects/Strippies';

export const projectComponents: Record<string, ComponentType<{ project: Project }>> = {
  "plukkers": Plukkers,
  "dimmak": DimMak,
  "res": Res,
  "oatified": Oatified,
  "mojo": Mojo,
  "ablebiolabs": AbleBiolabs,
  "heavenscent": HeavenScent,
  "strippies": Strippies,
};