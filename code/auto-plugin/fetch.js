const Fetch = require('node-fetch')
const readline = require('node:readline/promises')

let plist = [
  'senecajs/seneca-cache',
  'senecajs/seneca-cache-test',
  'senecajs/seneca-entity-cache',
  'senecajs/seneca-memcached-cache',
  'senecajs/seneca-redis-cache',
  'senecajs/seneca-entity',
  'senecajs/seneca-entity-cache',
  'senecajs/seneca-entity-depend',
  'senecajs/seneca-entity-history',
  'voxgig/seneca-entity-rtag',
  'voxgig/seneca-entity-util',
  'senecajs/seneca-gateway',
  'senecajs/seneca-gateway-auth',
  'senecajs/seneca-gateway-express-auth',
  'senecajs/seneca-gateway-express',
  'senecajs/seneca-gateway-lambda',
  'voxgig/seneca-msg-run',
  'voxgig/seneca-msg-test',
  'senecajs/seneca-redis-cache',
  'senecajs/seneca-redis-pubsub-transport',
  'senecajs/seneca-redis-queue-transport',
  'senecajs/seneca-redis-store',
  'voxgig/seneca-redis-kv',
  'senecajs/seneca-search-aws-cloudsearch',
  'senecajs/seneca-search-elastic',
  'senecajs/seneca-search-mini',
  'senecajs/seneca-search-test',
  'senecajs/seneca-telemetry',
  'senecajs/seneca-telemetry-datadog',
  'senecajs/seneca-telemetry-newrelic',
  'voxgig/seneca-user-telemetry',
  'senecajs/seneca-transport',
  'senecajs/seneca-customerio-test',
  'senecajs/seneca-amqp-transport',
  'senecajs/seneca-beanstalk-transport',
  'senecajs/seneca-sns-transport',
  'senecajs/seneca-user',
  'voxgig/seneca-user-telemetry',
  'senecajs/seneca-web',
  'senecajs/seneca-web-adapter-connect',
  'senecajs/seneca-web-adapter-express',
  'senecajs/seneca-web-adapter-hapi',
  'senecajs/seneca-web-adapter-koa1',
  'senecajs/seneca-web-adapter-koa2',
  'senecajs/seneca-web-adaptor-connect',
  'senecajs/seneca-web-adaptor-express',
  'senecajs/seneca-web-adaptor-hapi',
  'senecajs/seneca-web-adaptor-koa1',
  'senecajs/seneca-web-adaptor-koa2',
  'senecajs/seneca-gateway-express',
  'senecajs/seneca-gateway-express-auth',
  'senecajs/seneca-logentries-logger',
  'senecajs/seneca-logstash-logger',
  'senecajs/seneca-pino-logger',
  'senecajs/seneca-apimatic-provider',
  'senecajs/seneca-branchio-provider',
  'senecajs/seneca-checklyhq-provider',
  'senecajs/seneca-eventbrite-provider',
  'senecajs/seneca-evervault-provider',
  'senecajs/seneca-gcal-provider',
  'senecajs/seneca-github-provider',
  'senecajs/seneca-gitlab-provider',
  'senecajs/seneca-hubspot-provider',
  'senecajs/seneca-meetup-provider',
  'senecajs/seneca-mixpanel-provider',
  'senecajs/seneca-nordigen-provider',
  'senecajs/seneca-notion-provider',
  'senecajs/seneca-orbit-provider',
  'senecajs/seneca-salesforce-provider',
  'senecajs/seneca-stytch-provider',
  'senecajs/seneca-tangocard-provider',
  'senecajs/seneca-trello-provider',
  'senecajs/seneca-vercel-provider',
  'senecajs/seneca-webflow-provider',
  'senecajs/seneca-zoom-provider',
  'senecajs/seneca-customerio-provider',
  'senecajs/seneca-dynamo-store',
  'senecajs/seneca-jsonfile-store',
  'senecajs/seneca-knex-store',
  'senecajs/seneca-level-store',
  'senecajs/seneca-mem-store',
  'senecajs/seneca-mongo-store',
  'senecajs/seneca-mysql-store',
  'senecajs/seneca-postgres-store',
  'senecajs/seneca-redis-store',
  'senecajs/seneca-s3-store',
  'senecajs/seneca-sqlite-store',
  'senecajs/seneca-cache-test',
  'senecajs/seneca-error-test',
  'senecajs/seneca-search-test',
  'senecajs/seneca-store-test',
  'senecajs/seneca-transport-test',
  'voxgig/seneca-msg-test',
  'senecajs/seneca-test-plugin',
  'senecajs/seneca-sql-util',
  'voxgig/seneca-entity-util',
  'senecajs/seneca-redis-pubsub-transport',
  'senecajs/seneca-redis-queue-transport',
  'senecajs/seneca-registry',
  'senecajs/seneca-consul-registry',
  'senecajs/seneca-flame',
  'senecajs/seneca-debug',
  'senecajs/seneca-basic',
  'senecajs/seneca-ledger',
  'senecajs/seneca-maintain',
  'senecajs/seneca-request',
  'senecajs/seneca-mail',
  'senecajs/seneca-balance-client',
  'senecajs/seneca-graph',
  'senecajs/seneca-gateway',
  'senecajs/seneca-repl',
  'senecajs/seneca-refer',
  'senecajs/seneca-browser',
  'senecajs/seneca-flow',
  'senecajs/seneca-vote',
  'senecajs/seneca-env',
  'senecajs/seneca-allow',
  'senecajs/seneca-apikey',
  'senecajs/seneca-joi',
  'senecajs/seneca-mesh',
  'voxgig/seneca-kv',
  'senecajs/seneca-log-filter',
  'senecajs/seneca-auth',
  'senecajs/seneca-parambulator',
  'senecajs/seneca-config',
  'voxgig/seneca-doc',
  'voxgig/seneca-group',
  'voxgig/seneca-hapi',
  'voxgig/seneca-external',
  'voxgig/seneca-populate',
  'voxgig/seneca-monitor',
  'voxgig/seneca-owner',
  'voxgig/seneca-promisify',
  'voxgig/seneca-member',
  'voxgig/seneca-sendgrid-mail',
  'voxgig/seneca-srv-admin',
  'voxgig/seneca-component',
]

let badgeRegex = /\[!\[(Maintainability|DeepScan grade)\]\((.*?)\)\]\((.*?)\)/
let outObj = {}

async function fetchP() {
  for (let i = 0; i < plist.length; i++) {
    let url =
      'https://raw.githubusercontent.com/' + plist[i] + '/master/README.md'

    await Fetch(url)
      .then((res) => res.text())
      .then((text) => {
        // console.log('\n\n' + plist[i])
        outObj[plist[i]] = {
          deepscan_url: '',
          deepscan_badge: '',
          maintainability_badge: '',
        }
        let lines = text.split('\n')
        for (let line of lines) {
          let match = line.match(badgeRegex)
          if (match) {
            let [, badge, badgeURL, pageURL] = match
            if ('DeepScan grade' == badge) {
              // console.log(`deepscan_url: ${pageURL}`)
              // console.log(`deepscan_badge: ${badgeURL}`)
              outObj[plist[i]].deepscan_url = pageURL
              outObj[plist[i]].deepscan_badge = badgeURL
            }
            if ('Maintainability' == badge) {
              // console.log(`maintainability_badge: ${badgeURL}`)
              outObj[plist[i]].maintainability_badge = badgeURL
            }
          }
        }
      })
      .catch((err) => console.error(err))
  }
}

fetchP()

setTimeout(function logObj() {
  console.log(outObj)
}, 120000)
