import logger from '@pnpm-test/logger';

(async () => {
  try {
    logger.init('Pnpm test');

    logger.info('Starting core');

    logger.info('Started !');
  } catch (e) {
    logger.error(e);
  }
})();
