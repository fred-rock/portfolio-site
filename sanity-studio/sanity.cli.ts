import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '54362e3y',
    dataset: 'production'
  },
  studioHost: 'afrederick-portfolio-site',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
