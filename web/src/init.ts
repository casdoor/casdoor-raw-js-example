import Sdk, { SdkConfig } from 'casdoor-js-sdk/lib/cjs/sdk'

const sdkConfig: SdkConfig = {
    serverUrl: "https://door.casbin.com",
    clientId: "014ae4bd048734ca2dea",
    appName: "app-casnode",
    organizationName: "casbin",
    redirectPath: "/callback",
}
const sdk = new Sdk(sdkConfig)
// call sdk to handle
