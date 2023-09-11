import * as webpack from 'webpack';
import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';

export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions,
) => {
  if (config.resolve) {
    config.resolve.fallback = {
      process: false,
      module: false,
    };
  }

  return config;
};
