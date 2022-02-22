const socket =
  'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self';

type ClientType = any;

const websocketClient = (onMessage: {
  (event: { data: string }): void;
  (arg0: any): void;
}) => {
  console.log('access');
  let url = socket;
  let client: ClientType = new WebSocket(url);

  client.addEventListener('open', () => {
    console.log(`[websockets] Connected to ${url}`);
  });

  client.addEventListener('close', () => {
    console.log(`[websockets] Disconnected from ${url}`);
    client = null;
  });

  client.addEventListener('message', function (event: any) {
    // @ts-ignore
    onMessage(event);
  });

  return client;
};

export default websocketClient;
