// Type definitions

/**
 * copy files from one directory to another
 *   - `src` folder where all files are located
 *   - `dest` destination directory
 */
declare function copydir(src: string, dest: string): Promise<void>

export = copydir