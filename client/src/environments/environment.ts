export const environment = {
  production: true,
  envName: 'local',
  keycloak: {
    issuer: 'http://localhost:8080/auth/',
    realm: 'heroes',
    clientId: 'frontend',
    }
  };