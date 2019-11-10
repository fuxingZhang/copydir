// Type definitions

/**
 * copy files from one directory to another
 *   - `src` source directory
 *   - `dest` destination directory
 *   - `includeSrc` Whether to include the source folder, default: false
 */
declare function copydir(src: string, dest: string, includeSrc: boolean): Promise<void>

export = copydir