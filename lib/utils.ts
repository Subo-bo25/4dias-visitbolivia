/**
 * Visit Bolivia 4-Day Package - Utility Functions
 * ===============================================
 * 
 * Author: Sergio Agreda (sergioagreda21@outlook.com)
 * GitHub: @AgredaLem023
 * Project: Visit Bolivia - 4-Day Travel Package Frontend
 * 
 * Copyright © 2025 Sergio Agreda. All rights reserved.
 * This code is proprietary and confidential.
 * 
 * Originally developed by Sergio Agreda for Visit Bolivia business operations.
 * 
 * Description:
 * Utility functions for Tailwind CSS class merging and component logic.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
