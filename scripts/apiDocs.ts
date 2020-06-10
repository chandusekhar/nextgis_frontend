import { Extractor, ExtractorConfig } from '@microsoft/api-extractor';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const reportFolder = path.resolve('input');
  const reportTempFolder = path.resolve('temp');

  fs.mkdirSync(reportFolder, {
    recursive: true,
  });

  fs.mkdirSync(reportTempFolder, {
    recursive: true,
  });

  const workspaces = JSON.parse(
    execSync('yarn workspaces --silent info').toString()
  );

  const skipPackages: string[] = [
    // support
    '@nextgis/build-tools',
    '@nextgis/eslint-config',
    '@nextgis/demo',
    '@nextgis/demo-app',
    // map adapters
    '@nextgis/leaflet-map-adapter',
    '@nextgis/mapbox-map-adapter',
    '@nextgis/ol-map-adapter',
    '@nextgis/cesium-map-adapter',
    '@nextgis/ngw-leaflet',
    '@nextgis/ngw-ol',
    '@nextgis/ngw-mapbox',
    '@nextgis/ngw-cesium',
    // vue
    '@nextgis/vuex-ngw',
    '@nextgis/vuetify-ngw-components',
    '@nextgis/vue-ngw-ol',
    '@nextgis/vue-ngw-mapbox',
    '@nextgis/vue-ngw-map',
    '@nextgis/vue-ngw-leaflet',
  ];

  const packages = Object.keys(workspaces).filter(
    (p) => !skipPackages.includes(p)
  );
  packages.forEach((packageName) => {
    const libPath = `packages${packageName.replace('@nextgis', '')}`;
    const packagePath = `${libPath}/package.json`;
    const packageJson = require(`../${packagePath}`) as any;

    const config = ExtractorConfig.prepare({
      packageJson,
      packageJsonFullPath: path.resolve(`${packagePath}`),
      configObjectFullPath: path.resolve(`${libPath}`),
      configObject: {
        projectFolder: path.resolve(libPath),
        mainEntryPointFilePath: path.resolve(`${libPath}/lib/index.d.ts`),
        compiler: {
          tsconfigFilePath: path.resolve(`${libPath}/tsconfig.json`),
        },
        docModel: {
          enabled: true,
          apiJsonFilePath: `${reportFolder}/<unscopedPackageName>.api.json`,
        },
        apiReport: {
          enabled: true,
          reportFolder,
          reportTempFolder,
          reportFileName: '<unscopedPackageName>.api.md',
        },
      },
    });

    const result = Extractor.invoke(config, {
      localBuild: true,
      messageCallback: (message) => {
        let loc = '';
        if (message.sourceFilePath !== undefined) {
          loc += `${message.sourceFilePath}:`;
          if (message.sourceFileLine !== undefined) {
            loc += `${message.sourceFileLine}:`;
            if (message.sourceFileColumn !== undefined) {
              loc += `${message.sourceFileColumn}:`;
            }
          }
          loc += ' ';
        }
        // tslint:disable-next-line: no-console
        console.warn(
          `${loc}(${message.category}) ${message.text} (${message.messageId})`
        );
      },
    });
    if (!result.succeeded) {
      throw new Error(`failed to extract api when processing '${packageName}'`);
    }
  });

  // tslint:disable-next-line: no-console
  console.log(execSync('yarn exec api-documenter markdown').toString());
}

main();