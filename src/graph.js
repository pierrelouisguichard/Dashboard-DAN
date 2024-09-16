import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken
 */
// export async function callMsGraph(accessToken) {
//     const headers = new Headers();
//     const bearer = `Bearer ${accessToken}`;

//     headers.append("Authorization", bearer);

//     const options = {
//         method: "GET",
//         headers: headers
//     };

//     return fetch(graphConfig.graphMeEndpoint, options)
//         .then(response => response.json())
//         .catch(error => console.log(error));
// }

export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(graphConfig.graphDevicesEndpoint, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Devices Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw error;
  }
}
