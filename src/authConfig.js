import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "55596787-9480-4f4c-91f6-2df2f97fe5d0",
    authority:
      "https://login.microsoftonline.com/e661844d-866b-4c49-be4e-1f2c582d7c72",
    redirectUri: window.location.origin, // Dynamically set redirectUri
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: [
    "User.Read",
    "Device.Read.All", // Permission to read device data
  ],
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
  graphDevicesEndpoint:
    "https://graph.microsoft.com/v1.0/devices?$filter=operatingSystem eq 'IPhone'",
};
