/**
 * Custom SCSS generator plugin for mock-design-system
 * Demonstrates the custom generator pattern from Clafoutis docs
 */
import type { GeneratorPlugin } from '@clafoutis/cli';
import StyleDictionary from 'style-dictionary';
import fs from 'fs';

export const generate: GeneratorPlugin = async ({ tokensDir, outputDir }) => {
  // Ensure output directory exists
  const scssOutputDir = `${outputDir}/custom`;
  fs.mkdirSync(scssOutputDir, { recursive: true });

  const sd = new StyleDictionary({
    source: [`${tokensDir}/**/*.json`],
    platforms: {
      scss: {
        transformGroup: 'scss',
        buildPath: `${scssOutputDir}/`,
        files: [
          {
            destination: '_brand.scss',
            format: 'scss/variables',
            filter: (token) => !token.filePath.includes('.dark.json'),
          },
        ],
      },
    },
  });

  await sd.buildAllPlatforms();
  console.log('Custom SCSS generator completed!');
};
