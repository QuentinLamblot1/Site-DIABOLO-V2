import { LucideIcon } from "lucide-react";

export interface PillarProps {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}