/**
 * Custom SCSS generator for brand tokens
 */
import type { GeneratorContext } from "@clafoutis/cli/types";
import fs from "fs";
import path from "path";

export async function generate(context: GeneratorContext): Promise<void> {
  const { tokensDir, outputDir, StyleDictionary } = context;

  // Clean and create output directory
  const scssDir = path.join(outputDir, "custom");
  fs.rmSync(scssDir, { recursive: true, force: true });
  fs.mkdirSync(scssDir, { recursive: true });

  const SD = new StyleDictionary({
    source: [`${tokensDir}/**/!(*.dark).json`],
    platforms: {
      scss: {
        transformGroup: "scss",
        buildPath: `${scssDir}/`,
        files: [
          {
            destination: "_brand.scss",
            format: "scss/variables",
          },
        ],
      },
    },
  });

  await SD.buildAllPlatforms();
  console.log("Custom SCSS generator completed!");
}
